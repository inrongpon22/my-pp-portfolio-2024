"use client"
import React from "react"
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"

const SubHeaderWrapper = () => {
  return (
    <div id="home" className="flex flex-col items-start">
      <h1 className="html-tag text-orange-500">{`<html>`}</h1>
      <h1 className="html-tag sm:ml-4">{`<header>`}</h1>
      <div className="ml-4 sm:ml-12">
        <h1 className="text-center text-4xl">
          I&apos;m <span className="text-orange-400">Phanupong</span>, Front-End
          Developer.
        </h1>
        {/* <Terminal>
          <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>
          <AnimatedSpan className="text-green-500">
            ✔ Preflight checks.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Verifying framework. Found Next.js.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Validating Tailwind CSS.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Validating import alias.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Writing components.json.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Checking registry.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Updating tailwind.config.ts
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Updating app/globals.css
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Installing dependencies.
          </AnimatedSpan>
          <AnimatedSpan className="text-blue-500">
            <span>ℹ Updated 1 file:</span>
            <span className="pl-2">- lib/utils.ts</span>
          </AnimatedSpan>
          <TypingAnimation className="text-muted-foreground">
            Success! Project initialization completed.
          </TypingAnimation>
          <TypingAnimation className="text-muted-foreground">
            You may now add components.
          </TypingAnimation>
        </Terminal> */}
      </div>
      <h1 className="html-tag sm:ml-4">{`</header>`}</h1>
    </div>
  )
}

export default SubHeaderWrapper
