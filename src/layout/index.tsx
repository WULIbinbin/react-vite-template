import { Layout, Row, Col } from 'tdesign-react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar/index';
import Topbar from './topbar/index';
import RouteMain from '@/router';
import { ELayoutStyle } from '@/types/layout.d';
import { useAppSelector } from '@/store';

const { Header, Content, Footer, Aside } = Layout;

const MixLayout = () => (
  <Layout className='g-layout'>
    <Header>
      <Row className='g-header'>
        <Col className='g-header-left'>
          <Link to='/index'>
            <h3>WEB</h3>
          </Link>
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

const TopbarLayout = () => (
  <Layout className='g-layout'>
    <Header>
      <Row className='g-header'>
        <Col className='g-header-left'>
          <Link to='/index'>
            <h3>WEB</h3>
          </Link>
        </Col>
        <Col className='g-header-right'>
          <Topbar />
        </Col>
      </Row>
    </Header>
    <Layout>
      <Content className='g-content'>
        <RouteMain></RouteMain>
      </Content>
      <Footer className='g-footer'>我是底部</Footer>
    </Layout>
  </Layout>
);

const FullPageLayout = () => (
  <Layout className='g-layout'>
    <RouteMain></RouteMain>
  </Layout>
);

const LayoutClump = {
  [ELayoutStyle.Mix]: MixLayout,
  [ELayoutStyle.FullPage]: FullPageLayout,
  [ELayoutStyle.Topbar]: TopbarLayout,
};

export default function Index() {
  const layout = useAppSelector((state) => state.layout);
  const AppLayout = LayoutClump[layout.layoutStyle];
  return <AppLayout />;
}
