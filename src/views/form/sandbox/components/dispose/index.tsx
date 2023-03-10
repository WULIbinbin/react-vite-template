import { useEffect, useMemo, useRef, useState } from 'react';
import { Form, Input, Radio, Drawer } from 'tdesign-react';
import { ItemType, TEventData } from '@/types/sandbox';
import disposeRegistry from '../../config/disposeRegistry';
import { anyAwait } from '@/utils/methods';

import './index.less';

type TProps = {
  visible: boolean;
  data: TEventData;
  onClose?: () => void;
};

const { FormItem } = Form;

export default function Index({ onClose, data, visible }: TProps) {
  const [disposeData, setDispose] = useState<ItemType>({} as ItemType);
  const formRef = useRef();
  const onSubmit = async () => {
    const ref = formRef.current;
    const [, isValid] = await anyAwait(ref.validate());
    if (isValid === true) {
      const curFormData: TEventData = ref.getFieldsValue(true);
      Object.assign(disposeData.formData, curFormData);
      console.log('表单项修改：', disposeData);
      onClose();
    }
  };

  const RenderDisposeForm = useMemo(
    () =>
      disposeRegistry[disposeData.compType]?.map((c, k) => {
        let formItem = null;
        const { formData, itemId } = disposeData;
        const key = `${itemId}-dispose-${k}`;
        const { options, defaultValue } = c;
        switch (c.type) {
          case 'radio':
            formItem = (
              <Radio.Group value={formData[c.name] || defaultValue}>
                {options.map((o, i) => (
                  <Radio defaultChecked={formData[c.name] === o.value} key={`${key}-${o.value}`} value={o.value}>
                    {o.label}
                  </Radio>
                ))}
              </Radio.Group>
            );
            break;
          default:
            formItem = <Input />;
        }
        return (
          <FormItem key={key} label={c.label} name={c.name}>
            {formItem}
          </FormItem>
        );
      }),
    [disposeData.compType],
  );

  useEffect(() => {
    const { idx, current } = data;
    if (!current) return;
    const ref = formRef.current;
    const { formData } = current[idx];
    console.log('当前表单：', current[idx]);
    setDispose(current[idx]);
    if (!formData) return;
    ref.setFieldsValue(formData);
  }, [data, disposeData.formData]);

  return (
    <Drawer
      header={`${disposeData.compName}:${disposeData.itemId}`}
      visible={visible}
      onClose={onClose}
      onConfirm={onSubmit}
    >
      {/* 重新加载，避免表单缓存 */}
      {visible && (
        <div className='form-sandbox__dispose'>
          <Form ref={formRef} labelAlign={'top'} labelWidth={80}>
            {disposeData?.compType && RenderDisposeForm}
          </Form>
        </div>
      )}
    </Drawer>
  );
}
