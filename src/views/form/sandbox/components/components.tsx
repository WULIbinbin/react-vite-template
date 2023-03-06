/* eslint-disable react/no-unknown-property */
import { Input, DatePicker, Select, Form } from 'tdesign-react';
import { ItemType } from '../index';

import './components.less';

const { FormItem } = Form;

interface IProps {
  children?:any[]
}

function ComponentMask(props:IProps) {
  return (
    <div className={`form-sandbox__payground--item`}>
      <div
        className='form-sandbox__payground--delete'
        onClick={() => {
          // props?.handleRemove();
        }}
      >
        -
      </div>
      {props.children}
    </div>
  );
}

export function renderContainer(current: ItemType[], { renderChild, handleRemove }) {
  return (
    current &&
    current.map((item) => {
      let comp = null;
      switch (item.compType) {
        case 'wrap':
          comp = <ComponentMask>{renderChild && renderChild(item)}</ComponentMask>;
          break;
        case 'date-picker':
          comp = (
            <ComponentMask>
              <FormItem>
                <DatePicker mode='date' placeholder={item.compName} />
              </FormItem>
            </ComponentMask>
          );
          break;
        case 'selector':
          comp = (
            <ComponentMask>
              <FormItem>
                <Select options={[{ label: '选项一', value: '1' }]} placeholder={item.compName} />
              </FormItem>
            </ComponentMask>
          );
          break;
        default:
          comp = (
            <ComponentMask>
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
