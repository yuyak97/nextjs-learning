"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"
import { ThemeMode } from "@/enums/theme.enum"
import ClientOnly from "./clientOnly"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb, faPowerOff } from "@fortawesome/free-solid-svg-icons"
import { css } from "@emotion/react"

const containerStyle = css({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
})

const lineStyle = (theme: string | undefined) =>
  css({
    height: "2rem", // h-8
    width: "3.5rem", // w-14
    borderRadius: "9999px", // rounded-full
    transition: "background-color 0.2s",
    background:
      theme === ThemeMode.DARK
        ? "linear-gradient(to right, #667eea, #764ba2)" // bg-gradient-to-r from-indigo-500 to-purple-600
        : "linear-gradient(to right, #fde68a, #fb923c)", // bg-gradient-to-r from-yellow-400 to-orange-500
  })

const dotStyle = (theme: string | undefined) =>
  css({
    position: "absolute",
    left: "0.25rem", // left-1
    top: "0.25rem", // top-1
    height: "1.5rem", // h-6
    width: "1.5rem", // w-6
    transform: "translateX(0)",
    display: "flex", // Flex container
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontally
    borderRadius: "9999px", // rounded-full
    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.10)", // shadow-md
    transition: "all 0.3s ease-in-out",
    backgroundColor: theme === ThemeMode.DARK ? "#1f2937" : "white", // bg-gray-800 / bg-white
    ...(theme === ThemeMode.DARK && { transform: "translateX(100%)" }),
  })

const iconStyle = css({
  height: "1rem", // h-4
  width: "1rem", // w-4
})

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
      <div css={containerStyle}>
        <input
          type="checkbox"
          checked={theme === ThemeMode.DARK}
          onChange={toggleTheme}
          className="sr-only"
        />
        <div className="relative" onClick={toggleTheme}>
          <div css={lineStyle(theme)}></div>
          <div css={dotStyle(theme)}>
            {theme === ThemeMode.DARK ? (
              <FontAwesomeIcon
                icon={faPowerOff}
                css={[iconStyle, { color: "#fde047" }]} // text-yellow-300
              />
            ) : (
              <FontAwesomeIcon
                icon={faLightbulb}
                css={[iconStyle, { color: "#1f2937" }]} // text-gray-800
              />
            )}
          </div>
        </div>
      </div>
    </ClientOnly>
  )
}
