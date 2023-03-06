/* eslint-disable react/no-unknown-property */
import { Input, DatePicker, Select, Form } from 'tdesign-react';
import { ItemType } from '../index';
import { EventContext } from '../ctx';

import './components.less';
import { useContext } from 'react';

const { FormItem } = Form;

interface IProps {
  children?: JSX.Element;
  noMask?: boolean;
  eventData: any;
}

function ComponentMask({ noMask = false, children, eventData }: IProps) {
  const { RemoveObserver } = useContext(EventContext);
  return (
    <div className={`form-sandbox__payground--item ${(!noMask && 'form-sandbox__payground--mask') || 'under-delete'}`}>
      <div
        className='form-sandbox__payground--delete'
        onClick={() => {
          RemoveObserver.emit(eventData);
        }}
      >
        -
      </div>
      {children}
    </div>
  );
}

export function renderContainer(current: ItemType[], { renderChild, parent = null }) {
  return (
    current &&
    current.map((item, idx) => {
      let comp = null;
      switch (item.compType) {
        case 'wrap':
          comp = (
            <ComponentMask eventData={{ idx, parent, current }} noMask={true}>
              {renderChild && renderChild(item)}
            </ComponentMask>
          );
          break;
        case 'date-picker':
          comp = (
            <ComponentMask eventData={{ idx, parent, current }}>
              <FormItem>
                <DatePicker mode='date' placeholder={item.compName} />
              </FormItem>
            </ComponentMask>
          );
          break;
        case 'selector':
          comp = (
            <ComponentMask eventData={{ idx, parent, current }}>
              <FormItem>
                <Select options={[{ label: '选项一', value: '1' }]} placeholder={item.compName} />
              </FormItem>
            </ComponentMask>
          );
          break;
        default:
          comp = (
            <ComponentMask eventData={{ idx, parent, current }}>
              <FormItem>
                <Input readonly placeholder={item.compName} />
              </FormItem>
            </ComponentMask>
          );
      }
      return (
        <div className={`form-sandbox__payground--box`} key={item.itemId} comp-type={item.compType}>
          {comp}
        </div>
      );
    })
  );
}
