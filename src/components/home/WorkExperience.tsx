import { ClockCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import React from "react";

const WorkExperience = () => {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center gap-10">
      <p className="text-center md:text-left text-6xl font-bold">
        <span>My Work</span>
        <span className="text-orange-400"> Experience</span>
      </p>
      <div className="text-xs md:w-full">
        <Timeline
          mode="alternate"
          items={[
            {
              label: (
                <div className=" pe-3">
                  <i>March 2022</i>
                </div>
              ),
              children: (
                <div className="">
                  <p className="">Graduated in Faculty of Education, English</p>
                </div>
              ),
              dot: (
                <div className="border-2 border-dashed border-orange-400 rounded-full p-0.5">
                  <div className="w-[25px] h-[25px] bg-orange-400 rounded-full"></div>
                </div>
              ),
            },
            {
              label: (
                <div className="">
                  <span>March 2022 - December 2022</span>
                </div>
              ),
              children: (
                <div className="mb-5">
                  <p className="font-bold">Practicing by myself</p>
                </div>
              ),
            },
            {
              label: "January 2023 - March 2024",
              children: (
                <div className="mb-5">
                  <p className="font-bold">Front-End Developer (React)</p>
                  <p>
                    <span className="font-semibold">Tools:{" "}</span>
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
              dot: <LoadingOutlined spin  style={{ fontSize: "16px" }} />,
              label: (
                <div className="ps-3">
                  <p>April 2024 - Present</p>
                </div>
              ),
              children: (
                <div className="">
                  <p className="font-bold">Front-End Developer</p>
                  <p>
                    <span className="font-semibold">Tools:{" "}</span>
                    <span>React, Tailwind, Nodejs, Express, SQL, PostgresQL, Docker</span>
                  </p>
                  <p className="text-xs">
                    MEET SOFTWARE CO., at Chiang Mai, Thailand
                  </p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
};

export default WorkExperience;
