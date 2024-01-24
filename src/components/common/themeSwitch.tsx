import { useEffect } from "react"
import { useTheme } from "next-themes"
import { ThemeMode } from "@/enums/theme.enum"
import ClientOnly from "./clientOnly"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb, faPowerOff } from "@fortawesome/free-solid-svg-icons"

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
      <div className="flex cursor-pointer items-center">
        {/* Invisible Checkbox */}
        <input
          type="checkbox"
          checked={theme === ThemeMode.DARK}
          onChange={toggleTheme}
          className="sr-only"
        />
        {/* Toggle */}
        <div className="relative" onClick={toggleTheme}>
          {/* Line */}
          <div
            className={`block h-8 w-14 rounded-full transition ${theme === ThemeMode.DARK ? "bg-gradient-to-r from-indigo-500 to-purple-600" : "bg-gradient-to-r from-yellow-400 to-orange-500"}`}
          ></div>
          {/* Dot with Icon */}
          <div
            className={`dot absolute left-1 top-1 flex h-6 w-6 transform items-center justify-center rounded-full shadow-md transition-all duration-300 ease-in-out ${theme === ThemeMode.DARK ? "translate-x-full bg-gray-800" : "bg-white"}`}
          >
            {theme === ThemeMode.DARK ? (
              <FontAwesomeIcon
                icon={faPowerOff}
                className="h-4 w-4 text-yellow-300"
              />
            ) : (
              <FontAwesomeIcon
                icon={faLightbulb}
                className="h-4 w-4 text-gray-800"
              />
            )}
          </div>
        </div>
        {/* Label */}
        <div className="ml-3 font-medium text-gray-500">
          {theme === ThemeMode.DARK ? "DARK Mode" : "LIGHT Mode"}
        </div>
      </div>
    </ClientOnly>
  )
}
