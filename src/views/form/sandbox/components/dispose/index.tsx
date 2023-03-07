import { Button, Form, Input } from 'tdesign-react';
import { ItemType, TEventData } from '@/types/sandbox';
import { useEffect, useRef, useState } from 'react';

import './index.less';

type TProps = {
  data: TEventData;
  onClose?: () => void;
};

const { FormItem } = Form;

export default function Index(props: TProps) {
  const [disposeData, setDispose] = useState<ItemType>({} as ItemType);
  const formRef = useRef();
  const onSubmit = (e) => {
    if (e.validateResult === true) {
      const ref = formRef.current;
      const data = ref.getFieldsValue(['formName', 'placeHolder']);
      Object.assign(disposeData.formData, data);
      props.onClose();
    }
  };
  useEffect(() => {
    const { idx, current } = props.data;
    const ref = formRef.current;
    const { formData } = current[idx];
    console.log('当前表单：', current[idx]);
    setDispose(current[idx]);
    if (!formData) return;
    ref.setFieldsValue(formData);
  }, [props.data, disposeData]);
  return (
    <div className='form-sandbox__dispose'>
      <Form className='form-sandbox__tform' ref={formRef} labelAlign={'top'} labelWidth={80} onSubmit={onSubmit}>
        <div className='form-sandbox__form'>
          <p>
            {disposeData.compName}:{disposeData.itemId}
          </p>
          <FormItem label='表单名称' name='formName'>
            <Input defaultValue={disposeData.formData?.formName} />
          </FormItem>
          <FormItem label='表单占位符' name='placeHolder'>
            <Input defaultValue={disposeData.formData?.placeHolder} />
          </FormItem>
        </div>
        <FormItem style={{ marginLeft: 100 }}>
          <Button theme='primary' type='submit' style={{ marginRight: 10 }}>
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
