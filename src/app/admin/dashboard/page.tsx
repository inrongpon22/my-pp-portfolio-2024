'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // This code will only run in the browser
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/auth/login')
      }
    }
  }, [router]);

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <h1 className='text-2xl font-bold text-gray-300'>Dashboard</h1>
    </div>
  )
}

export default Dashboard
