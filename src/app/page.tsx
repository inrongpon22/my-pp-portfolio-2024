"use client"
import React, { Suspense } from "react"
import Image from "next/image"
// components
import HeaderWrapper from "@/components/layout/header/HeaderWrapper"
import About from "@/components/home/About"
import FooterWrapper from "@/components/layout/footer/FooterWrapper"
import SubHeaderWrapper from "@/components/home/SubHeaderWrapper"
import ProjectsWrapper from "@/components/home/ProjectsWrapper"
import WorkExperience from "@/components/home/WorkExperience"
import Tools from "@/components/home/Tools"

const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-400"></div>
  </div>
)

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="relative w-full h-full max-w-5xl mx-auto">
        {/* <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center z-50">
          <HeaderWrapper />
        </div> */}

        <div className="flex flex-col gap-10 px-4 md:px-0">
          <SubHeaderWrapper />

          <Tools />

          {/* <About /> */}

          <WorkExperience />

          <ProjectsWrapper />

          <FooterWrapper />
        </div>
        <h1 className="html-tag">{`</html>`}</h1>
      </div>
    </Suspense>
  )
}
