import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Login',
  description: 'personal admin login page',
}

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='h-screen flex flex-col justify-center'>
      {children}
      <Toaster position='top-right' />
    </div>
  )
}

export default AuthLayout
