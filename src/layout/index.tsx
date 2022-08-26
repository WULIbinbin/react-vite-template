import { useContext, useState } from 'react';
import { Layout, Row, Col } from 'tdesign-react';
import Sidebar from './sidebar/index';
import Topbar from './topbar/index';
import { LayoutContext } from './context';
import { ETheme } from '@/types/layout.d';
import RouteMain from '@/router';

const { Header, Content, Footer, Aside } = Layout;

export default function Index() {
  const [theme, setTheme] = useState(ETheme.light);

  function setDarkTheme(value: boolean) {
    setTheme(value ? ETheme.dark : ETheme.light);
    if (value) {
      document.documentElement.setAttribute('theme-mode', 'dark');
    } else {
      document.documentElement.removeAttribute('theme-mode');
    }
  }

  return (
    <LayoutContext.Provider
      value={{
        theme,
        setDarkTheme,
      }}
    >
      <Layout className='g-layout'>
        <Header>
          <Row className='g-header'>
            <Col className='g-header-left'>
              <h3>WEB</h3>
            </Col>
            <Col className='g-header-right'>
              <Topbar />
            </Col>
          </Row>
        </Header>
        <Layout>
          <Aside>
            <Sidebar />
          </Aside>
          <Layout>
            <Content className='g-content'>
              <RouteMain></RouteMain>
            </Content>
            <Footer className='g-footer'>我是底部</Footer>
          </Layout>
        </Layout>
      </Layout>
    </LayoutContext.Provider>
  );
}
