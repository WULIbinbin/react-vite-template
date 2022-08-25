import { Space, Form, Input } from 'tdesign-react';
import Container from '@/layout/container';

export default function Index() {
  return (
    <Container>
      <Space direction='horizontal'>
        <Form layout='inline' labelWidth={60}>
          <Form.FormItem label='发票号码' name='number'>
            <Input />
          </Form.FormItem>
          <Form.FormItem label='发票代码' name='code'>
            <Input />
          </Form.FormItem>
        </Form>
      </Space>
    </Container>
  );
}
