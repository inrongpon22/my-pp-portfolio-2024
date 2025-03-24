"use client";
import React from "react";
import "./subheader.css";

const SubHeaderWrapper = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center pt-28">
      <div className="flex justify-center items-center lg:w-1/3 order-1 lg:order-2 lg:pb-0 pb-10">
        <h1 className="text-8xl">
          I&apos;m <span className="text-orange-400">Phanupong</span>, Front-End
          Developer.
        </h1>
      </div>

      {/* <div className="container order-2 lg:order-1">
        <div
          data-text="Pic1"
          className="box box-1"
          style={{
            backgroundImage: `url("https://picsum.photos/id/1/640/800")`,
          }}
        ></div>
        <div
          data-text="Pic2"
          className="box box-2"
          style={{
            backgroundImage: `url("https://picsum.photos/id/2/640/800")`,
          }}
        ></div>
        <div
          data-text="Pic3"
          className="box box-3"
          style={{
            backgroundImage: `url("https://picsum.photos/id/3/640/800")`,
          }}
        ></div>
        <div
          data-text="Pic4"
          className="box box-4"
          style={{
            backgroundImage: `url("https://picsum.photos/id/4/640/800")`,
          }}
        ></div>
      </div> */}
    </div>
  );
};

export default SubHeaderWrapper;
