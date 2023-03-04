import { useEffect, useMemo, useState } from 'react';
import { ReactSortable, ItemInterface } from 'react-sortablejs';
import _cloneDeep from 'lodash-es/cloneDeep';
import { arrayToTree, getFormId } from '@/utils/methods';

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
  const [allSelected, setAllSelect] = useState([]);
  const setMainContainer = (selected: ItemType[], from: string, parent?: ItemType) => {
    console.log(`from:${from}`, selected, parent);
    if (!selected.length && !!parent) {
      return;
    }
    // 深拷贝避免对象引用
    const cloneSelected: ItemType[] = _cloneDeep(selected);
    // 2、创建数组递归收集所有表单，用itemId和parentId关联
    const tempSelected = mapSelected<ItemType>(cloneSelected, parent);
    let current: ItemType[];
    if (from === 'root') {
      current = tempSelected;
    } else {
      current = [
        // 4、all中筛除已存在的表单，插入新的表单项
        ...allSelected.filter((t) => tempSelected.findIndex((f) => f.itemId === t.itemId) === -1),
        ...tempSelected,
      ];
    }
    setAllSelect(current);
    console.log('allSelected', current, tempSelected);
    const [tree, map] = arrayToTree<ItemType>(current, null);
    console.log('tree', tree, map);
    setContainer(tree);
  };

  function renderContainer(current: ItemType[]) {
    return (
      current &&
      current.map((item) =>
        item.compType === 'wrap' ? (
          <div key={item.itemId}>
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
              setList={(e) => {
                console.log('wrap操作--------------------------->');
                setMainContainer(e, item.itemId, item);
              }}
            >
              {(item.children && renderContainer(item.children)) || null}
            </ReactSortable>
          </div>
        ) : (
          <div key={item.itemId} className={`form-sandbox__payground--item`}>
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
          list={container}
          setList={(e) => {
            console.log('root操作------------------------>');
            setMainContainer(e, 'root');
          }}
        >
          {renderContainer(container)}
        </ReactSortable>
      </div>
      <div className='form-sandbox__dispose'></div>
    </div>
  );
}
