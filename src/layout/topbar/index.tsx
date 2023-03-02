import { Menu, Avatar, Switch, Space } from 'tdesign-react';
import { CheckCircleFilledIcon, CheckCircleIcon } from 'tdesign-icons-react';
import { useAppDispatch, useAppSelector, layoutActions } from '@/store';
import { useNavigate } from 'react-router-dom';

const { HeadMenu, SubMenu, MenuItem } = Menu;

function Index() {
  const layout = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleMenu(value) {
    switch (value) {
      case 'mine':
        break;
      default:
      // dispatch(accountActions.switchTheme(!!value));
    }
  }

  function handleSwitch(value) {
    dispatch(layoutActions.switchTheme(!!value));
  }

  function handleLogout() {
    navigate('/account/login', {
      replace: true,
    });
  }

  return (
    <HeadMenu theme={layout.theme} expandType='popup' onChange={handleMenu}>
      <SubMenu
        value='0'
        title={<Avatar hideOnLoadFailed={false} image='https://tdesign.gtimg.com/site/avatar.jpg' shape='circle' />}
      >
        <MenuItem value='mine'>个人中心</MenuItem>
        <MenuItem value='switch'>切换账号</MenuItem>
        <MenuItem value='logout' onClick={handleLogout}>
          退出登录
        </MenuItem>
      </SubMenu>
      <Space align='center' size='small'>
        <Switch
          size='large'
          label={[<CheckCircleFilledIcon key='0' />, <CheckCircleIcon key='1' />]}
          onChange={handleSwitch}
        />
        <span>黑暗模式</span>
      </Space>
    </HeadMenu>
  );
}

export default React.memo(Index);
