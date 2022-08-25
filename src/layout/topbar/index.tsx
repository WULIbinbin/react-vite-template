import { useContext, useEffect } from "react";
import { Menu, Avatar, Switch, Space } from "tdesign-react";
import { CheckCircleFilledIcon, CheckCircleIcon } from "tdesign-icons-react";
import { LayoutContext } from "../context";

const { HeadMenu, SubMenu, MenuItem } = Menu;

export default function Index() {
  const layout = useContext(LayoutContext);

  function handleMenu(value) {}

  function handleSwitch(value) {
    layout.setDarkTheme(!!value);
  }

  return (
    <HeadMenu theme={layout.theme} expandType="popup" onChange={handleMenu}>
      <SubMenu
        value="0"
        title={
          <Avatar
            hideOnLoadFailed={false}
            image="https://tdesign.gtimg.com/site/avatar.jpg"
            shape="circle"
          />
        }
      >
        <MenuItem value="mine">个人中心</MenuItem>
        <MenuItem value="switch">切换账号</MenuItem>
        <MenuItem value="logout">退出登录</MenuItem>
      </SubMenu>
      <Space align="center" size="small">
        <Switch
          size="large"
          label={[<CheckCircleFilledIcon />, <CheckCircleIcon />]}
          onChange={handleSwitch}
        />
        <span>黑暗模式</span>
      </Space>
    </HeadMenu>
  );
}