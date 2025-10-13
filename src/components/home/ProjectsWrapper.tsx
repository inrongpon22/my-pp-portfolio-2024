import React from "react"
import getProjectsData, { ProjectProps } from "./getProjects"
import Image from "next/image"

const ProjectCard = ({ item }: { item: ProjectProps }): React.ReactNode => {
  return (
    <div className="border-2 rounded-lg shadow-sm hover:scale-105 transition-all duration-300 hover:shadow-lg">
      <Image
        alt={item.title}
        src={item.previewImg}
        className="w-full h-[250px] object-cover rounded-t-lg"
        width={100}
        height={100}
      />
      <div className="flex flex-col p-2">
        <span className="text-xl font-extrabold">{item.title}</span>
        <span className="text-sm text-gray-500">{item.type}</span>
      </div>
    </div>
  )
}

const ProjectsWrapper = () => {
  return (
    <div id="projects">
      <h1 className="html-tag ml-4">{`<projects>`}</h1>
      <section className="flex flex-col gap-10 px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0">
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
