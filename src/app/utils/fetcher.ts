import axios, { AxiosInstance } from 'axios'

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())

let _apiClient: AxiosInstance | null = null

export const getApiClient = (): AxiosInstance => {
  if (!_apiClient) {
    _apiClient = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Add request interceptor to dynamically add auth token
    _apiClient.interceptors.request.use(
      (config) => {
        // Only access localStorage on client side
        const token = localStorage.getItem('token')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }

        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  return _apiClient
}

// For backward compatibility
export const apiClient = new Proxy({} as AxiosInstance, {
  get(target, prop) {
    const client = getApiClient()
    const value = client[prop as keyof AxiosInstance]
    return typeof value === 'function' ? value.bind(client) : value
  },
})
