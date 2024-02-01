import { ButtonColor } from "@/enums/style.enum"
import React from "react"

type Props = {
  text: string
  styles?: string
  color: ButtonColor
  isBold?: boolean
  onClick: () => void
}

const Button: React.FC<Props> = ({
  text,
  styles,
  color,
  isBold = true,
  onClick,
}) => {
  return (
    <button
      className={`m-1 rounded px-4 py-1 ${isBold ? "font-bold" : ""} text-black ${color} ${styles || ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
