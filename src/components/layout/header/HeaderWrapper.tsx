'use client'

import React from 'react'
import { Anchor, Button } from 'antd'
import Link from 'next/link'
import { AnchorLinkItemProps } from 'antd/es/anchor/Anchor'

const items: AnchorLinkItemProps[] = [
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

const HeaderWrapper = () => {
  return (
    <div className='w-2/3 flex justify-between items-center bg-[#333] text-white py-2 px-4 my-5 rounded-full fixed z-50'>
      <div className='w-full flex items-center justify-center'>
        <Anchor className='text-white' direction='horizontal' items={items} />
      </div>
      {/* <Link href='/auth/login'>
        <Button type='primary' shape='round' className='bg-blue-500'>
          Login
        </Button>
      </Link> */}
    </div>
  )
}

export default HeaderWrapper
