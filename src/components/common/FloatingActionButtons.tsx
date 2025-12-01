"use client"

import { Moon, Plus, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import React from "react"

const FloatingActionButtons = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="fab">
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="btn btn-lg btn-circle bg-foreground"
      >
        {theme === "dark" ? <Sun className="text-background" /> : <Moon className="text-background" />}
      </button>
    </div>
  )
}

export default FloatingActionButtons
