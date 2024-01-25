"use client"

import React, { ReactNode } from "react"

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
      className="fixed inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="rounded bg-white p-4 shadow-lg md:p-8">
        <h2 className="mb-4 text-lg font-semibold">{title}</h2>
        {children}
        <button
          onClick={onClose}
          className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
