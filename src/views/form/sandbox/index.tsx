/* eslint-disable no-case-declarations */
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
  nodeIndex?: number;
  children?: ItemType[];
}

const component = [
  { compId: '1', compName: '栅格', compType: 'wrap' },
  { compId: '2', compName: '输入框', compType: 'input' },
  { compId: '3', compName: '下拉选择器', compType: 'selector' },
  { compId: '4', compName: '日期选择器', compType: 'date-picker' },
];

function mapSelected<T>(child: T[], parent: T): T[] {
  const tempArr = [];
  function map(arr: T[], parent: T) {
    arr.forEach((s: T, idx: number) => {
      s.itemId = s.itemId || getFormId();
      s.parentId = s.parentId || parent?.itemId || null;
      // nodeIndex始终根据遍历顺序
      s.nodeIndex = idx;
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
}

const initContainer = [];
let allSelected = [];

function containerReducer<T>(state: T[], action: ICtRdr<T>) {
  let current: T[];
  const { eventType, selected, toDelete } = action;
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
      const isDeleteItem = (t: T) => t.itemId === toDelete.itemId && t.parentId === toDelete.parentId;
      current = allSelected.filter((t) => !isDeleteItem(t));
      break;
    default:
      current = [...allSelected.filter((t) => selected.findIndex((f) => f.itemId === t.itemId) === -1), ...selected];
  }

  allSelected = current;
  console.log(allSelected);
  const [tree, map] = arrayToTree<T>(current, null);
  return tree;
}

export default function Index() {
  const [components, setComponents] = useState<ItemType[]>(component);
  const [containerState, dispatchContainer] = useReducer(containerReducer<ItemType>, initContainer);
  const [showDispose, setDispose] = useState<boolean>(false);

  const diffComponent = (selected: ItemType[], eventType: EEvt, parent?: ItemType, toDelete?: ItemType) => {
    // 2、创建数组递归收集所有表单，用itemId和parentId关联
    // * 深拷贝select防止对象引用导致dom.key重复
    const cloneParent = _cloneDeep(parent);
    const cloneSelected = _cloneDeep(selected);
    const tempSelected = mapSelected<ItemType>(cloneSelected, cloneParent);
    dispatchContainer({
      eventType,
      selected: tempSelected,
      toDelete,
    });
  };

  const findComp = (el: HTMLElement) => {
    const compType = el.getAttribute('comp-type');
    const comp = components.find((f) => f.compType === compType);
    return comp;
  };

  const addComponent = (evt: SortableEvent, target: ItemType[], parent?: ItemType) => {
    const { item, newDraggableIndex } = evt;
    const comp = findComp(item);
    // 非注册组件返回
    if (!comp) return;
    const selected = target;
    selected.splice(newDraggableIndex, 0, comp);
    diffComponent(selected, EEvt.ON_ADD, parent);
  };

  const updateComponent = (evt: SortableEvent, target: ItemType[], parent?: ItemType) => {
    const { newDraggableIndex, oldDraggableIndex } = evt;
    const selected = arraySwap(_cloneDeep(target), oldDraggableIndex, newDraggableIndex);
    diffComponent(selected, EEvt.ON_UPDATE, parent);
  };

  const removeComponent = (evt: SortableEvent, target: ItemType[], parent?: ItemType) => {
    const { oldDraggableIndex } = evt;
    const selected = target;
    const toDelete = selected[oldDraggableIndex];
    selected.splice(oldDraggableIndex, 1);
    diffComponent(selected, EEvt.ON_REMOVE, parent, toDelete);
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
                updateComponent(e, item.children, item);
              }}
              onAdd={(e) => {
                console.log('child-onAdd操作------------------->');
                addComponent(e, item.children, item);
              }}
              onRemove={(e) => {
                console.log('child-onRemove操作------------------->');
                removeComponent(e, item.children, item);
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
    // console.log('container', containerState, allSelected);
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
          swap
          list={containerState}
          onUpdate={(e) => {
            console.log('container-onUpdate操作------------------->');
            updateComponent(e, containerState, null);
          }}
          onAdd={(e) => {
            console.log('container-onAdd操作------------------->');
            addComponent(e, containerState, null);
          }}
          onRemove={(e) => {
            console.log('container-onRemove操作------------------->');
            removeComponent(e, containerState, null);
          }}
          // 废弃，用on-event代替
          setList={() => {}}
        >
          {renderContainer(containerState)}
        </ReactSortable>
        {showDispose && <div className='form-sandbox__dispose'></div>}
      </div>
    </div>
  );
}
