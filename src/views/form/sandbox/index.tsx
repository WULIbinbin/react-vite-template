/* eslint-disable react/no-unknown-property */
import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { ReactSortable, ItemInterface, SortableEvent } from 'react-sortablejs';
import _cloneDeep from 'lodash-es/cloneDeep';

import { arrayToTree, getFormId, arraySwap, arrayDistinct } from '@/utils/methods';

import './index.less';

interface ItemType extends ItemInterface {
  parentId?: string;
  compId: string;
  itemId?: string;
  compName: string;
  compType: string;
  children?: ItemType[];
}

const component = [
  { compId: '1', compName: 'wrap', compType: 'wrap' },
  { compId: '2', compName: 'input', compType: 'input' },
  { compId: '3', compName: 'picker', compType: 'picker' },
];

function mapSelected<T>(child: T[], parent: T): T[] {
  const tempArr = [];
  function map(arr: T[], parent: T) {
    arr.forEach((s: T) => {
      s.itemId = s.itemId || getFormId();
      s.parentId = s.parentId || parent?.itemId || null;

      if (s.compType === 'wrap') {
        s.children = s.children || [];
        map(s.children, s);
      }
      tempArr.push(s);
    });
  }
  map(child, parent);
  return tempArr;
}

/**
 * 组件嵌套
 * 1、组件itemId随机（form-key-xxx），作为mapKey，确保不重复
 * 2、创建数组（all）收集所有表单，用itemId和parentId关联
 * 3、all数组转树结构
 * 4、all中筛除已存在的表单项，插入新的表单项
 */
/**
 * sortable现象
 * 1、鼠标点击sortable组件会触发setList，影响state逻辑，改用on-event方法
 * 2、event行为
 *    2.1、把子组件抽取到父同级组件，父组件onAdd的调用早于子组件onRemove
 *    2.2、把父同级组件抽取到子组件，子组件onAdd的调用早于父组件onRemove
 */
/**
 * sortable-event事件
 */
enum EEvt {
  ON_ADD = 'add',
  ON_REMOVE = 'remove',
  ON_UPDATE = 'update',
}
interface ICtRdr<T> {
  eventType: EEvt;
  selected: T[];
  toDelete?: T;
  parent?: T | null;
}

const initContainer = [];
let allSelected = [];

function containerReducer<T>(state: T[], action: ICtRdr<T>) {
  let current: T[];
  const { eventType, selected, toDelete, parent } = action;
  switch (eventType) {
    case EEvt.ON_ADD:
      // wrap中子组件的新增操作
      current = [
        // 4、all中筛除已存在的表单，插入新的表单项，避免vdom.key重复渲染
        ...allSelected.filter((t) => selected.findIndex((f) => f.itemId === t.itemId) === -1),
        ...selected,
      ];
      break;
    case EEvt.ON_REMOVE:
      console.log('--------',selected,parent)
      // eslint-disable-next-line no-case-declarations
      const isDeleteItem = (t: T) => t.itemId === toDelete.itemId && t.parentId === toDelete.parentId;
      current = [...allSelected.filter((t) => !isDeleteItem(t)), ...selected];
      break;
    default:
      current = allSelected;
  }
  console.log(state, action, allSelected);
  allSelected = current;
  const [tree, map] = arrayToTree<T>(current, null);
  console.log('tree', tree, map, allSelected);
  return tree;
}

export default function Index() {
  const [components, setComponents] = useState<ItemType[]>(component);
  const [containerState, dispatchContainer] = useReducer(containerReducer<ItemType>, initContainer);
  const containerRef = useRef();

  const diffComponent = (selected: ItemType[], from: string, parent?: ItemType, toDelete?: T) => {
    console.log(`from:${from}`);
    if (!selected.length && !!parent) {
      // return;
    }
    // 2、创建数组递归收集所有表单，用itemId和parentId关联
    const tempSelected = mapSelected<ItemType>(selected, parent);
    if (parent) {
      console.log('子级操作');
      if (tempSelected.length >= parent.children.length) {
        console.log('子级新增操作', selected, parent);
        dispatchContainer({
          eventType: EEvt.ON_ADD,
          selected: tempSelected,
          parent,
        });
      } else {
        // wrap中子组件的删除操作
        console.log('子级删除操作', selected, parent);
        dispatchContainer({
          eventType: EEvt.ON_ADD,
          selected: tempSelected,
          toDelete,
          parent,
        });
        // current = allSelected.filter((t) => arrayDistinct([tempSelected, parent.children], 'itemId').itemId !== t.itemId);
      }
    } else {
      console.log('根级操作', tempSelected, allSelected);
      if (tempSelected.length >= allSelected.length) {
        dispatchContainer({
          eventType: EEvt.ON_ADD,
          selected: tempSelected,
          parent,
        });
      }
    }
  };

  const findComp = (el: HTMLElement) => {
    const compType = el.getAttribute('comp-type');
    const comp = components.find((f) => f.compType === compType);
    return comp;
  };

  const addComponent = (evt: SortableEvent, from: string, target: ItemType[], parent?: ItemType) => {
    const { item, newDraggableIndex } = evt;
    const comp = findComp(item);
    // 非注册组件返回
    if (!comp) return;
    // 深拷贝避免对象引用
    const cloneComps = _cloneDeep(target);
    cloneComps.splice(newDraggableIndex, 0, comp);
    const selected = target.length === 0 ? [comp] : cloneComps;
    console.log('addComponent', selected);
    diffComponent(selected, from, parent);
  };

  const updateComponent = (evt: SortableEvent, from: string, target: ItemType[], parent?: ItemType) => {
    const { newDraggableIndex, oldDraggableIndex } = evt;
    const cloneComps = _cloneDeep(target);
    diffComponent(arraySwap(cloneComps, newDraggableIndex, oldDraggableIndex), from, parent);
  };

  const removeComponent = (evt: SortableEvent, from: string, target: ItemType[], parent?: ItemType) => {
    const { oldDraggableIndex } = evt;
    const cloneComps = _cloneDeep(target);
    const toDelete = cloneComps[oldDraggableIndex];
    cloneComps.splice(oldDraggableIndex, 1);
    console.log('删除项', toDelete);
    diffComponent(cloneComps, from, parent, toDelete);
  };

  function renderContainer(current: ItemType[]) {
    return (
      current &&
      current.map((item) =>
        item.compType === 'wrap' ? (
          <div key={item.itemId} comp-type={item.compType}>
            <ReactSortable
              tag={'div'}
              className={`form-sandbox__payground--wrap`}
              group={{
                name: 'component',
                pull: true,
                put: true,
              }}
              swap
              direction={'horizontal'}
              fallbackOnBody={true}
              swapThreshold={1}
              animation={200}
              list={item.children}
              onUpdate={(e) => {
                console.log('child-onUpdate操作------------------->');
                updateComponent(e, item.itemId, item.children, item);
              }}
              onAdd={(e) => {
                console.log('child-onAdd操作------------------->');
                addComponent(e, item.itemId, item.children, item);
              }}
              onRemove={(e) => {
                console.log('child-onRemove操作------------------->');
                removeComponent(e, item.itemId, item.children, item);
              }}
              // 废弃，用on-event代替
              setList={() => {}}
            >
              {(item.children && renderContainer(item.children)) || null}
            </ReactSortable>
          </div>
        ) : (
          <div key={item.itemId} comp-type={item.compType} className={`form-sandbox__payground--item`}>
            <input type='text' placeholder={item.compName} />
          </div>
        ),
      )
    );
  }

  useEffect(() => {
    console.log('container', containerState, allSelected);
  }, [containerState]);

  return (
    <div className='form-sandbox__main'>
      <div className='form-sandbox__components'>
        <ReactSortable
          tag={'div'}
          group={{
            name: 'component',
            pull: 'clone',
            put: false,
          }}
          sort={false}
          list={components}
          setList={(e) => {
            setComponents(e);
          }}
        >
          {components.map((item) => (
            <div
              className={`form-sandbox__components--item form-sandbox__components--${item.compType}`}
              key={item.compId}
              comp-type={item.compType}
            >
              {item.compName}
            </div>
          ))}
        </ReactSortable>
      </div>
      <div className='form-sandbox__content'>
        <ReactSortable
          tag={'div'}
          className='form-sandbox__payground'
          group={{
            name: 'component',
            pull: true,
            put: true,
          }}
          ref={containerRef}
          swap
          list={containerState}
          onUpdate={(e) => {
            console.log('container-onUpdate操作------------------->');
            updateComponent(e, 'root', containerState);
          }}
          onAdd={(e) => {
            console.log('container-onAdd操作------------------->');
            addComponent(e, 'root', containerState);
          }}
          onRemove={(e) => {
            console.log('container-onRemove操作------------------->');
            removeComponent(e, 'root', containerState);
          }}
          // 废弃，用on-event代替
          setList={() => {}}
        >
          {renderContainer(containerState)}
        </ReactSortable>
      </div>
      <div className='form-sandbox__dispose'></div>
    </div>
  );
}
