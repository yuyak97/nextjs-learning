"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { ThemeMode } from "@/enums/theme.enum"

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? ThemeMode.DARK
      : ThemeMode.LIGHT

    if (theme === ThemeMode.SYSTEM) {
      setTheme(systemTheme)
    }
  }, [setTheme])

  if (!mounted) {
    return null
  }

  return (
    <>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="border-2 border-black dark:border-white"
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      The current theme is: {theme}
    </>
  )
}
