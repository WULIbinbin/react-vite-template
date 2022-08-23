import { useEffect, useState } from "react";
import sidebar from "@/config/sidebar";
import { Menu } from "tdesign-react";
import { useNavigate, useLocation } from "react-router-dom";

const { MenuItem, SubMenu } = Menu;

function mapMenu(child: any[]) {
  return child.map((item) => {
    if (!item.children) {
      return (
        <MenuItem value={item.to} key={item.to}>
          <span>{item.name}</span>
        </MenuItem>
      );
    } else {
      return (
        <SubMenu value={item.to} key={item.to} title={item.name}>
          {mapMenu(item.children)}
        </SubMenu>
      );
    }
  });
}


export default function Index() {
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      sidebar.findIndex(({ to }) => {
        return to.includes(pathname);
      }) > -1
    ) {
      setActive(pathname);
    }
  }, [location.pathname]);

  function handleChange(value) {
    navigate(value);
    setActive(value);
  }

  return (
    <Menu value={active} onChange={handleChange}>
      {mapMenu(sidebar)}
    </Menu>
  );
}
