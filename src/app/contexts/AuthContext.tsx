'use client'

import { useAuth } from '@/services/AuthHooks'
import { createContext } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, error, isLoading, mutate } = useAuth()
  return (
    <AuthContext.Provider value={{ data, error, isLoading, mutate }}>
      {children}
    </AuthContext.Provider>
  )
}
