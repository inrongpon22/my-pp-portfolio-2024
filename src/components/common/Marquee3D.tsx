"use client"
/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const ToolCard = (props: {
  title: string
  icon: string
}) => {
  const { title, icon } = props
  return (
    <div
      className="bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-center text-center p-5 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400"
    >
      <Image alt={title} src={icon} width={45} height={45} />
      <span className="text-xs sm:text-lg">{title}</span>
    </div>
  )
}

export function Marquee3D({ items }: { items: any[] }) {

  const firstRow = items.slice(0, items.length / 2)
  const secondRow = items.slice(items.length / 2)
  const thirdRow = items.slice(0, items.length / 2)
  const fourthRow = items.slice(items.length / 2)
  const fifthRow = items.slice(items.length / 2)

  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-2 overflow-hidden [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((item, index: number) => (
            <ToolCard key={index} {...item} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((item, index: number) => (
            <ToolCard key={index} {...item} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((item, index: number) => (
            <ToolCard key={index} {...item} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((item, index: number) => (
            <ToolCard key={index} {...item} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fifthRow.map((item, index: number) => (
            <ToolCard key={index} {...item} />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  )
}
