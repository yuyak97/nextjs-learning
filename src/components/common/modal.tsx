"use client"

import React, { ReactNode } from "react"
import Button from "./button"
import { ButtonColor } from "@/enums/style.enum"

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

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
    <div
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-70"
      onClick={handleBackdropClick}
    >
      <div className="w-11/12 max-w-2xl rounded bg-white p-4 shadow-lg dark:bg-gray-700 md:w-1/2 md:p-8">
        <h2 className="mb-4 text-lg font-semibold dark:text-gray-300">
          {title}
        </h2>
        {children}
      </div>
    </div>
  )
}

export default Modal
