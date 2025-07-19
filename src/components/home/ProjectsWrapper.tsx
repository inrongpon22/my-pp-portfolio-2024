import React from 'react'
import getProjectsData from './getProjects'
import Image from 'next/image'
import { Project } from '@/types/project'

const ProjectCard = ({ item }: { item: Project }): React.ReactNode => {
  return (
    <div className='border-2 rounded-lg shadow-sm hover:scale-105 transition-all duration-300 hover:shadow-lg'>
      <Image
        alt={item.title}
        src={item.previewImg}
        className='w-full h-[250px] object-cover rounded-t-lg'
        width={100}
        height={100}
      />
      <div className='flex flex-col p-2'>
        <span className='text-xl font-extrabold'>{item.title}</span>
        <span className='text-sm text-gray-500'>{item.type}</span>
      </div>
    </div>
  )
}

const ProjectsWrapper = () => {
  return (
    <section id='projects' className='flex flex-col gap-10'>
      <h1 className='text-6xl font-bold text-center'>
        <span>My Project</span>
        <span className='text-orange-400 text-shadow-orange-400 glow-effect'>
          s
        </span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0'>
        {getProjectsData?.map((item: Project, index: number) => {
          // if (index < 5)
          return <ProjectCard key={index} item={item} />
        })}
      </div>
    </section>
  )
}

export default ProjectsWrapper
