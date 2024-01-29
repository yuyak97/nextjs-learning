import { pressStartFont } from "@/utils/font"
import Image from "next/image"
import React from "react"

const Hero = () => {
  return (
    <div className="relative h-[400px]">
      <Image
        alt="hero"
        src="/images/DALL·E_arcade_game.jpeg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-gray-400 bg-opacity-70 text-center dark:bg-gray-900 dark:bg-opacity-70">
        <h1
          className={`${pressStartFont.className} text-4xl font-bold text-black dark:text-white`}
        >
          {`Let's share your gaming record`}
        </h1>
      </div>
    </div>
  )
}

export default Hero
