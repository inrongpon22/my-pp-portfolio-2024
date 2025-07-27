import React from "react"
import clsx from "clsx"

const Modal = React.forwardRef<
  HTMLDialogElement,
  React.HTMLAttributes<HTMLDialogElement> & {
    id: string
  }
>(({ children, id, ...props }, ref) => {
  const { className, ...rest } = props
  return (
    <dialog
      id={id}
      ref={ref}
      className={clsx("modal modal-bottom sm:modal-middle", className)}
      {...rest}
    >
      <div className="modal-box">
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
})

Modal.displayName = "Modal"

export { Modal }
