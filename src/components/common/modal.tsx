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
      className="fixed inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-70"
      onClick={handleBackdropClick}
    >
      <div className="w-11/12 max-w-2xl rounded bg-white p-4 shadow-lg dark:bg-gray-700 md:w-1/2 md:p-8">
        <h2 className="mb-4 text-lg font-semibold dark:text-gray-300">
          {title}
        </h2>
        {children}
        <div className="mt-4 flex justify-center">
          <button
            onClick={onClose}
            className="rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-blue-700 dark:hover:bg-blue-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
