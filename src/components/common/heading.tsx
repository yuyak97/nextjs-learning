"use client"

import { HeadingStyle } from "@/enums/theme.enum"
import React, { ReactNode } from "react"

type HeadingProps = {
  size?: HeadingStyle
  children: ReactNode
}

const Heading: React.FC<HeadingProps> = ({ size = "md", children }) => {
  const sizeClass = {
    [HeadingStyle.SM]: "text-sm md:text-lg",
    [HeadingStyle.MD]: "text-lg md:text-xl",
    [HeadingStyle.LG]: "text-xl md:text-2xl",
    [HeadingStyle.XL]: "text-2xl md:text-4xl",
  }[size]

  return <p className={`${sizeClass} font-bold`}>{children}</p>
}

export default Heading
