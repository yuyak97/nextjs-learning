import Link from "next/link"
import { useTranslation } from "../i18n"
import { fallbackLng, languages } from "../i18n/settings"
import { DefaultPageProps } from "@/types/page-props"

const Page: React.FC<DefaultPageProps> = async ({ params: { lng } }) => {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
    </>
  )
}

export default Page
