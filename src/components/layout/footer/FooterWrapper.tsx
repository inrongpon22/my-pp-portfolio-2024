"use client";
import React from "react";
import moment from "moment";
import Contact from "@/components/home/Contact";

const FooterWrapper = () => {
  return (
    <section className="flex justify-center pb-10 px-4 md:px-0">
      <div className="bg-[#333] text-white rounded-3xl">
        <Contact />
        <div className="flex justify-between px-10 pb-10">
          <span>{moment().year()}© made by Phanupong</span>
        </div>
      </div>
    </section>
  );
};

export default FooterWrapper;
