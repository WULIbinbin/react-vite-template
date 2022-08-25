import { useEffect, useState, useContext } from 'react';
import sidebar from '@/config/sidebar';
import { Menu } from 'tdesign-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutContext } from '../context';

const { MenuItem, SubMenu } = Menu;

function mapMenu(child: any[]) {
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

export default function Index() {
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const layout = useContext(LayoutContext);

  useEffect(() => {
    console.log(layout);
    if (sidebar.findIndex(({ to }) => to.includes(pathname)) > -1) {
      setActive(pathname);
    }
  }, [pathname]);

  function handleChange(value) {
    navigate(value);
    setActive(value);
  }

  return (
    <Menu value={active} theme={layout.theme} onChange={handleChange}>
      {mapMenu(sidebar)}
    </Menu>
  );
}
