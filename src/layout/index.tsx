import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Row, Col } from "tdesign-react";
import Sidebar from "./sidebar/index";
import Topbar from "./topbar/index";
import { LayoutContext, Theme } from "./context";
const { Header, Content, Footer, Aside } = Layout;

export default function Index() {
  const [theme, setTheme] = useState(Theme.light);

  function setDarkTheme(value: boolean) {
    setTheme(value ? Theme.dark : Theme.light);
    if (value) {
      document.documentElement.setAttribute("theme-mode", "dark");
    } else {
      document.documentElement.removeAttribute("theme-mode");
    }
  }
  
  return (
    <LayoutContext.Provider
      value={{
        theme,
        setDarkTheme,
      }}
    >
      <Layout className="g-layout">
        <Header>
          <Row className="g-header">
            <Col className="g-header-left">
              <h3>WEB</h3>
            </Col>
            <Col className="g-header-right">
              <Topbar />
            </Col>
          </Row>
        </Header>
        <Layout>
          <Aside>
            <Sidebar />
          </Aside>
          <Layout>
            <Content className="g-content">
              <Outlet></Outlet>
            </Content>
            <Footer className="g-footer">我是底部</Footer>
          </Layout>
        </Layout>
      </Layout>
    </LayoutContext.Provider>
  );
}
