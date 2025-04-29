import React from 'react'
import Image from 'next/image'

const tools = [
  {
    title: 'HTML',
    icon: '/media/framework-logos/html.png',
  },
  {
    title: 'CSS',
    icon: '/media/framework-logos/css-3.svg',
  },
  {
    title: 'Javascript',
    icon: '/media/framework-logos/javascript.svg',
  },
  {
    title: 'Typecript',
    icon: '/media/framework-logos/file-type-typescript-official.svg',
  },
  {
    title: 'Bootstrap',
    icon: '/media/framework-logos/bootstrap.png',
  },
  {
    title: 'Tailwind',
    icon: '/media/framework-logos/tailwind-css.svg',
  },
  {
    title: 'React',
    icon: '/media/framework-logos/React.png',
  },
  {
    title: 'Nextjs',
    icon: '/media/framework-logos/Next.js.png',
  },
  {
    title: 'Ant Design',
    icon: '/media/framework-logos/ant-design.svg',
  },
  {
    title: 'Metronics Theme',
    icon: '/media/logos/default-small.svg',
  },
  {
    title: 'ApexCharts',
    icon: 'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-white-trimmed.svg',
  },
  {
    title: 'HighChart',
    icon: './media/framework-logos/highcharts.svg',
  },
]

const Tools = () => {
  if (tools.length === 0) return <>no tools</>

  return (
    <div className='flex flex-col lg:flex-row items-center lg:gap-0 gap-10 px-4'>
      <div className='lg:order-1 order-2 grid grid-cols-3 md:grid-cols-4 gap-2'>
        {tools.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className='bg-slate-200 flex flex-col items-center justify-center p-5 rounded-xl'
            >
              <Image alt={item.title} src={item.icon} width={45} height={45} />
              <span className='text-lg'>{item.title}</span>
            </div>
          )
        })}
      </div>
      <p className='lg:order-2 order-1 text-6xl font-bold lg:mx-auto'>
        <span>Tool</span>
        <span className='text-orange-400 text-shadow-orange-400 glow-effect'>s</span>
      </p>
    </div>
  )
}

export default Tools
