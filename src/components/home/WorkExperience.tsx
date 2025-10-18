import { LoaderCircle } from "lucide-react"
import React from "react"

const WorkExperience = () => {
  const timelineItems = [
    {
      label: "March 2022",
      children: "Graduated in Faculty of Education, English",
      color: "#fb923c",
    },
    {
      label: "March 2022 - December 2022",
      children: "Practicing by myself",
      color: "#fb923c",
    },
    {
      label: "January 2023 - March 2024",
      children: (
        <div>
          <p className="font-bold">Front-End Developer (React)</p>
          <p>
            <span className="font-semibold">Tools: </span>
            <span>React, Tailwind</span>
          </p>
          <p className="text-xs">
            ITTHIRIT TECHNOLOGY CO., LTD. at Chiang Mai, Thailand
          </p>
        </div>
      ),
      color: "#fb923c",
    },
    {
      label: "April 2024 - Present",
      children: (
        <div>
          <p className="font-bold">Front-End Developer</p>
          <p>
            <span className="font-semibold">Tools: </span>
            <span>
              React, Tailwind, Nodejs, Express, SQL, PostgresQL, Docker
            </span>
          </p>
          <p className="text-xs">MEET SOFTWARE CO., at Chiang Mai, Thailand</p>
        </div>
      ),
      loading: true,
    },
  ]

  return (
    <div id="work-experience">
      <h1 className="html-tag ml-4">{`<work-experience>`}</h1>
      <div className="px-12">
        <section
          id="services-background"
          className="h-full w-full flex flex-col justify-center items-center gap-10 rounded-2xl py-10"
        >
          <p className="text-center md:text-left text-6xl font-bold">
            <span className="text-gray-100 dark:text-gray-300">My Work</span>
            <span className="text-orange-400"> Experience</span>
          </p>
          <div className="w-full max-w-4xl">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative  mb-8 ${
                    index % 2 === 0 ? "left-timeline" : "right-timeline"
                  }`}
                >
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                      }`}
                    >
                      <div className="bg-white p-4 rounded-lg shadow-md dark:bg-slate-800 dark:border dark:border-slate-700">
                        <div className="text-sm text-gray-600 dark:text-gray-200 mb-2">
                          {item.label}
                        </div>
                        <div className="text-sm">{item.children}</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-400 rounded-full border-2 border-white shadow-md">
                    {item.loading && (
                      <LoaderCircle className="animate-spin text-white text-xs" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <h1 className="html-tag ml-4">{`</work-experience>`}</h1>
    </div>
  )
}

export default WorkExperience
