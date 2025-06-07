'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  // const token = localStorage?.getItem('token')
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // This code will only run in the browser
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/auth/login')
      }
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
