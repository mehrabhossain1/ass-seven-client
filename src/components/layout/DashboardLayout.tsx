import { Layout, Menu, theme } from "antd";
import {
  HomeOutlined,
  FundViewOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import ScrollTop from "../shared/ScrollTop";
const { Content, Footer, Sider } = Layout;

const items = [
  { key: "1", icon: <HomeOutlined />, label: "Home", link: "/" },
  {
    key: "2",
    icon: <FundViewOutlined />,
    label: "Donations",
    link: "/dashboard/donations",
  },
  {
    key: "3",
    icon: <PlusCircleOutlined />,
    label: "Create Donation",
    link: "/dashboard/create-donation",
  },
];

const DashboardLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <ScrollTop />
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            {items.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.link}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
