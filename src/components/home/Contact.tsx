"use client"

import React from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useTheme } from "next-themes"

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <p>The current theme is: {theme}</p>
      {/* <div className="flex gap-3">
        <button type="button" onClick={() => setTheme("light")}>
          Light
        </button>
        <button type="button" onClick={() => setTheme("dark")}>
          Dark
        </button>
        <button type="button" onClick={() => setTheme("system")}>
          System
        </button>
      </div> */}
      <label className="toggle text-base-content">
        <input
          type="checkbox"
          value="synthwave"
          className="theme-controller"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />

        <svg
          aria-label="sun"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </g>
        </svg>

        <svg
          aria-label="moon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </g>
        </svg>
      </label>
    </div>
  )
}

const contactIcons = [
  {
    title: "Facebook",
    icon: <Facebook />,
    url: "https://www.facebook.com/",
  },
  {
    title: "Instagram",
    icon: <Instagram />,
    url: "https://www.instagram.com/",
  },
  {
    title: "Twitter",
    icon: <Twitter />,
    url: "https://twitter.com/",
  },
  {
    title: "Linkedin",
    icon: <Linkedin />,
    url: "https://linkedin.com",
  },
]

const Contact = () => {
  return (
    <section id="contact" className="px-10 pt-10">
      <span className="text-6xl font-bold">Get in touch</span>

      <hr className="border-white my-4" />
      <div className=" leading-loose">
        <div className="">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut harum
            quae nihil sint aspernatur error, ad est explicabo! Amet aliquid
            ducimus eveniet, modi cum sed cupiditate deserunt illo ratione
            tenetur eaque temporibus nemo repudiandae, quia provident, earum
            accusamus nulla quasi?
          </p>
        </div>

        <div className="pt-10">
          <p className="text-2xl font-bold text-orange-400 underline">
            Contact
          </p>
          <ul>
            <li className="flex items-center gap-2">
              <span className="text-orange-400 font-bold">Email:</span>
              <Link
                href="mailto:inrongpon.phanupong2@gmail.com"
                target="_blank"
                className="hover:text-orange-400 transition-all duration-300"
              >
                inrongpon.phanupong2@gmail.com
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-400 font-bold">Github:</span>
              <Link
                href="https://github.com/inrongpon22"
                target="_blank"
                className="hover:text-orange-400 transition-all duration-300"
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ThemeSwitcher />
      <hr className="border-white my-4" />
    </section>
  )
}

export default Contact
