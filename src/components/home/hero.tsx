import React from "react"
import HeroImage from "../../../public/images/DALL·E_arcade_game.jpeg"
import { useTranslation } from "@/app/i18n/client"
import { pressStartFont } from "@/utils/font.util"
import Image from "next/image"

type Props = {
  lng: string
}

const Hero: React.FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "top-page")

  return (
    <div className="relative h-[400px]">
      <Image
        alt="hero"
        src={HeroImage}
        placeholder="blur"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-80 text-center dark:bg-gray-900 dark:bg-opacity-70">
        <h1
          className={`${pressStartFont.className} max-w-3xl text-4xl font-bold text-black dark:text-white`}
        >
          {t("TopPage.hero-catch-copy")}
        </h1>
      </div>
    </div>
  )
}

export default Hero
