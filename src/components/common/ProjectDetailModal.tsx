import React, { Dispatch, SetStateAction } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ProjectProps } from "../home/getProjects"

const ProjectDetailModal = (props: {
  show: [boolean, Dispatch<SetStateAction<any | null>>]
  project: any
}) => {
  const { show } = props
  const [showModal, setShowModal] = show

  return (
    <Dialog open={showModal} onOpenChange={(open) => setShowModal(open)}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectDetailModal
