import React from 'react'
import clsx from 'clsx'

const Modal = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  const { className, ...rest } = props
  return (
    <div
      ref={ref}
      {...rest}
      className={clsx('fixed top-0 w-full h-full bg-black/50 z-50', className)}
    >
      {children}
    </div>
  )
})

Modal.displayName = 'Modal'

export { Modal }
