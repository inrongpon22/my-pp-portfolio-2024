'use client'
import React, { useEffect } from 'react'
import { useInstruments } from '@/api/instruments/hooks'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const token = localStorage.getItem('token')
  const router = useRouter()
  const { data, error, isLoading, mutate } = useInstruments()

  useEffect(() => {
    if (!token) {
      router.push('/auth/login')
    }
  }, [token, router])

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
