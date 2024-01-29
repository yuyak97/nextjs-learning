import Image from "next/image"
import React from "react"

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/images/DALL·E_arcade_game.jpeg"
        alt="hero"
        fill={true}
        style={{ objectFit: "cover", maxHeight: "400px" }}
        className="object-cover"
        quality={100}
      />
    </div>
  )
}

export default Hero
