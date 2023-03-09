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
      const label = (
        <>
          <span>{item.formData?.formName || item.compName}</span>
          <span className='form-sandbox__payground__idtext'>{item.itemId}</span>
        </>
      );
      const placeHolder = `${item.formData?.placeHolder || item.compName}`;
      const eventData = { idx, parent, current };
      switch (item.compType) {
        case 'wrap':
          comp = (
            <EventCover eventData={eventData} noMask={true}>
              <p>{label}</p>
              {renderChild && renderChild(item)}
            </EventCover>
          );
          break;
        case 'date-picker':
          comp = (
            <EventCover eventData={eventData}>
              <FormItem labelAlign='top' label={label}>
                <DatePicker mode='date' placeholder={placeHolder} />
              </FormItem>
            </EventCover>
          );
          break;
        case 'selector':
          comp = (
            <EventCover eventData={eventData}>
              <FormItem labelAlign='top' label={label}>
                <Select options={[{ label: '选项一', value: '1' }]} placeholder={placeHolder} />
              </FormItem>
            </EventCover>
          );
          break;
        default:
          comp = (
            <EventCover eventData={eventData}>
              <FormItem labelAlign='top' label={label}>
                <Input readonly placeholder={placeHolder} />
              </FormItem>
            </EventCover>
          );
      }
      return (
        <div className={`form-sandbox__payground__box`} key={item.itemId} comp-type={item.compType}>
          {comp}
        </div>
      );
    })
  );
}
