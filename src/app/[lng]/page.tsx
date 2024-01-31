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
  const { t } = useTranslation(lng, "common")

  return (
    <>
      <Hero lng={lng} />
      <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
      <Image
        alt="hero"
        src={ArcadeImage}
        placeholder="blur"
        width={120}
        height={120}
      />
      <Image
        alt="hero"
        src={ArcadeImage}
        placeholder="blur"
        width={120}
        height={120}
      />
      <Image
        alt="hero"
        src={ArcadeImage}
        placeholder="blur"
        width={120}
        height={120}
      />
      <Image
        alt="hero"
        src={ArcadeImage}
        placeholder="blur"
        width={120}
        height={120}
      />
      <Image
        alt="hero"
        src={ArcadeImage}
        placeholder="blur"
        width={120}
        height={120}
      />
      <Image
        alt="hero"
        src={ArcadeImage}
        placeholder="blur"
        width={120}
        height={120}
      />
    </>
  )
}

export default Home
