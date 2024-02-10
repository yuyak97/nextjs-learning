import { ButtonColor } from "@/enums/style.enum"
import React from "react"

type Props = {
  styles?: string
  color: ButtonColor
  isBold?: boolean
  onClick: () => void
  children: React.ReactNode
}

const Button: React.FC<Props> = ({
  children,
  styles,
  color,
  isBold = true,
  onClick,
}) => {
  return (
    <div
      className={`z-10 m-1 cursor-pointer rounded px-4 py-1 ${isBold ? "font-bold" : ""} text-black ${color} ${styles || ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default React.memo(Button)
