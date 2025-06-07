import useSWR from 'swr'
import { adminServices } from './AdminServices'
import axios from 'axios'
import { apiClient } from '@/app/utils/fetcher'

export const useAuth = () => {
  const { data, error, isLoading, mutate } = useSWR(
    '/api/auth/admin',
    (...args: Parameters<typeof apiClient>) =>
      apiClient.get(...args).then((res) => res.data)
  )

  return { data, error, isLoading, mutate }
}
