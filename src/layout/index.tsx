import { useContext, useState } from 'react';
import { Layout, Row, Col } from 'tdesign-react';
import Sidebar from './sidebar/index';
import Topbar from './topbar/index';
import RouteMain from '@/router';
import { ELayoutStyle } from '@/types/layout.d';

const { Header, Content, Footer, Aside } = Layout;

const MixLayout = () => (
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
);

const LayoutClump = {
  [ELayoutStyle.Mix]: MixLayout,
  [ELayoutStyle.FullPage]: MixLayout,
  [ELayoutStyle.Topbar]: MixLayout,
};

export default function Index() {
  const Component = LayoutClump[ELayoutStyle.Mix];
  return <Component />;
}
