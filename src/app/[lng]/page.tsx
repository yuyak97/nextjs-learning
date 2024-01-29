"use client"

import Link from "next/link"
import { fallbackLng, languages } from "../i18n/settings"
import { DefaultPageProps } from "@/types/page-props.types"
import { useTranslation } from "../i18n/client"
import Hero from "@/components/home/hero"

const Home: React.FC<DefaultPageProps> = ({ params: { lng } }) => {
  if (languages.indexOf(lng) < 0) {
    lng = fallbackLng
  }
  const { t } = useTranslation(lng, "common")

  return (
    <>
      <Hero />
      <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
    </>
  )
}

export default Home
