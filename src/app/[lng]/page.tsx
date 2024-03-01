"use client"

import Link from "next/link"
import { fallbackLng, languages } from "../i18n/settings"
import { DefaultPageProps } from "@/types/page-props.types"
import { useTranslation } from "../i18n/client"
import Hero from "@/components/home/hero"
import Image from "next/image"
import ArcadeImage from "../../../public/images/arcade.png"

const Home: React.FC<DefaultPageProps> = ({ params: { lng } }) => {
  if (languages.indexOf(lng) < 0) {
    lng = fallbackLng
  }
  const { t } = useTranslation(lng, "top-page")

  return (
    <>
      <Hero lng={lng} />
      <section className="container mx-auto max-w-2xl px-4 py-8">
        <div className="grid items-center gap-4 md:grid-cols-2">
          <div>
            <p className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 md:text-xl">
              {t("TopPage.description")}
            </p>
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-lg">
            <Image
              alt="arcade"
              src={ArcadeImage}
              placeholder="blur"
              className="rounded-lg object-cover"
              width={200}
              height={120}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
