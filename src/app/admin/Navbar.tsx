'use client'
import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import clsx from 'clsx'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <>
      <div className='p-4 bg-primary-bg text-primary-text md:hidden'>
        <div className='flex items-center gap-2'>
          <Menu onClick={() => setIsMenuOpen(true)} />
          <h1 className='text-2xl font-bold'>Admin</h1>
        </div>
      </div>
      <div
        className={clsx(
          'w-3/4 absolute top-0 left-0 h-full bg-primary-bg text-primary-text z-20',
          {
            hidden: !isMenuOpen,
          }
        )}
      >
        <div className='flex flex-col gap-2 overflow-hidden p-4'>
          <Sidebar mobileClicked={[isMenuOpen, setIsMenuOpen]} />
        </div>
      </div>
      <div
        onClick={() => setIsMenuOpen(false)}
        className={clsx(
          'bg-black/50 absolute top-0 left-0 w-full h-full z-10',
          {
            hidden: !isMenuOpen,
          }
        )}
      />
    </>
  )
}

export default Navbar
