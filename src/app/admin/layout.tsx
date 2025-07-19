import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
// layout components
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { AuthProvider } from '../contexts/AuthContext'

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Admin',
  icons: {
    icon: '/icon.svg',
  },
}

const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-400"></div>
  </div>
)

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (!children) return <LoadingSpinner />

  return (
    <AuthProvider>
      <div className='h-screen flex'>
        {/* starts:: sidebar in desktop view */}
        <div className='hidden md:flex relative w-1/4 bg-primary-bg p-4 text-primary-text flex-col gap-4'>
          <Link
            href='/admin/dashboard'
            className='text-2xl font-bold text-center hover:text-white transition-all duration-300'
          >
            LOGO
          </Link>
          <div className='flex flex-col gap-2 overflow-hidden'>
            <Sidebar />
          </div>
        </div>
        {/* ends:: sidebar in desktop view */}
        <div className='flex flex-col w-full md:w-3/4'>
          {/* starts:: header in mobile view */}
          <Navbar />
          {/* ends: header in mobile view */}
          {children}
        </div>
      </div>
    </AuthProvider>
  )
}
