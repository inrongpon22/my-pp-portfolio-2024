"use client"

import React, { useState } from "react"
import getProjectsData, { ProjectProps, Responsibilities } from "./getProjects"
import Image from "next/image"
import ProjectDetailModal from "../common/ProjectDetailModal"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Github, Globe } from "lucide-react"

const ProjectCard = (props: {
  item: ProjectProps
  onView: () => void
}): React.ReactNode => {
  const { item, onView } = props

  return (
    <div className="flex flex-col gap-3 bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border-2 border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:scale-105 transition-all duration-300 hover:shadow-lg overflow-hidden h-full">
      <Image
        alt={item.title}
        src={item.previewImg || ""}
        loading="lazy"
        className="w-full h-[300px] object-cover"
        width={200}
        height={100}
      />
      <div className="flex flex-col gap-2 p-4 flex-1">
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
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-extrabold">{item.title}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-base line-clamp-4">
              {item.description}
            </span>
          </div>
        </div>
        <div className="flex-1" />
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={onView}
            className="w-full"
          >
            Details
          </Button>
          {item.source.length > 0 &&
            item.source.map((url) => {
              const isGithub = url.includes("github")
              return (
                <Button
                  key={url}
                  type="button"
                  onClick={() => window.open(url, "_blank")}
                  className={cn("w-full")}
                >
                  {isGithub ? (
                    <>
                      <Github /> Github
                    </>
                  ) : (
                    <>
                      <Globe /> Visit
                    </>
                  )}
                </Button>
              )
            })}
        </div>
      </div>
    </div>
  )
}

const ProjectsWrapper = () => {
  const [show, setShow] = useState<boolean>(false)
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null
  )

  return (
    <div id="projects">
      <h1 className="html-tag sm:ml-4">{`<projects>`}</h1>
      <section className="flex flex-col gap-10 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 sm:px-4 md:px-0">
          {getProjectsData?.map((item: ProjectProps, index: number) => {
            return (
              <ProjectCard
                key={index}
                item={item}
                onView={() => {
                  setShow(true)
                  setSelectedProject(item)
                }}
              />
            )
          })}
        </div>
      </section>
      <h1 className="html-tag sm:ml-4">{`</projects>`}</h1>
      <ProjectDetailModal show={[show, setShow]} project={selectedProject} />
    </div>
  )
}

export default ProjectsWrapper
