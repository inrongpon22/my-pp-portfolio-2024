import { useEffect, useRef, useState } from "react"

export default function useIntersectionObserver(options: any) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    // Check for browser support
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true) // Default to visible if not supported
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      // Set to true only once the element is intersecting
      if (entry.isIntersecting) {
        setIsVisible(true)
        // Stop observing once it has appeared (for a one-time animation)
        observer.unobserve(entry.target)
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    // Cleanup function
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return [ref, isVisible]
}
