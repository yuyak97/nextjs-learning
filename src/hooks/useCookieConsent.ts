import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { CookieConsentType } from "@/enums/common.enum"

const useCookieConsent = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const hasConsent = Cookies.get("cookieConsent")
    if (!hasConsent) {
      setShowModal(true)
    }
  }, [])

  const handleCookieConsent = (type: CookieConsentType) => {
    Cookies.set("cookieConsent", String(type), { expires: 365 })
    setShowModal(false)
  }

  return { showModal, handleCookieConsent }
}

export default useCookieConsent
