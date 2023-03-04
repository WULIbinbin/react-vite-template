/* eslint-disable react/no-unknown-property */
import { useEffect, useMemo, useRef, useState } from 'react';
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

export default function Index() {
  const [components, setComponents] = useState<ItemType[]>(component);
  const [container, setContainer] = useState<ItemType[]>([]);
  const [allSelected, setAllSelect] = useState<ItemType[]>([]);
  const containerRef = useRef();

  const diffComponent = (selected: ItemType[], from: string, parent?: ItemType) => {
    console.log(`from:${from}`, selected, parent);
    if (!selected.length && !!parent) {
      // return;
    }
    // 深拷贝避免对象引用
    const cloneSelected: ItemType[] = _cloneDeep(selected);
    // 2、创建数组递归收集所有表单，用itemId和parentId关联
    const tempSelected = mapSelected<ItemType>(cloneSelected, parent);
    let current: ItemType[];
    if (from === 'root') {
      current = tempSelected;
    } else if (tempSelected.length >= parent.children.length) {
      // wrap中子组件的新增操作
      current = [
        // 4、all中筛除已存在的表单，插入新的表单项，避免vdom.key重复渲染
        ...allSelected.filter((t) => tempSelected.findIndex((f) => f.itemId === t.itemId) === -1),
        ...tempSelected,
      ];
    } else {
      // wrap中子组件的删除操作
      console.log('删除操作', parent.itemId);
      current = allSelected.filter((t) => arrayDistinct([tempSelected, parent.children], 'itemId').itemId !== t.itemId);
    }
    setAllSelect(current);
    console.log('allSelected', current, tempSelected);
    const [tree, map] = arrayToTree<ItemType>(current, null);
    console.log('tree', tree, map);
    setContainer(tree);
  };

  const findComp = (el) => {
    const compType = el.getAttribute('comp-type');
    const comp = components.find((f) => f.compType === compType);
    return comp;
  };

  const addComponent = (evt: SortableEvent, from: string, target: ItemType[], parent?: ItemType) => {
    const { item, newDraggableIndex } = evt;
    const comp = findComp(item);
    // 非注册组件返回
    if (!comp) return;
    const cloneComps = _cloneDeep(target);
    cloneComps.splice(newDraggableIndex, 0, comp);
    const selected = target.length === 0 ? [comp] : cloneComps;
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
    cloneComps.splice(oldDraggableIndex, 1);
    diffComponent(cloneComps, from, parent);
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
              setList={(e) => {
                // 不要删除
                // diffComponent(e, item.itemId, item);
              }}
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
    console.log('container', container, allSelected);
  }, [container]);

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
          list={container}
          onUpdate={(e) => {
            console.log('container-onUpdate操作------------------->', e);
            updateComponent(e, 'root', container);
          }}
          onAdd={(e) => {
            console.log('container-onAdd操作------------------->', e);
            addComponent(e, 'root', container);
          }}
          // 废弃，用onAdd代替
          setList={(e, sortable) => {
            // console.log('root操作------------------------>', sortable, containerRef.current);
            // diffComponent(e, 'root');
          }}
        >
          {renderContainer(container)}
        </ReactSortable>
      </div>
      <div className='form-sandbox__dispose'></div>
    </div>
  );
}
