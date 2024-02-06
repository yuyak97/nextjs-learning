"use client"

import { CookieConsentType } from "@/enums/common.enum"
import useCookieConsent from "@/hooks/useCookieConsent"
import React from "react"
import Button from "./button"
import { ButtonColor } from "@/enums/style.enum"

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
          <Button
            onClick={() => handleCookieConsent(CookieConsentType.NECESSARY)}
            color={ButtonColor.GRAY}
          >
            Accept Only Necessary
          </Button>
          <Button
            onClick={() => handleCookieConsent(CookieConsentType.ALL)}
            color={ButtonColor.BLUE}
          >
            Accept All
          </Button>
        </div>
      </div>
    )
  )
}

export default CookieConsentModal
