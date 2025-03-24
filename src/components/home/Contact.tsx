import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Anchor, Divider, Tooltip } from "antd";
import Link from "next/link";

const contactIcons = [
  {
    title: "Facebook",
    icon: <FacebookOutlined />,
    url: "https://www.facebook.com/",
  },
  {
    title: "Instagram",
    icon: <InstagramOutlined />,
    url: "https://www.instagram.com/",
  },
  {
    title: "Twitter",
    icon: <TwitterOutlined />,
    url: "https://twitter.com/",
  },
  {
    title: "Linkedin",
    icon: <LinkedinOutlined />,
    url: "https://linkedin.com",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="px-10 pt-10">
      <span className="text-6xl font-bold">Get in touch</span>

      <Divider className="bg-white" />
      <div className="grid grid-cols-2 leading-loose py-10">
        <div className="">
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="me-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non eum
            enim rem, blanditiis magni quasi sit eos sequi perspiciatis nam.
          </p>
          {/* <div className="mt-5">
            {contactIcons.map((item: any, index: number) => {
              return (
                <Tooltip
                  key={index}
                  title={item.title}
                  className=" text-center"
                >
                  <Link
                    href={item.url}
                    target="_blank"
                    className="mx-2 text-xl p-3"
                  >
                    {item.icon}
                  </Link>
                </Tooltip>
              );
            })}
          </div> */}
        </div>

        <div className="grid grid-cols-2">
          <div className="">
            <p className="text-2xl font-bold text-orange-400">Navigate</p>
            <Anchor
              className="unstyled-anchor"
              items={[
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
              ]}
            />
          </div>
          <div className="">
            <p className="text-2xl font-bold text-orange-400">Contact</p>
            <ul>
              {/* <li>+66xx xxx xxxx</li> */}
              <li>
                <Link href="mailto:inrongpon22@gmail.com" target="_blank">
                  inrongpon22@gmail.com
                </Link>
              </li>
              <li>
                <Link href="https://github.com/inrongpon22" target="_blank">
                  Github
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Divider className="bg-white" />
    </section>
  );
};

export default Contact;
