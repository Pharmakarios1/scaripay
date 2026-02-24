import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "@components/Sidebar";
import TopBar from "@components/TopBar";
import { useResponsive } from "ahooks";
const { Sider, Header, Content } = Layout;

const DashboardLayout = () => {
  const mobile = useResponsive();
  const isMobile = !mobile.lg;
  return (
    <Layout className="min-h-screen">
      <Sider
        width={200}
        breakpoint="lg"
        collapsedWidth="80"
        className={`bg-white! ${isMobile ? "hidden" : "block"}`}
      >
        <Sidebar />
      </Sider>

      <Layout>
        <Header className="bg-white! px-6 shadow-sm">
          <TopBar />
        </Header>

        <Content className="m-6 bg-gray- rounded-lg">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
