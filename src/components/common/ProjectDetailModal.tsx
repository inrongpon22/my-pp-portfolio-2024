import React, { Dispatch, SetStateAction, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ProjectProps } from "@/components/home/getProjects"
import { Github, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const ProjectDetailModal = (props: {
  show: [boolean, Dispatch<SetStateAction<any | null>>]
  project: ProjectProps | null
}) => {
  const { show, project } = props
  const [showModal, setShowModal] = show

  const [fullImageModal, setFullImageModal] = useState(false)

  if (!project) return null

  return (
    <>
      <Dialog open={showModal} onOpenChange={(open) => setShowModal(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-12 gap-4">
            <Carousel className="col-span-12 md:col-span-6">
              <CarouselContent>
                {project.image.map((image: string, index: number) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Image
                        src={image}
                        alt={project.title}
                        className="w-full h-[300px] md:h-full object-contain md:object-cover"
                        onClick={() => setFullImageModal(true)}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="col-span-12 md:col-span-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.responsibilities.map((responsibility) => (
                    <span
                      key={responsibility}
                      className="text-sky-500 dark:text-sky-400 border border-sky-300 dark:border-sky-700 rounded-full px-2 py-1 text-sm"
                    >
                      {responsibility}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{project.description}</p>
                {project.source.length > 0 &&
                  project.source.map((url) => {
                    const isGithub = url.includes("github")
                    return (
                      <Button
                        key={url}
                        type="button"
                        variant="outline"
                        onClick={() => window.open(url, "_blank")}
                        className={cn("w-full")}
                      >
                        {isGithub ? (
                          <>
                            <Github /> Github
                          </>
                        ) : (
                          <>
                            <Globe /> Visit
                          </>
                        )}
                      </Button>
                    )
                  })}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog
        open={fullImageModal}
        onOpenChange={() => setFullImageModal(false)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
          </DialogHeader>
          <Carousel className="col-span-12 md:col-span-6">
            <CarouselContent>
              {project.image.map((image: string, index: number) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Image
                      src={image}
                      alt={project.title}
                      className="w-full h-full md:h-full object-contain md:object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ProjectDetailModal
