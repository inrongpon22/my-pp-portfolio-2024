import type { Metadata } from 'next'
import { Spin } from 'antd'
import { Inter } from 'next/font/google'
import Link from 'next/link'
// layout components
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export const metadata: Metadata = {
  title: 'Phanupong Portfolio',
  description: 'Phanupong Portfolio',
  icons: {
    icon: '/icon.svg',
  },
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (!children) return <Spin fullscreen />

  return (
    <div className='h-screen flex'>
      <div className='w-1/4 bg-primary-bg p-4 text-primary-text flex flex-col gap-4'>
        <Link
          href='/admin/dashboard'
          className='text-2xl font-bold text-center hover:text-white transition-all duration-300'
        >
          LOGO
        </Link>
        <div className='flex flex-col gap-2'>
          <Sidebar />
        </div>
      </div>
      <div className='flex flex-col w-3/4'>
        {/* <Navbar /> */}
        {children}
      </div>
    </div>
  )
}
