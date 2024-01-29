"use client"

import { pressStartFont } from "@/utils/font"
import Image from "next/image"
import { css } from "@emotion/react"

const heroContainerStyle = css({
  position: "relative",
  height: "400px",
  zIndex: 0,
})

const overlayStyle = css({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(156, 163, 175, 0.7)", // bg-gray-400 with bg-opacity-70
  textAlign: "center",
  zIndex: 1,
  "@global": {
    ".dark &": {
      backgroundColor: "red", // change as needed for dark mode
    },
  },
})

const titleStyle = css({
  fontSize: "2.25rem", // text-4xl
  fontWeight: "bold", // font-bold
  color: "black",
  "@global": {
    ".dark &": {
      color: "white", // change as needed for dark mode
    },
  },
})

const Hero: React.FC = () => {
  return (
    <div css={heroContainerStyle}>
      <Image alt="hero" src="/images/DALL·E_arcade_game.jpeg" fill priority />
      <div css={overlayStyle}>
        <h1 css={titleStyle} className={pressStartFont.className}>
          {`Let's share your gaming record`}
        </h1>
      </div>
    </div>
  )
}

export default Hero
