import { useEffect, useMemo, useRef, useState } from 'react';
import { Button, Form, Input, Radio } from 'tdesign-react';
import { ItemType, TEventData } from '@/types/sandbox';
import disposeRegistry from '../../utils/disposeRegistry';

import './index.less';

type TProps = {
  data: TEventData;
  onClose?: () => void;
};

const { FormItem } = Form;

export default function Index(props: TProps) {
  const [disposeData, setDispose] = useState<ItemType>({} as ItemType);
  const formRef = useRef();
  const onSubmit = async (e) => {
    const ref = formRef.current;
    ref.validate().then((res) => {
      if (res === true) {
        const data: TEventData = ref.getFieldsValue(true);
        Object.assign(disposeData.formData, data);
        console.log('表单项修改：', disposeData);
        props.onClose();
      }
    });
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
    const { idx, current } = props.data;
    const ref = formRef.current;
    const { formData } = current[idx];
    console.log('当前表单：', current[idx]);
    setDispose(current[idx]);
    if (!formData) return;
    ref.setFieldsValue(formData);
  }, [props.data, disposeData.formData]);
  return (
    <div className='form-sandbox__dispose'>
      <Form className='form-sandbox__tform' ref={formRef} labelAlign={'top'} labelWidth={80}>
        <div className='form-sandbox__form'>
          <p>
            {disposeData.compName}:{disposeData.itemId}
          </p>
          {disposeData?.compType && RenderDisposeForm}
        </div>
        <FormItem style={{ marginLeft: 100 }}>
          <Button theme='primary' style={{ marginRight: 10 }} onClick={onSubmit}>
            提交
          </Button>
          <Button theme='default' variant='base' type='reset' onClick={props.onClose}>
            取消
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}
