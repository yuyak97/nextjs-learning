"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"
import { ThemeMode } from "@/enums/theme.enum"
import ClientOnly from "./client-only"

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
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
    <ClientOnly>
      <label className="flex cursor-pointer items-center">
        {/* Toggle */}
        <div className="relative">
          {/* Input */}
          <input
            type="checkbox"
            checked={theme === ThemeMode.DARK}
            onChange={toggleTheme}
            className="sr-only"
          />
          {/* Line */}
          <div
            className={`block h-8 w-14 rounded-full transition ${theme === ThemeMode.DARK ? "bg-purple-600" : "bg-sky-400"}`}
          ></div>
          {/* Dot with Icon */}
          <div
            className={`dot absolute left-1 top-1 flex h-6 w-6 transform items-center justify-center rounded-full transition ${theme === ThemeMode.DARK ? "translate-x-full bg-blue-500" : "bg-yellow-400"}`}
          >
            {theme === ThemeMode.DARK ? (
              <svg
                className="h-4 w-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15a5 5 0 100-10 5 5 0 000 10zM10 1.5a1 1 0 011-1V.5a1 1 0 112 0v1a1 1 0 011 1h1a1 1 0 110 2h-1a1 1 0 01-1 1 1 1 0 01-1 1V7a1 1 0 11-2 0V6a1 1 0 01-1-1 1 1 0 01-1-1H3a1 1 0 110-2h1a1 1 0 011-1z" />
              </svg>
            ) : (
              <svg
                className="h-4 w-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15a5 5 0 100-10 5 5 0 000 10z" />
              </svg>
            )}
          </div>
        </div>
        {/* Label */}
        <div className="ml-3 font-medium text-gray-700">
          {theme === ThemeMode.DARK ? "Night Mode" : "Day Mode"}
        </div>
      </label>
    </ClientOnly>
  )
}
