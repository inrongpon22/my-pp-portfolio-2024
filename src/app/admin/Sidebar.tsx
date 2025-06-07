'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Menu {
  label: string
  icon: string
  href: string
}

const Sidebar = () => {
  const pathname = usePathname()
  const menus: Menu[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      href: '/admin/dashboard',
    },
    {
      label: 'Services',
      icon: 'services',
      href: '/admin/services',
    },
    {
      label: 'Projects',
      icon: 'projects',
      href: '/admin/projects',
    },
  ]
  return (
    <>
      {menus.map((menu) => (
        <Link
          href={menu.href}
          key={menu.label}
          className={clsx('hover:text-white rounded-md font-bold p-2 truncate', {
            'text-[#FF7F50] bg-gray-100 border-l-4 border-l-[#FF7F50]':
              menu.href === pathname,
          })}
        >
          <p>{menu.label}</p>
        </Link>
      ))}
    </>
  )
}

export default Sidebar
