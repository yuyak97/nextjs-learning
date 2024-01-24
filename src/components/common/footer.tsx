"use client"

import { useSession } from "next-auth/react"
import { ThemeSwitch } from "./themeSwitch"
import LanguageSelector from "./languageSelector"

type Props = {
  lng: string
}

export const Footer: React.FC<Props> = ({ lng }) => {
  const { data } = useSession()

  return (
    <footer className="mt-12 rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © {new Date().getFullYear()} Your Brand™. All Rights Reserved.
        </span>
        <LanguageSelector lng={lng} />
      </div>
      <ThemeSwitch />
    </footer>
  )
}
