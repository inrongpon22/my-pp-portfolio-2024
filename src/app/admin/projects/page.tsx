'use client'
import { Button } from '@/components/common/Button'
import { Modal } from '@/components/common/Modal'
import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      description: 'Project 1 description',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Project 2 description',
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'Project 3 description',
    },
    {
      id: 4,
      name: 'Project 4',
      description: 'Project 4 description',
    },
  ]

  return (
    <div className='w-full h-full'>
      <div className='flex justify-end'>
        <Button onClick={() => alert('Hello')}>Create new project</Button>
      </div>
      <h1 className='text-2xl font-bold'>All Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projects.map((project) => (
          <div key={project.id} className='bg-white p-4 rounded-lg shadow-md'>
            <h2 className='text-lg font-bold'>{project.name}</h2>
            <p className='text-sm text-gray-500'>{project.description}</p>
            <Button onClick={() => alert('Hello')}>Edit</Button>
          </div>
        ))}
      </div>

      <Modal>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-lg font-bold'>Create new project</h2>
          <input type='text' placeholder='Project name' />
          <input type='text' placeholder='Project description' />
          <Button onClick={() => alert('Hello')}>Create</Button>
        </div>
      </Modal>
    </div>
  )
}

export default Projects
