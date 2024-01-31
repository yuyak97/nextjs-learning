"use client"

import { CookieConsentType } from "@/enums/common.enum"
import useCookieConsent from "@/hooks/useCookieConsent"
import React from "react"

const CookieConsentModal: React.FC = () => {
  const { showModal, handleCookieConsent } = useCookieConsent()

  return (
    showModal && (
      <div className="fixed bottom-0 left-0 right-0 m-1.5 rounded bg-gray-200 p-4 shadow-md dark:bg-gray-700">
        <div className="mb-4 text-center">
          <p>
            We use cookies to improve your experience on our site. By
            continuing, you agree to our use of cookies.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleCookieConsent(CookieConsentType.NECESSARY)}
            className="rounded bg-gray-300 px-4 py-2 font-bold text-black hover:bg-gray-400"
          >
            Accept Only Necessary
          </button>
          <button
            onClick={() => handleCookieConsent(CookieConsentType.ALL)}
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Accept All
          </button>
        </div>
      </div>
    )
  )
}

export default CookieConsentModal
