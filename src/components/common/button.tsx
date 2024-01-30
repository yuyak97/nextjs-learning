import React from "react"

type Props = {
  text: string
  styles: string
  onClick: () => void
}

const Button: React.FC<Props> = ({ text, styles, onClick }) => {
  return (
    <button
      className={`m-1 rounded px-4 py-1 font-bold ${styles}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
