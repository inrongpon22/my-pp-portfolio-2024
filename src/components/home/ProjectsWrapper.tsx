import { Card } from "antd";
import React from "react";
import getProjectsData from "./getProjects";
import Image from "next/image";

const ProjectsWrapper = () => {
  return (
    <section className="px-4">
      <div className=" w-full">
        <div className="">
          <h1 className="text-6xl">Projects</h1>
          <div className="flex items-center pt-5"></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {getProjectsData?.map((item: any, index: number) => {
            // if (index < 5)
              return (
                <Card
                  key={index}
                  hoverable
                  cover={
                    <img
                      alt={item.title}
                      src={item.previewImg}
                      className="w-full h-[200px] object-cover"
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
      </div>
    </section>
  );
};

export default ProjectsWrapper;
