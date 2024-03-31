"use client";
import React, { useMemo, useState } from "react";
import { Layout, Menu } from "antd";
import {
  ControlOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

interface sidebarProps {
  collapsed: boolean;
}

const menuLists = [
  {
    id: 1,
    icon: <ControlOutlined />,
    label: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 2,
    icon: <VideoCameraOutlined />,
    label: "Diagram",
    url: "/dashboard/diagram",
  },
  {
    id: 3,
    icon: <UploadOutlined />,
    label: "Loading Element",
    url: "/dashboard/loadingelement",
  },
  {
    id: 4,
    icon: <UserOutlined />,
    label: "Menu 4",
    url: "/",
  },
  {
    id: 5,
    icon: <VideoCameraOutlined />,
    label: "Menu 5",
    url: "/",
  },
];

const SidebarWrapper = ({ collapsed }: sidebarProps) => {
  const [menuKey, setMenuKey] = useState<string[]>(["1"]);

  useMemo(() => {
    for (let i = 0; i < menuLists.length; i++) {
      if (menuLists[i].url === window.location.pathname) {
        setMenuKey([`${menuLists[i].id}`]);
      }
    }
  }, [window.location.pathname]);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="text-white text-center text-[36px] font-extrabold py-3">
        {collapsed ? "L" : "Logo"}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={menuKey}
        items={menuLists.map((item: any) => {
          return {
            key: `${item.id}`,
            icon: item.icon,
            label: <a href={item.url}>{item.label}</a>,
          };
        })}
      />
    </Sider>
  );
};

export default SidebarWrapper;
