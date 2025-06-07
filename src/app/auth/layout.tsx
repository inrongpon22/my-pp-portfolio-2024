import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'personal admin login page',
}

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='h-screen flex flex-col justify-center'>
      <div>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
