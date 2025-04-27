import { BuildOutlined, DesktopOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React from 'react'

const services = [
  {
    title: 'UX/UI',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ratione!',
    icon: <BuildOutlined />,
  },
  {
    title: 'Web Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ratione!',
    icon: <DesktopOutlined />,
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
              <Card key={index}>
                <span className='text-6xl'>{item.icon}</span>
                <p className='font-bold'>{item.title}</p>
                {item.desc}
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About
