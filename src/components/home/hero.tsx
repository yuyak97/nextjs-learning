import Image from "next/image"
import React from "react"

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/images/DALL·E_arcade_game.png"
        alt="hero"
        fill={true}
        style={{ objectFit: "cover" }}
        className="object-cover"
        quality={100}
      />
    </div>
  )
}

export default Hero
