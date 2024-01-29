"use client"

import { useSession } from "next-auth/react"
import { ThemeSwitch } from "./themeSwitch"
import LanguageSelector from "./languageSelector"
import { brand } from "@/const/meta"
import { useTranslation } from "@/app/i18n/client"

type Props = {
  lng: string
}

export const Footer: React.FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "common")
  const { data: session, status } = useSession()

  return (
    <footer className="bg-gray-100 p-4 dark:bg-gray-900 md:flex md:flex-col md:items-center md:justify-between md:p-6">
      <div className="mb-4 md:flex md:w-full md:justify-between">
        <div className="my-1">
          <label className="uppercase">{t("Common.language")}</label>
          <div className="mt-1 w-16">
            {/* Adjust width here */}
            <LanguageSelector lng={lng} />
          </div>
          <p>status: {status}</p>
        </div>

        <div className="my-2 md:hidden">
          <ThemeSwitch />
        </div>

        <div className="hidden md:block">
          <ThemeSwitch />
        </div>
      </div>

      <div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {brand.name}
        </span>
      </div>
    </footer>
  )
}
