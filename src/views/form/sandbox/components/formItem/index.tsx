/* eslint-disable react/no-unknown-property */
import { Input, DatePicker, Select, Form } from 'tdesign-react';
import { ItemType } from '@/types/sandbox';
import EventCover from '../eventCover';
import './index.less';

const { FormItem } = Form;

export default function renderFormItem(current: ItemType[], { renderChild, parent = null }) {
  return (
    current &&
    current.map((item, idx) => {
      let comp = null;
      switch (item.compType) {
        case 'wrap':
          comp = (
            <EventCover eventData={{ idx, parent, current }} noMask={true}>
              <p>{item.compName}</p>
              {renderChild && renderChild(item)}
            </EventCover>
          );
          break;
        case 'date-picker':
          comp = (
            <EventCover eventData={{ idx, parent, current }}>
              <FormItem labelAlign='top' label={item.compName}>
                <DatePicker mode='date' placeholder={item.compName} />
              </FormItem>
            </EventCover>
          );
          break;
        case 'selector':
          comp = (
            <EventCover eventData={{ idx, parent, current }}>
              <FormItem labelAlign='top' label={item.compName}>
                <Select options={[{ label: '选项一', value: '1' }]} placeholder={item.compName} />
              </FormItem>
            </EventCover>
          );
          break;
        default:
          comp = (
            <EventCover eventData={{ idx, parent, current }}>
              <FormItem labelAlign='top' label={item.compName}>
                <Input readonly placeholder={item.compName} />
              </FormItem>
            </EventCover>
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
