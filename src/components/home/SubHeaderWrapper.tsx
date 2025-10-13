"use client"
import React from "react"

const SubHeaderWrapper = () => {
  return (
    <div id="home" className="flex flex-col items-start">
      <h1 className="html-tag text-orange-500">{`<html>`}</h1>
      <h1 className="html-tag ml-4">{`<header>`}</h1>
      <div className="ml-12">
        <h1 className="text-center text-4xl">
          I&apos;m <span className="text-orange-400">Phanupong</span>, Front-End
          Developer.
        </h1>
      </div>
      <h1 className="html-tag ml-4">{`</header>`}</h1>
    </div>
  )
}

export default SubHeaderWrapper
