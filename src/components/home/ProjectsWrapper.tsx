"use client"

import React from "react"
import getProjectsData, { ProjectProps, Responsibilities } from "./getProjects"
import Image from "next/image"
import { cn } from "@/app/utils/cn"

const ProjectCard = ({ item }: { item: ProjectProps }): React.ReactNode => {
  return (
    <div className="flex flex-col gap-3 bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border-2 dark:border-slate-700 rounded-2xl shadow-sm hover:scale-105 transition-all duration-300 hover:shadow-lg overflow-hidden">
      <Image
        alt={item.title}
        src={item.previewImg || ""}
        loading="lazy"
        className="w-full h-[300px] object-cover"
        width={200}
        height={100}
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-wrap gap-2">
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
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-base">{item.description}</span>
        </div>
        <button
          type="button"
          className={cn("bg-slate-800 dark:bg-slate-300 text-white dark:text-black p-2 px-4 rounded-xl", item.source.length === 0 && "hidden")}
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
      <h1 className="html-tag sm:ml-4">{`<projects>`}</h1>
      <section className="flex flex-col gap-10 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 sm:px-4 md:px-0">
          {getProjectsData?.map((item: ProjectProps, index: number) => {
            return <ProjectCard key={index} item={item} />
          })}
        </div>
      </section>
      <h1 className="html-tag sm:ml-4">{`</projects>`}</h1>
    </div>
  )
}

export default ProjectsWrapper
