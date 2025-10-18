"use client"

import React from "react"
import getProjectsData, { ProjectProps, Responsibilities } from "./getProjects"
import Image from "next/image"

const ProjectCard = ({ item }: { item: ProjectProps }): React.ReactNode => {
  return (
    <div className="flex flex-col gap-3 bg-slate-100 dark:bg-slate-800 border-2 dark:border-slate-700 rounded-2xl shadow-sm hover:scale-105 transition-all duration-300 hover:shadow-lg p-4">
      <Image
        alt={item.title}
        src={item.previewImg}
        className="w-full h-[300px] object-cover rounded-2xl"
        width={100}
        height={100}
      />
      <div className="">
        {item.responsibilities.map((responsibility: Responsibilities) => {
          return (
            <span
              key={responsibility}
              className="text-sky-500 dark:text-sky-400 border border-sky-300 dark:border-sky-700 rounded-full px-2 py-1 text-sm"
            >
              {responsibility}
            </span>
          )
        })}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl font-extrabold">{item.title}</span>
        {/* <span className="text-sm dark:text-gray-500">{item.type}</span> */}
        <button
          type="button"
          className="self-center bg-slate-800 dark:bg-slate-300 text-white dark:text-black p-2 px-4 rounded-md"
        >
          View Project Details
        </button>
      </div>
    </div>
  )
}

const ProjectsWrapper = () => {
  return (
    <div id="projects">
      <h1 className="html-tag ml-4">{`<projects>`}</h1>
      <section className="flex flex-col gap-10 px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {getProjectsData?.map((item: ProjectProps, index: number) => {
            return <ProjectCard key={index} item={item} />
          })}
        </div>
      </section>
      <h1 className="html-tag ml-4">{`</projects>`}</h1>
    </div>
  )
}

export default ProjectsWrapper
