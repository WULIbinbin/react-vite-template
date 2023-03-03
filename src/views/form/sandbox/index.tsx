import { useEffect, useRef, useState } from 'react';
import { ReactSortable, ItemInterface } from 'react-sortablejs';
import _cloneDeep from 'lodash-es/cloneDeep';
import { arrayToTree } from '@/utils/methods';

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

export default function Index() {
  const [components, setComponents] = useState<ItemType[]>(component);
  const [container, setContainer] = useState<ItemType[]>([]);
  let allSelected = [];

  const formKey = (id, parent = mainKey) => `${parent}-${id}`;

  const setMainContainer = (selected: ItemType[], isRoot, parent?: ItemType) => {
    console.log(selected, isRoot, parent);
    if (parent && !parent.children) return;
    const tempSelected = _cloneDeep(selected).map((s, i) => {
      s.itemId = formKey(i + 1, parent?.itemId || mainKey);
      s.parentId = parent?.itemId || null;
      if (s.compType === 'wrap') {
        s.children = s.children || [];
      }
      return s;
    });
    if (isRoot) {
      allSelected = tempSelected;
    } else {
      allSelected = [...allSelected, ...tempSelected];
    }
    console.log('allSelected', allSelected);
    const tree = arrayToTree<ItemType>(allSelected, null);
    console.log('tree', tree);
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
              direction={'horizontal'}
              fallbackOnBody={true}
              swapThreshold={1}
              animation={200}
              list={item.children}
              setList={(e) => {
                console.log(90, item.children);
                setMainContainer(e, !item.parentId, item);
              }}
            >
              {item.children && renderContainer(item.children)}
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
            setMainContainer(e, true);
          }}
        >
          {renderContainer(container)}
        </ReactSortable>
      </div>
      <div className='form-sandbox__dispose'></div>
    </div>
  );
}
