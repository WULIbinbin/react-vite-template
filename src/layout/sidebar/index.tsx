import React, { useEffect, useState, useContext, useCallback } from 'react';
import sidebar from '@/config/sidebar';
import { Menu } from 'tdesign-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutContext } from '../context';

const { MenuItem, SubMenu } = Menu;

function mapMenu(child: any[]): React.ReactNode[] {
  return child.map((item) => {
    if (!item.children) {
      return (
        <MenuItem value={item.to} key={item.to}>
          <span>{item.name}</span>
        </MenuItem>
      );
    }
    return (
      <SubMenu key={item.to} title={item.name}>
        {mapMenu(item.children)}
      </SubMenu>
    );
  });
}

function Index() {
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const layout = useContext(LayoutContext);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const handleChange = useCallback(
    (value) => {
      setActive(value);
      navigate(value);
    },
    [active],
  );

  return (
    <Menu value={active} theme={layout.theme} onChange={handleChange}>
      {mapMenu(sidebar)}
    </Menu>
  );
}

export default Index;
