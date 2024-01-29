"use client"

import React from "react"
import { SerializedStyles, css } from "@emotion/react"

type Props = {
  text: string
  styles: SerializedStyles
  onClick: () => void
}

const baseButtonStyle = css({
  margin: "0.25rem", // equivalent to m-1
  borderRadius: "0.375rem", // equivalent to rounded
  padding: "0.5rem 1rem", // equivalent to px-4 py-2
  fontWeight: "bold", // equivalent to font-bold
})

const Button: React.FC<Props> = ({ text, styles, onClick }) => {
  return (
    <button
      css={[baseButtonStyle, styles]} // Combine base style with additional styles
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
