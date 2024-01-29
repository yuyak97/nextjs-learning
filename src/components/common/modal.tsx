"use client"

import React, { ReactNode } from "react"
import { css } from "@emotion/react"

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

const backdropStyle = css({
  position: "fixed",
  inset: 0,
  display: "flex",
  height: "100%",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  overflowY: "auto",
  backgroundColor: "rgba(75, 85, 99, 0.5)", // bg-gray-600 with bg-opacity-50
  zIndex: 1000, // High z-index to ensure it's on top
  "@media (prefers-color-scheme: dark)": {
    backgroundColor: "rgba(31, 41, 55, 0.7)", // dark:bg-gray-800 with dark:bg-opacity-70
  },
})

const modalStyle = css({
  borderRadius: "0.375rem", // rounded
  backgroundColor: "white",
  padding: "1rem", // p-4
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1)", // shadow-lg
  "@media (prefers-color-scheme: dark)": {
    backgroundColor: "var(--gray-700)", // dark:bg-gray-700
  },
  "@media (min-width: 768px)": {
    padding: "2rem", // md:p-8
  },
})

const titleStyle = css({
  marginBottom: "1rem", // mb-4
  fontSize: "1.125rem", // text-lg
  fontWeight: "600", // font-semibold
  "@media (prefers-color-scheme: dark)": {
    color: "var(--gray-300)", // dark:text-gray-300
  },
})

const closeButtonStyle = css({
  marginTop: "1rem", // mt-4
  borderRadius: "0.375rem", // rounded
  backgroundColor: "var(--blue-500)",
  padding: "0.5rem 1rem", // px-4 py-2
  fontWeight: "bold", // font-bold
  color: "white",
  "&:hover": {
    backgroundColor: "var(--blue-700)", // hover:bg-blue-700
    "@media (prefers-color-scheme: dark)": {
      backgroundColor: "var(--blue-800)", // dark:hover:bg-blue-800
    },
  },
})

const Modal: React.FC<Props> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) {
    return null
  }

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.currentTarget === event.target) {
      onClose()
    }
  }

  return (
    <div css={backdropStyle} onClick={handleBackdropClick}>
      <div css={modalStyle}>
        <h2 css={titleStyle}>{title}</h2>
        {children}
        <button onClick={onClose} css={closeButtonStyle}>
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
