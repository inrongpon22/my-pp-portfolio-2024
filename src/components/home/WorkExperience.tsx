"use client"

import React from "react"
import { BookOpen, GraduationCap, LoaderCircle, MonitorCog, Workflow } from "lucide-react"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

interface TimelineItem {
  date: string
  position: string
  company: string
  description: string
  icon?: React.ReactNode
  iconStyle?: React.CSSProperties
  contentStyle?: React.CSSProperties
  contentArrowStyle?: React.CSSProperties
  color?: string
  inprogress?: boolean
}


const WorkExperience = () => {
  const timelineItems: TimelineItem[] = [
    {
      date: "April 2024 - Present",
      position: "Front-End Developer",
      company: "MEET SOFTWARE CO., at Chiang Mai, Thailand",
      description: "React, Tailwind, Nodejs, Express, SQL, PostgresQL, Docker",
      inprogress: true,
      icon: <LoaderCircle className="animate-spin text-xs" />,
      iconStyle: { background: 'rgb(251, 146, 60)', color: '#fff' },
      contentStyle: { background: 'rgb(251, 146, 60)', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid  rgb(251, 146, 60)' }
    },
    {
      date: "January 2023 - March 2024",
      position: "Front-End Developer",
      description: "React, Tailwind, Nodejs, Express, SQL, PostgresQL, Docker",
      company: "React, Tailwind",
      color: "#fb923c",
      icon: <MonitorCog />,
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
      contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }

    },
    {
      date: "March 2022 - December 2022",
      position: "Practicing by myself",
      company: "",
      description: "",
      color: "#fb923c",
      icon: <BookOpen />,
      iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
      contentStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid  rgb(233, 30, 99)' }

    },
    {
      date: "March 2022",
      position: "Graduated in Faculty of Education, English",
      company: "Chiang Mai Rajabhat University, Thailand",
      description: "",
      color: "#fb923c",
      icon: <GraduationCap />,
      iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
      contentStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid  rgb(233, 30, 99)' }


    }
  ]

  return (
    <div id="work-experience">
      <h1 className="html-tag sm:ml-4">{`<work-experience>`}</h1>
      <div className="sm:px-12">
        <section
          id="services-background"
          className="h-full w-full flex flex-col justify-center items-center gap-10 rounded-2xl py-10"
        >
          <p className="text-center md:text-left text-3xl sm:text-6xl font-bold">
            <span className="text-gray-700 dark:text-gray-300 text-3xl sm:text-6xl">My Work</span>
            <span className="text-orange-400 text-3xl sm:text-6xl"> Experience</span>
          </p>
          <VerticalTimeline>
            {timelineItems.map((item: TimelineItem, index: number) => {
              const { date, position, company, description, icon, iconStyle, contentStyle, contentArrowStyle } = item
              return (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={contentStyle ? contentStyle : undefined}
                  contentArrowStyle={contentArrowStyle ? contentArrowStyle : undefined}
                  date={date}
                  iconStyle={iconStyle ? iconStyle : undefined}
                  icon={icon}
                >
                  <h3 className="vertical-timeline-element-title">{position}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{company}</h4>
                  {description && (
                    <p>
                      {description}
                    </p>
                  )}
                </VerticalTimelineElement>
              )
            })}
          </VerticalTimeline>
        </section>
      </div>

      <h1 className="html-tag sm:ml-4">{`</work-experience>`}</h1>
    </div>
  )
}

export default WorkExperience
