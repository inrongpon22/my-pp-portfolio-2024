"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import { Carousel, Spin } from "antd";
// components
import HeaderWrapper from "@/components/layout/header/HeaderWrapper";
import About from "@/components/home/About";
import FooterWrapper from "@/components/layout/footer/FooterWrapper";
import SubHeaderWrapper from "@/components/home/SubHeaderWrapper";
import ProjectsWrapper from "@/components/home/ProjectsWrapper";
import WorkExperience from "@/components/home/WorkExperience";
import ScrollVelocity from "@/components/framer-motion/ScrollVelocity";
import Tools from "@/components/home/Tools";

export default function Home() {
  return (
    <Suspense fallback={<Spin fullscreen />}>
      <div id="home" className="flex flex-col gap-10">
        <SubHeaderWrapper />

        <Tools />

        <About />

        <WorkExperience />

        <ProjectsWrapper />

        {/* separator */}
        {/* <ScrollVelocity
            texts={["Welcome to", "My Portfolio"]}
            // velocity={100}
            // className="custom-scroll-text"
          /> */}
        {/* separator */}
        <FooterWrapper />
      </div>
    </Suspense>
  );
}
