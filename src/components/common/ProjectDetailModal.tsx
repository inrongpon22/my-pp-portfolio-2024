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
import { Lens } from "@/components/ui/lens"

const ProjectDetailModal = (props: {
  show: [boolean, Dispatch<SetStateAction<any | null>>]
  project: ProjectProps | null
}) => {
  const { show, project } = props
  const [showModal, setShowModal] = show

  const [fullImageModal, setFullImageModal] = useState<boolean>(false)

  if (!project) return null

  return (
    <>
      <Dialog open={showModal} onOpenChange={(open) => setShowModal(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-12 gap-4">
            <Carousel className="col-span-12 md:col-span-6 bg-gray-200 rounded-lg">
              <CarouselContent>
                {project.image.map((image: string, index: number) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Image
                        src={image}
                        width={500}
                        height={500}
                        alt={project.title}
                        className="w-full h-[300px] md:h-full object-contain md:object-cover rounded-lg"
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
                          <div>
                            <Github /> Github
                          </div>
                        ) : (
                          <div>
                            <Globe /> Visit
                          </div>
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
        <DialogContent className="sm:max-w-[calc(100%-10rem)] sm:max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
          </DialogHeader>
          <Carousel className="col-span-12 md:col-span-6">
            <CarouselContent>
              {project.image.map((image: string, index: number) => (
                <CarouselItem key={index} className="bg-gray-200 rounded-lg">
                  <div className="p-1 flex items-center justify-center">
                    {/* <Lens zoomFactor={1.5}> */}
                    <div className="relative w-full h-[600px] sm:h-[800px]">
                      <Image
                        src={image}
                        alt={project.title}
                        fill={true}
                        objectFit="contain"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={image}
                        className="rounded-lg"
                      />
                    </div>
                    {/* </Lens> */}
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
