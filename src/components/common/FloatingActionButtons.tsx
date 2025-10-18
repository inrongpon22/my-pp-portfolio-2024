"use client"

import { Moon, Plus, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import React from "react"

const FloatingActionButtons = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="fab">
      {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
      <div
        tabIndex={0}
        role="button"
        className="btn btn-lg btn-circle bg-orange-400"
      >
        <Plus />
      </div>

      {/* buttons that show up when FAB is open */}
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="btn btn-lg btn-circle bg-gray-100 dark:bg-gray-800"
      >
        {theme === "dark" ? <Sun /> : <Moon  />}
      </button>
    </div>
  )
}

export default FloatingActionButtons
