import React from "react"
import clsx from "clsx"
import { X } from "lucide-react"

const Modal = React.forwardRef<
  HTMLDialogElement,
  React.HTMLAttributes<HTMLDialogElement> & {
    id: string
    onClose?: () => void
  }
>(({ children, id, onClose, ...props }, ref) => {
  const { className, ...rest } = props
  const [isVisible, setIsVisible] = React.useState(false)

  return (
    <div
      id={id}
      className={clsx("inset-0 fixed z-50 bg-background", className)}
    >
      {/* <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${isVisible ? 'opacity-50' : 'opacity-0'}`}
        onClick={onClose}
      /> */}
      <X className="absolute top-4 right-4 cursor-pointer" onClick={onClose} />
      <div className="flex items-center justify-center">
        {children}
      </div>
    </div>
  )
})

Modal.displayName = "Modal"

export { Modal }
