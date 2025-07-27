import { projectServices } from "@/services/ProjectServices"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import React from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"

const projectSchema = z.object({
  title: z.string().min(4, { message: "Title must be at least 4 characters" }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters",
  }),
})

const ProjectForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: zodResolver(projectSchema),
  })

  const onSubmit = async (data: any) => {
    console.log(data)
    try {
      const response = await projectServices.createProject(data)
      console.log(response)
      toast.success("Project created successfully")
    } catch (error) {
      console.log("create new project error:", error)
      toast.error("Failed to create new project")
    } finally {
      reset()
      ;(
        document.getElementById("project_form") as HTMLDialogElement
      )?.close()
    }
  }

  return (
    <div className="text-white">
      <h2 className="text-lg font-bold">Create new project</h2>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control flex flex-col gap-2">
          <label className="label">
            <span className="label-text">Project title</span>
          </label>
          <input
            type="text"
            placeholder="Project title"
            className={clsx("input input-bordered w-full", {
              "input-error": errors.title,
            })}
            {...register("title")}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>
        <div className="form-control flex flex-col gap-2">
          <label className="label">
            <span className="label-text">Project description</span>
          </label>
          <textarea
            placeholder="Project description"
            className={clsx("textarea textarea-bordered w-full", {
              "textarea-error": errors.description,
            })}
            {...register("description")}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="btn btn-soft btn-outline"
            onClick={() => {
              ;(
                document.getElementById("project_form") as HTMLDialogElement
              )?.close()
            }}
          >
            Cancel
          </button>
          <button className="btn btn-primary" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProjectForm
