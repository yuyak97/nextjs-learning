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
  const { data } = useSession()
  const { t } = useTranslation(lng, "common")

  return (
    <footer className="mt-12 bg-gray-100 p-4 dark:bg-gray-900 md: md:items-center md:p-6">
      <div className="my-2">
        <ThemeSwitch />
      </div>
      
      <div className="my-3 w-20">
        <label className="uppercase">{t("Common.language")}</label>
        <div className="mt-1">
          <LanguageSelector lng={lng} />
        </div>
      </div>

      <div>
        <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} {brand.name}
        </span>
      </div>
    </footer>
  )
}
