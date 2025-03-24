"use client";
import React, { useState } from "react";
import { Anchor, Button, Menu, MenuProps } from "antd";
import {
  AppstoreOutlined,
  HomeOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor";

const items: AnchorLinkItemProps[] = [
  {
    key: "home",
    href: "#home",
    title: "Home",
  },
  {
    key: "about",
    href: "#about",
    title: "About",
  },
  {
    key: "projects",
    href: "#projects",
    title: "Projects",
  },
  {
    key: "contact",
    href: "#contact",
    title: "Contact",
  },
];

const HeaderWrapper = () => {
  const [current, setCurrent] = useState("home");

  return (
    <div className="flex justify-between items-center w-2/3 bg-[#333] text-white py-2 px-4 my-5 rounded-full fixed z-50">
      <div className="flex items-center">
        <Anchor className="text-white" direction="horizontal" items={items} />
      </div>
      <Link href="/auth/login">
        <Button type="primary" shape="round" className="bg-blue-500">
          Login
        </Button>
      </Link>
    </div>
  );
};

export default HeaderWrapper;
