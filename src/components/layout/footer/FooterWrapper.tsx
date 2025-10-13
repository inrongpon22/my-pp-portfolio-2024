"use client"
import React from "react"
import moment from "moment"
import Contact from "@/components/home/Contact"

const FooterWrapper = () => {
  return (
    <div id="footer">
      <h1 className="html-tag ml-4">{`<footer>`}</h1>
      <section className="flex justify-center px-12">
        <div className="bg-[#333] text-white rounded-3xl">
          <Contact />
          <div className="flex justify-between px-10 pb-10">
            <span>{moment().year()}© made by Phanupong</span>
          </div>
        </div>
      </section>
      <h1 className="html-tag ml-4">{`</footer>`}</h1>
    </div>
  )
}

export default FooterWrapper
