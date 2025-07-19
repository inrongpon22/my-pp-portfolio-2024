import { MonitorDot, PencilRuler } from 'lucide-react'
import React from 'react'

const services = [
  {
    title: 'UX/UI',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ratione!',
    icon: <PencilRuler />,
  },
  {
    title: 'Web Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ratione!',
    icon: <MonitorDot />,
  },
]

const About = () => {
  return (
    <div id='about' className='px-4'>
      <div
        id='services-background'
        className='flex flex-col justify-center items-center p-24 rounded-2xl'
      >
        <span className='w-3/4 text-orange-400 text-4xl text-center font-semibold'>
          Services
        </span>
        <div className='flex flex-col md:flex-row justify-center gap-4 mt-4'>
          {services?.map((item: any, index: number) => {
            return (
              <div key={index} className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                <span className='text-6xl'>{item.icon}</span>
                <p className='font-bold'>{item.title}</p>
                {item.desc}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About
