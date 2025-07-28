'use client'

import React from 'react'
import Link from 'next/link'

const HeaderWrapper = () => {
  const items = [
    {
      key: 'home',
      href: '#home',
      title: 'Home',
    },
    {
      key: 'about',
      href: '#about',
      title: 'About me',
    },
    {
      key: 'projects',
      href: '#projects',
      title: 'Projects',
    },
    {
      key: 'contact',
      href: '#contact',
      title: 'Contact',
    },
  ]

  return (
    <div className='w-2/3 flex justify-between items-center bg-[#333] text-white py-2 px-4 my-5 rounded-full fixed z-50'>
      <div className='w-full flex items-center justify-center'>
        <nav className='flex gap-6'>
          {items.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className='text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer'
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default HeaderWrapper
