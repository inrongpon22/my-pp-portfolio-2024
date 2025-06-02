'use client'
import useSWR from 'swr'
import fetcher from '@/app/utils/fetcher'

export const useInstruments = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/instruments', fetcher)
  return { data, error, isLoading, mutate }
}