import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Space, Button } from 'tdesign-react';
import { ErrorCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-react';

function Error() {
  const params = useParams();
  const navigate = useNavigate();

  const ErrLayout = useMemo(() => {
    const btns = (
      <Space>
        <Button theme='default' onClick={() => navigate('/index', { replace: true })}>
          返回首页
        </Button>
        <Button onClick={() => navigate(-1)}>返回上一页</Button>
      </Space>
    );
    if (params.type === '401') {
      return (
        <Space direction='vertical' align='center'>
          <CloseCircleFilledIcon size={64} />
          <p>抱歉您没有查看权限</p>
          {btns}
        </Space>
      );
    }
    return (
      <Space direction='vertical' align='center'>
        <ErrorCircleFilledIcon size={64} />
        <h1>404</h1>
        <p>页面去火星了</p>
        {btns}
      </Space>
    );
  }, [params.type]);
  return <div className='g-error-page'>{ErrLayout}</div>;
}

export default Error;
