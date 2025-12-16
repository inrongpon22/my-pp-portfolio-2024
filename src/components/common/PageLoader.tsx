"use client"

import { useEffect, useState } from "react"

export default function PageLoader() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check if loader has already been shown in this session
    const hasSeenLoader = sessionStorage.getItem("pageLoaderShown")
    
    if (hasSeenLoader) {
      // Already shown, don't show again
      return
    }

    // Mark as shown and start loading
    sessionStorage.setItem("pageLoaderShown", "true")
    setIsLoading(true)

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Wait a bit before hiding the loader
          setTimeout(() => {
            setIsLoading(false)
          }, 300)
          return 100
        }
        // Accelerate progress (starts fast, slows down near the end)
        const increment = prev < 50 ? 10 : prev < 80 ? 5 : 2
        return Math.min(prev + increment, 100)
      })
    }, 50) // Update every 50ms

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-300">
      <div className="w-full max-w-md px-4 sm:px-8">
        {/* Progress Bar */}
        <div className="w-full h-1.5 sm:h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-3 sm:mb-4">
          <div
            className="h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-75 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Percentage Text */}
        <div className="text-center">
          <span className="text-lg sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  )
}

