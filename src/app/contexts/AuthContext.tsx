'use client'

import { useAuth } from '@/services/AuthHooks'
import { useRouter } from 'next/navigation'
import { createContext, useEffect } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const { data, error, isLoading, mutate } = useAuth()

  useEffect(() => {
    if (error) {
      console.log('[error]', error)
      localStorage.removeItem('token')
      router.push('/auth/login')
    }
  }, [error, router])

  return (
    <AuthContext.Provider value={{ data, error, isLoading, mutate }}>
      {children}
    </AuthContext.Provider>
  )
}
