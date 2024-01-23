"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"
import { ThemeMode } from "@/enums/theme.enum"

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? ThemeMode.DARK
      : ThemeMode.LIGHT

    if (theme === ThemeMode.SYSTEM) {
      setTheme(systemTheme)
    }
  }, [theme, setTheme])

  const toggleTheme = () => {
    const newTheme = theme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK
    setTheme(newTheme)
  }

  return (
    <label className="flex items-center cursor-pointer">
      {/* Toggle */}
      <div className="relative">
        {/* Input */}
        <input type="checkbox" checked={theme === ThemeMode.DARK} onChange={toggleTheme} className="sr-only" />
        {/* Line */}
        <div className={`block w-14 h-8 rounded-full transition ${theme === ThemeMode.DARK ? 'bg-purple-600' : 'bg-sky-400'}`}></div>
        {/* Dot */}
        <div className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition transform ${theme === ThemeMode.DARK ? 'translate-x-full bg-blue-500' : 'bg-yellow-400'}`}></div>
      </div>
      {/* Label */}
      <div className="ml-3 text-gray-700 font-medium">
        {theme === ThemeMode.DARK ? 'Night Mode' : 'Day Mode'}
      </div>
    </label>
  )
}
