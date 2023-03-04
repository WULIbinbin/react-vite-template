import { useCallback, useEffect, useId, useMemo, useState } from 'react';
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

const mainKey = 'form-key';
/**
 * 组件嵌套
 * 1、组件itemId随机（form-key-xxx），作为mapKey，确保不重复
 * 2、用一维数组收集所有表单，用itemId和parentId关联
 * 3、一维数组转树结构
 * 4、筛除已存在的表单项
 */

const formKey = (id, parent = mainKey) => `${parent}-${id}`;

export default function Index() {
  const [components, setComponents] = useState<ItemType[]>(component);
  const [container, setContainer] = useState<ItemType[]>([]);
  const [allSelected, setAllSelect] = useState([]);
  const setMainContainer = (selected: ItemType[], isRoot, parent?: ItemType) => {
    console.log(555, selected, isRoot, parent, allSelected);
    if (!selected.length && !!parent) {
      return;
    }
    const tempSelected: ItemType[] = _cloneDeep(selected).map((s, i) => {
      s.itemId = s.itemId || getFormId();
      s.parentId = s.parentId || parent?.itemId || null;
      if (s.compType === 'wrap') {
        s.children = s.children || [];
      }
      return s;
    });
    let current: ItemType[];
    if (isRoot) {
      current = tempSelected;
    } else {
      // 筛除已存在的表单项
      const filterSelected =
        allSelected.length === 0
          ? tempSelected
          : tempSelected.filter((t) => allSelected.findIndex((f) => f.itemId === t.itemId) === -1);
      current = [...allSelected, ...filterSelected];
    }
    setAllSelect(current);
    console.log('allSelected', current, tempSelected);
    const tree = arrayToTree<ItemType>(current, null);
    console.log('tree', tree);
    setContainer(tree);
  };

  function renderContainer(current: ItemType[], root: number) {
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
              direction={'horizontal'}
              fallbackOnBody={true}
              swapThreshold={1}
              animation={200}
              list={item.children}
              setList={(e) => {
                console.log(root, e, item, item.children);
                setMainContainer(e, false, item);
              }}
            >
              {(item.children && renderContainer(item.children, root + 1)) || null}
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
    console.log('container', container);
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
            put: true,
          }}
          list={container}
          setList={(e) => {
            console.log(333);
            setMainContainer(e, true);
          }}
        >
          {renderContainer(container, 0)}
        </ReactSortable>
      </div>
      <div className='form-sandbox__dispose'></div>
    </div>
  );
}
