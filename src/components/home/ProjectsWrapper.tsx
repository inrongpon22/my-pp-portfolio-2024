import { Card } from "antd";
import React from "react";
import getProjectsData from "./getProjects";
import Image from "next/image";

const ProjectsWrapper = () => {
  return (
    <section id="projects" className="flex flex-col gap-10">
      <h1 className="text-6xl font-bold text-center">
        <span>My Project</span>
        <span className="text-orange-400 text-shadow-orange-400 glow-effect">s</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-0">
        {getProjectsData?.map((item: any, index: number) => {
          // if (index < 5)
          return (
            <Card
              key={index}
              hoverable
              cover={
                <Image
                  alt={item.title}
                  src={item.previewImg}
                  className="w-full h-[200px] object-cover"
                  width={100}
                  height={100}
                />
              }
              className="border-2"
            >
              <div className="flex flex-col">
                <span className="text-xl font-extrabold">{item.title}</span>
                <span>{item.type}</span>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsWrapper;
