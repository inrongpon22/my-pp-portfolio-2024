import { apiClient } from "@/app/utils/fetcher"
import { Project } from "@/types/project"

export const projectServices = {
  async getAllProjects() {
    const response = await apiClient.get("/api/projects")
    return response.data
  },
  async createProject(project: Project) {
    const response = await apiClient.post("/api/projects", project)
    return response.data
  },
  async updateProject(id: string, project: Project) {
    const response = await apiClient.put(`/api/projects/${id}`, project)
    return response.data
  },
  async deleteProject(id: string) {
    const response = await apiClient.delete(`/api/projects/${id}`)
    return response.data
  },
}