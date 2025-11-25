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
    title: "Emotion",
    icon: "https://emotion.sh/logo-96x96.png",
  },
  {
    title: "React",
    icon: "/media/framework-logos/React.png",
  },
  {
    title: "React Router Dom",
    icon: "/media/framework-logos/rr_logo_dark.svg",
  },
  {
    title: "VITE",
    icon: "https://vite.dev/logo.svg",
  },
  {
    title: "Nextjs",
    icon: "/media/framework-logos/Next.js.png",
  },
  {
    title: "React Hook Form",
    icon: "https://react-hook-form.com/images/logo/react-hook-form-logo-only.svg",
  },
  {
    title: "Redux",
    icon: "https://redux.js.org/img/redux.svg",
  },
  {
    title: "Axios",
    icon: "/media/framework-logos/axios.svg",
  },
  {
    title: "SWR",
    icon: "",
  },
  {
    title: "Socket.io",
    icon: "https://socket.io/images/logo-dark.svg",
  },
  {
    title: "Bruno",
    icon: "/media/framework-logos/bruno.svg",
  },
  {
    title: "Postman",
    icon: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg",
  },
  {
    title: "Formik",
    icon: "",
  },
  {
    title: "Zod",
    icon: "/media/framework-logos/zod-logo-white.webp",
  },
  {
    title: "Yup",
    icon: "",
  },
  {
    title: "Momentjs",
    icon: "",
  },
  {
    title: "Dayjs",
    icon: "https://day.js.org/img/logo.png",
  },
  {
    title: "React Hot Toast",
    icon: "/media/framework-logos/react-hot-toast-logo.svg",
  },
  {
    title: "Ant Design",
    icon: "/media/framework-logos/ant-design.svg",
  },
  {
    title: "Shadcn UI",
    icon: "/media/framework-logos/shadcnui-logo.svg",
  },
  {
    title: "Material UI",
    icon: "/media/framework-logos/mui-logo.svg",
  },
  {
    title: "Lucide icon",
    icon: "https://lucide.dev/logo.dark.svg",
  },
  {
    title: "Font Awsome icon",
    icon: "/media/framework-logos/fontawesome-logo.svg",
  },
  {
    title: "daisyUI",
    icon: "https://img.daisyui.com/images/daisyui/mark-static.svg",
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
    icon: "/media/framework-logos/supabase-logo-icon.png",
  },
  {
    title: "Cloudflare",
    icon: "/media/framework-logos/cloudflare.png",
  },
  {
    title: "Stripe",
    icon: "/media/framework-logos/Stripe_Logo.webp",
  },
  {
    title: "ngrok",
    icon: "https://cdn.prod.website-files.com/63ed4bc7a4b189da942a6b8c/6411ffa0b395a44345ed2b1a_Frame%201.svg",
  },
  {
    title: "qr.react",
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
