import React, { useEffect, useState, useCallback } from 'react';
import sidebar from '@/configs/sidebar';
import { Menu } from 'tdesign-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/store';
import { ISidebar } from '@/types/router.d';

const { MenuItem, SubMenu } = Menu;

function mapMenu(child: ISidebar[]): React.ReactNode[] {
  return child.map((item) => {
    if (!item.children) {
      return (
        <MenuItem value={item.to} key={item.to}>
          <span>{item.name}</span>
        </MenuItem>
      );
    }
    return (
      <SubMenu value={item.to} key={item.to} title={item.name}>
        {mapMenu(item.children)}
      </SubMenu>
    );
  });
}

function Index() {
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const layout = useAppSelector((state) => state.layout);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const handleChange = useCallback(
    (value) => {
      console.log(value);
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
