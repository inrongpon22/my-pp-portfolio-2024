'use client'
import React from 'react'
import { useInstruments } from '@/api/instruments/hooks'

const Dashboard = () => {
  const { data, error, isLoading, mutate } = useInstruments()

  console.log(data)

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
