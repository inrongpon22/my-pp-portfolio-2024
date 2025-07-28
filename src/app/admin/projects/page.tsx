"use client"
import LoadingState from "@/components/common/LoadingState"
import { Modal } from "@/components/common/Modal"
import ProjectForm from "@/components/modals/ProjectForm"
import { useProjects } from "@/hooks/useProjects"
import { projectServices } from "@/services/ProjectServices"
import { Project } from "@/types/project"
import { Trash2 } from "lucide-react"
import React, { useState } from "react"
import toast from "react-hot-toast"

const Projects = () => {
  const { projects, error, isLoading, refetch } = useProjects()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleClickEdit = (project: Project) => {
    setSelectedProject(project)
    const modal = document.getElementById("project_form") as HTMLDialogElement
    modal?.showModal()
  }

  const handleClickDelete = async (project: Project) => {
    console.log(project)
    const confirm = window.confirm(
      "Are you sure you want to delete this project?"
    )
    if (confirm) {
      try {
        const response = await projectServices.deleteProject(project.id)
        refetch()
      } catch (error) {
        console.log("delete project error:", error)
        toast.error("Failed to delete project")
      }
    }
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
    ;(
      document.getElementById("project_form") as HTMLDialogElement
    )?.close()
  }

  if (isLoading) return <LoadingState />
  if (error) return <div>Error: {error}</div>

  return (
    <div className="w-full h-full">
      <div className="flex justify-end">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() =>
            (
              document.getElementById("project_form") as HTMLDialogElement
            )?.showModal()
          }
        >
          Create new project
        </button>
      </div>
      <h1 className="text-2xl font-bold">All Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.length > 0 ? (
          projects.map((project: Project) => (
            <div key={project.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500">{project.description}</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleClickEdit(project)}
                  className="btn btn-primary"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleClickDelete(project)}
                  className="btn btn-error"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-2xl font-bold opacity-50 py-24">
            No projects found
          </div>
        )}
      </div>

      <Modal
        id="project_form"
        className="modal-bottom sm:modal-middle"
      >
        <ProjectForm
          project={selectedProject}
          onRequestSuccess={() => {
            refetch()
            handleCloseModal()
          }}
          onClose={handleCloseModal}
        />
      </Modal>
    </div>
  )
}

export default Projects
