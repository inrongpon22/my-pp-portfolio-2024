import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import React from "react";

const WorkExperience = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <span className="text-6xl font-bold mb-12">
        My Work<span className="text-orange-400"> Experience</span>
      </span>
      <Timeline
        className="w-full"
        mode="alternate"
        items={[
          {
            label: (
              <div className="text-xl me-4">
                <i>March 2022</i>
              </div>
            ),
            children: (
              <div className="mb-12 ms-4">
                <p className="text-lg font-bold">
                  Graduated in Faculty of Education, English
                </p>
              </div>
            ),
            dot: (
              <div className="border-2 border-dashed border-orange-400 rounded-full">
                <div className="w-[25px] h-[25px] bg-orange-400 rounded-full m-1"></div>
              </div>
            ),
          },
          {
            label: (
              <div className="text-xl">
                <span>March 2022 - December 2022</span>
              </div>
            ),
            children: (
              <div className="mb-12">
                <p className="text-lg font-bold">Practicing by myself</p>
              </div>
            ),
          },
          {
            label: "January 2023 - March 2024",
            children: (
              <div className="">
                <p className="text-lg font-bold">Front-End Developer (React)</p>
                <p>ITTHIRIT TECHNOLOGY CO., LTD. at Chiang Mai, Thailand</p>
              </div>
            ),
            color: "#fb923c",
          },
          {
            label: "April 2024 - Present",
            children: (
              <div className="">
                <p className="text-lg font-bold">Front-End Developer</p>
                <p>
                  React, Tailwind, Nodejs, Express, Postgresql, Docker
                </p>
                <p>MEET SOFTWARE CO., at Chiang Mai, Thailand</p>
              </div>
            ),
          },
        ]}
      />
    </section>
  );
};

export default WorkExperience;
