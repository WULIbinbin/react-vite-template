import { Outlet, useNavigate } from "react-router-dom";
import { Layout } from "tdesign-react";
import Sidebar from "./sidebar/index";

import "./index.less";

const { Header, Content, Footer, Aside } = Layout;

export default function Index() {
  return (
    <Layout>
      <Header></Header>
      <Layout>
        <Aside>
          <Sidebar />
        </Aside>
        <Layout>
          <Content>
            <Outlet></Outlet>
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
