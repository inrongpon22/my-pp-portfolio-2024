"use client"

import React from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

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
      <span className="text-3xl sm:text-6xl font-bold">Get in touch</span>

      <hr className="border-white my-4" />
      <div className=" leading-loose">
        {/* <div className="text-sm sm:text-base">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut harum
            quae nihil sint aspernatur error, ad est explicabo! Amet aliquid
            ducimus eveniet, modi cum sed cupiditate deserunt illo ratione
            tenetur eaque temporibus nemo repudiandae, quia provident, earum
            accusamus nulla quasi?
          </p>
        </div> */}

        <div className="text-sm sm:text-base">
          <p className="text-2xl font-bold text-orange-400 underline">
            Contact
          </p>
          <ul>
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
          </ul>
        </div>
      </div>
      {/* <ThemeSwitcher /> */}
      <hr className="border-white my-4 sm:my-8" />
    </section>
  )
}

export default Contact
