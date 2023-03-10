/* eslint-disable no-case-declarations */
/* eslint-disable react/no-unknown-property */
import { SetStateAction, useEffect, useReducer, useState } from 'react';
import classnames from 'classnames';
import { ReactSortable, SortableEvent } from 'react-sortablejs';
import { Button, DialogPlugin } from 'tdesign-react';
import renderFormItem from './components/formItem';
import _cloneDeep from 'lodash-es/cloneDeep';
import { arrayToTree, arraySwap, mapSelected } from '@/utils/methods';
import { ItemType, ICtRdr, EEvt, TEventData } from '@/types/sandbox';
import { FormContext } from './utils/contexts';
import { RemoveObserver, DisposeObserver } from './utils/observers';
import Dispose from './components/dispose';
import defaultFormData from './utils/defaultFormData';
import './index.less';

const component = [
  { compId: '1', compName: '栅格', compType: 'wrap' },
  { compId: '2', compName: '输入框', compType: 'input' },
  { compId: '3', compName: '下拉选择器', compType: 'selector' },
  { compId: '4', compName: '日期选择器', compType: 'date-picker' },
];

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
interface IInitContainer {
  value: ItemType[];
  hash: { [key: string]: ItemType };
}

const STORAGE_KEY = 'container_data';

const cloneDefaultData = _cloneDeep(defaultFormData);
const initContainer: IInitContainer = {
  value: [],
  hash: {},
};
let allSelected = [];

function containerReducer<T extends ItemType>(state: IInitContainer, action: ICtRdr<T>) {
  let current: T[];
  const { eventType = '', selected, toDelete } = action;
  switch (eventType) {
    case EEvt.ON_RESET:
      current = selected;
      break;
    case EEvt.ON_REMOVE:
      const isDeleteItem = (t: T) => t.itemId === toDelete.itemId && t.parentId === toDelete.parentId;
      current = allSelected.filter((t) => !isDeleteItem(t));
      break;
    default:
      // wrap中子组件的新增操作
      current = [
        // 4、all中筛除已存在的表单，插入新的表单项，避免vdom.key重复渲染
        ...allSelected.filter((t) => selected.findIndex((f) => f.itemId === t.itemId) === -1),
        ...selected,
      ];
  }
  allSelected = current;
  const [tree, map] = arrayToTree<T>(current, null);
  return {
    value: tree,
    hash: map,
  };
}

export default function Index() {
  const [components, setComponents] = useState<ItemType[]>(component);
  const [containerState, dispatchContainer] = useReducer(containerReducer, initContainer);
  const [showDispose, toggleDispose] = useState<boolean>(false);
  const [currentDispose, selectDispose] = useState<TEventData>({} as TEventData);

  const diffComponent = (selected: ItemType[], eventType?: EEvt, parent?: ItemType, toDelete?: ItemType) => {
    // 2、创建数组递归收集所有表单，用itemId和parentId关联
    // * 深拷贝select防止对象引用导致dom.key重复
    const cloneParent = (parent && _cloneDeep(parent)) || null;
    const cloneSelected = (selected.length && _cloneDeep(selected)) || [];
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

  const resetComponent = () => {
    dispatchContainer({
      eventType: EEvt.ON_RESET,
      selected: cloneDefaultData,
    });
  };

  const saveFormData = () => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(containerState.value));
  };

  const preview = () => {};

  const resetFormData = () => {
    const cfDialog = DialogPlugin.confirm({
      header: '提示',
      body: '确认重置表单吗？',
      theme: 'warning',
      onConfirm: () => {
        resetComponent();
        cfDialog.hide();
      },
      onClose: () => {
        cfDialog.hide();
      },
    });
  };

  function renderChildContainer(item: ItemType) {
    return (
      <ReactSortable
        tag={'div'}
        className={classnames(
          `form-sandbox__payground__wrap`,
          `form-sandbox__payground__wrap--direction--${item.formData?.layout}`,
        )}
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
        onUpdate={(e: any) => {
          console.log('child-onUpdate操作------------------->');
          updateComponent(e, item.children, item);
        }}
        onAdd={(e: any) => {
          console.log('child-onAdd操作------------------->');
          addComponent(e, item.children, item);
        }}
        onRemove={(e: any) => {
          console.log('child-onRemove操作------------------->');
          removeComponent(e, item.children, item);
        }}
        // 废弃，用on-event代替
        setList={() => {}}
      >
        {(item.children && renderFormItem(item.children, { renderChild: renderChildContainer, parent: item })) || null}
      </ReactSortable>
    );
  }

  useEffect(() => {
    RemoveObserver.watch((o: { idx: any; current: ItemType[]; parent: ItemType }) => {
      console.log('删除操作来源：', o);
      removeComponent({ oldDraggableIndex: o.idx } as SortableEvent, o.current, o.parent);
    });
    DisposeObserver.watch((o: SetStateAction<TEventData>) => {
      toggleDispose(true);
      selectDispose(o);
    });
    // 设置默认值
    const storageData = sessionStorage.getItem(STORAGE_KEY);
    diffComponent((storageData && JSON.parse(storageData)) || cloneDefaultData);
    return () => {
      allSelected = [];
      diffComponent([]);
      RemoveObserver.destroy();
      DisposeObserver.destroy();
    };
  }, []);

  return (
    <FormContext.Provider value={{ containerState }}>
      <div className='form-sandbox__main'>
        <div className='form-sandbox__components'>
          <p className='form-sandbox__components--title'>选择组件</p>
          <ReactSortable
            tag={'div'}
            group={{
              name: 'component',
              pull: 'clone',
              put: false,
            }}
            sort={false}
            list={components}
            setList={(data) => {
              setComponents(data);
            }}
          >
            {components.map((item) => (
              <div
                className={`form-sandbox__components__item form-sandbox__components--${item.compType}`}
                key={item.compId}
                comp-type={item.compType}
              >
                {item.compName}
              </div>
            ))}
          </ReactSortable>
        </div>
        <div className='form-sandbox__content'>
          <div className='form-sandbox__operation'>
            <Button theme='primary' style={{ marginRight: 10 }} onClick={preview}>
              预览
            </Button>
            <Button theme='primary' style={{ marginRight: 10 }} onClick={saveFormData}>
              保存
            </Button>
            <Button type='reset' onClick={resetFormData}>
              重置
            </Button>
          </div>
          <ReactSortable
            tag={'div'}
            className='form-sandbox__payground'
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
            list={containerState.value}
            onUpdate={(e: any) => {
              console.log('container-onUpdate操作------------------->');
              updateComponent(e, containerState.value, null);
            }}
            onAdd={(e: any) => {
              console.log('container-onAdd操作------------------->', e);
              addComponent(e, containerState.value, null);
            }}
            onRemove={(e: any) => {
              console.log('container-onRemove操作------------------->');
              removeComponent(e, containerState.value, null);
            }}
            // 废弃，用on-event代替
            setList={() => {}}
          >
            {renderFormItem(containerState.value, { renderChild: renderChildContainer })}
          </ReactSortable>
        </div>
        <Dispose
          visible={showDispose}
          data={currentDispose}
          onClose={() => {
            toggleDispose(false);
          }}
        />
      </div>
    </FormContext.Provider>
  );
}
