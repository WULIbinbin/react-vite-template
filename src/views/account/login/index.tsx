import { memo, useState, useRef } from 'react';
import { Form, Input, Button, Tooltip } from 'tdesign-react';
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-react';
import { useNavigate } from 'react-router-dom';

import './index.less';

const { FormItem } = Form;

interface IFormData {
  account: string;
  password: string;
}

const rules = {
  account: [{ required: true, message: '账号必填' }],
  password: [{ required: true, message: '密码必填' }],
};

export default memo(() => {
  const initData: IFormData = {
    account: 'admin',
    password: '123456',
  };
  const [formData, setFormData] = useState<IFormData>(initData);
  const form = useRef(null);
  const navigate = useNavigate();

  function handleInput(key, value) {
    setFormData({
      ...formData,
      [key]: value,
    });
  }

  function handleSubmit({ validateResult }) {
    console.log(form.current);
    const formRef = form.current;
    if (validateResult === true) {
      // 模拟表单项单独校验
      // formRef.validate(formData).then(res=>{})
      if (formData.account !== initData.account) {
        formRef.setValidateMessage({
          account: [{ type: 'error', message: '账号不存在' }],
        });
      } else if (formData.password !== initData.password) {
        formRef.setValidateMessage({
          password: [{ type: 'error', message: '密码错误' }],
        });
      } else {
        navigate('/index', { replace: true });
      }
    }
  }

  return (
    <div className='login-container'>
      <div className='login-title'>{import.meta.env.VITE_APP_TITLE}</div>
      <div className='login-main'>
        <Form ref={form} rules={rules} onSubmit={handleSubmit}>
          <FormItem name={'account'}>
            <Input
              size='large'
              clearable={true}
              prefixIcon={<DesktopIcon />}
              placeholder={`账号：${initData.account}`}
              onChange={(e) => handleInput('account', e)}
            ></Input>
          </FormItem>
          <FormItem name={'password'}>
            <Input
              type='password'
              size='large'
              prefixIcon={<LockOnIcon />}
              clearable={true}
              placeholder={`密码：${initData.password}`}
              onChange={(e) => handleInput('password', e)}
            ></Input>
          </FormItem>
          <FormItem>
            <Button size='large' type='submit'>
              登录
            </Button>
          </FormItem>
          <FormItem>
            <Tooltip content='未开通' destroyOnClose placement='bottom' showArrow theme='default'>
              <Button size='large' theme='default'>
                注册
              </Button>
            </Tooltip>
          </FormItem>
        </Form>
      </div>
    </div>
  );
});
