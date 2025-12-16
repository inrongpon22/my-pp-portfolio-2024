"use client"

import React from "react"
import Link from "next/link"
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  LinkedinIcon,
  Mail,
  Twitter,
} from "lucide-react"

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
    <section id="contact" className="px-4 sm:px-10 pt-10">
      <span className="text-3xl sm:text-6xl font-bold">Phanupong Inrongpon</span>

      <hr className="border-white my-4" />
      <div className="leading-loose space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-white">I develop websites and web applications.</h2>
        <p className="text-base md:text-lg font-light text-white">
          As a passionate frontend developer, I thrive on bringing ideas to life
          through interactive and visually appealing user interfaces. My
          enthusiasm for crafting seamless digital experiences drives me to
          continuously learn new technologies and stay updated with the latest
          trends in web development. Currently based in Chiang Mai, I am
          dedicated to delivering high-quality solutions that make an impact and
          provide exceptional value to users.
        </p>

        <div className="text-sm sm:text-base">
          <p className="text-2xl font-bold text-white underline">Contact</p>
          <div className="flex gap-4 pt-4">
            <a
              href="mailto:inrongpon.phanupong2@gmail.com"
              target="_blank"
              className="flex items-center gap-2 bg-orange-400 p-2 rounded-md hover:bg-orange-500 transition-all duration-300"
            >
              <Mail className="text-white" />
            </a>
            <a
              href="https://github.com/inrongpon22"
              target="_blank"
              className="flex items-center gap-2 bg-orange-400 p-2 rounded-md hover:bg-orange-500 transition-all duration-300"
            >
              <Github className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/phanupong-inrongpon-6aa97b25a"
              target="_blank"
              className="flex items-center gap-2 bg-orange-400 p-2 rounded-md hover:bg-orange-500 transition-all duration-300"
            >
              <LinkedinIcon className="text-white" />
            </a>
          </div>
          {/* <ul>
            <li className="flex items-center gap-2">
              <span className="text-orange-400 font-bold text-sm sm:text-base">Email:</span>
              <Link
                href="mailto:inrongpon.phanupong2@gmail.com"
                target="_blank"
                className="hover:text-orange-400 transition-all duration-300"
              >
                inrongpon.phanupong2@gmail.com
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-400 font-bold text-sm sm:text-base">Github:</span>
              <Link
                href="https://github.com/inrongpon22"
                target="_blank"
                className="hover:text-orange-400 transition-all duration-300"
              >
                Github
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
      {/* <ThemeSwitcher /> */}
      <hr className="border-white my-4 sm:my-8" />
    </section>
  )
}

export default Contact
