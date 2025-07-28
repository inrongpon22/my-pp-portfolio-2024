import { projectServices } from '@/services/ProjectServices'
import { Project } from '@/types/project'
import { useEffect, useState } from 'react'

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchProjects = async () => {
    setIsLoading(true)
    try {
      const response = await projectServices.getAllProjects()
      setProjects(response)
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
        )
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return { projects, error, isLoading, refetch: fetchProjects }
}
