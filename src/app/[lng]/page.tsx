"use client"

import Link from "next/link"
import { fallbackLng, languages } from "../i18n/settings"
import { DefaultPageProps } from "@/types/page-props"
import { useTranslation } from "../i18n/client"

const Page: React.FC<DefaultPageProps> = ({ params: { lng } }) => {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = useTranslation(lng, "common")

  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
    </>
  )
}

export default Page
