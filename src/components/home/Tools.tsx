import React from "react"
import Image from "next/image"
import { Marquee3D } from "../common/Marquee3D"

interface ToolProps {
  title: string
  icon: string
}

const tools: ToolProps[] = [
  {
    title: "HTML",
    icon: "/media/framework-logos/html.png",
  },
  {
    title: "CSS",
    icon: "/media/framework-logos/css-3.svg",
  },
  {
    title: "Javascript",
    icon: "/media/framework-logos/javascript.svg",
  },
  {
    title: "Typecript",
    icon: "/media/framework-logos/file-type-typescript-official.svg",
  },
  {
    title: "Bootstrap",
    icon: "/media/framework-logos/bootstrap.png",
  },
  {
    title: "Tailwind",
    icon: "/media/framework-logos/tailwind-css.svg",
  },
  {
    title: "React",
    icon: "/media/framework-logos/React.png",
  },
  {
    title: "Nextjs",
    icon: "/media/framework-logos/Next.js.png",
  },
  {
    title: "Ant Design",
    icon: "/media/framework-logos/ant-design.svg",
  },
  {
    title: "Metronics Theme",
    icon: "/media/logos/default-small.svg",
  },
  {
    title: "ApexCharts",
    icon: "https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-white-trimmed.svg",
  },
  {
    title: "HighChart",
    icon: "./media/framework-logos/highcharts.svg",
  },
  {
    title: "Supabase",
    icon: "",
  },
  {
    title: "Cloudflare",
    icon: "",
  },
]

const Tools = () => {
  if (tools.length === 0) return <>no tools</>

  return (
    <div id="tools" className="flex flex-col items-start">
      <h1 className="html-tag sm:ml-4">{`<tools>`}</h1>
      {/* <div className="grid grid-cols-3 md:grid-cols-8 gap-2 sm:x-12">
        {tools.map((item: ToolProps, index: number) => {
          return (
            <div
              key={index}
              className="bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-center text-center p-5 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400"
            >
              <Image alt={item.title} src={item.icon} width={45} height={45} />
              <span className="text-xs sm:text-lg">{item.title}</span>
            </div>
          )
        })}
      </div> */}
      <Marquee3D items={tools} />
      <h1 className="html-tag sm:ml-4">{`</tools>`}</h1>
    </div>
  )
}

export default Tools
