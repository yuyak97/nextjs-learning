"use client"

import React from "react"
import HeaderButtons from "@/components/header/headerButtons"
import { brand } from "@/const/meta"
import { css } from "@emotion/react"

type Props = {
  lng: string
}

const headerStyle = css({
  top: 0,
  width: "100%",
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 1rem",
  margin: "0.5rem 0",
})

const brandTextStyle = css({
  fontSize: "1.25rem", // equivalent to text-xl in Tailwind
})

const Header: React.FC<Props> = ({ lng }) => {
  return (
    <div css={headerStyle}>
      <p css={brandTextStyle}>{brand.name}</p>
      <HeaderButtons lng={lng} />
    </div>
  )
}

export default Header
