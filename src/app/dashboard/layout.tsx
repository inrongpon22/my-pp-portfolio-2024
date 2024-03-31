"use client";
import React, { useState } from "react";
import SidebarWrapper from "@/components/layout/sidebar/SidebarWrapper";
import {
  Avatar,
  Button,
  Dropdown,
  Layout,
  MenuProps,
  Modal,
  Result,
  theme,
} from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const token = localStorage.getItem("token");

  // handle sidebar collapse
  const [collapsed, setCollapsed] = useState(false);

  // handle sign out state
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const items: MenuProps["items"] = [
    {
      key: "1",
      disabled: true,
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Menu 1
        </a>
      ),
    },
    {
      key: "2",
      disabled: true,
      // icon: <SmileOutlined />,
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Menu 2
        </a>
      ),
    },
    {
      key: "3",
      disabled: true,
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Menu 3
        </a>
      ),
    },
    {
      key: "4",
      danger: true,
      label: "Sign out",
      onClick: (e) => setOpen(true),
    },
  ];

  if(!token) window.location.replace("/auth/login")

  return (
    <Layout>
      <SidebarWrapper collapsed={collapsed} />

      <Layout>
        <Header
          className={`flex justify-between items-center bg-[${colorBgContainer}] p-0`}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <Dropdown menu={{ items }}>
            <Avatar
              size="large"
              src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
              className="me-5 cursor-pointer"
            />
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            overflow:"hidden",
            padding: 24,
            minHeight: "100dvh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
      {/* Starts:: Sign out alert */}
      <Modal
        open={open}
        onOk={() => {
          localStorage.removeItem("token");
          setConfirmLoading(true);
          setTimeout(() => {
            window.location.replace("/auth/login");
          }, 1000);
        }}
        confirmLoading={confirmLoading}
        onCancel={(e) => setOpen(false)}
        okButtonProps={{
          danger: true,
        }}
      >
        <Result status="warning" title="Are you sure you would like to sign out?" />
      </Modal>
      {/* Ends:: Sign out alert */}
    </Layout>
  );
};

export default DashboardLayout;
