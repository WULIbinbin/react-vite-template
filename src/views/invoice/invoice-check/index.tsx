import { Space, Form, Input } from 'tdesign-react';

export default function Index() {
  return (
    <div>
      <Space direction='horizontal'>
        <Form layout='inline' labelWidth={80}>
          <Form.FormItem label='发票号码' name='number'>
            <Input />
          </Form.FormItem>
          <Form.FormItem label='发票代码' name='code'>
            <Input />
          </Form.FormItem>
        </Form>
      </Space>
    </div>
  );
}
