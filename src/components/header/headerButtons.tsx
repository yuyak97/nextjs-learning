"use client"

import Button from "@/components/common/button"
import { useState } from "react"
import Modal from "../common/modal"
import { AuthModalType } from "@/enums/auth.enum"
import AuthModalContainer from "../common/authModalContainer"
import { useTranslation } from "@/app/i18n/client"
import { css } from "@emotion/react"

type Props = {
  lng: string
}

const signInButtonStyle = css({
  backgroundColor: "#e53e3e", // bg-red-600
  "&:hover": {
    backgroundColor: "#c53030", // hover:bg-red-800
  },
  color: "white",
  fontWeight: "bold",
  padding: "0.5rem 1rem", // py-2 px-4
  borderRadius: "0.375rem", // rounded
  boxShadow:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // shadow-lg
  transition: "all 0.3s ease-in-out", // transition duration-300 ease-in-out
})

const signUpButtonStyle = css({
  backgroundColor: "#38a169", // bg-green-500
  "&:hover": {
    backgroundColor: "#2f855a", // hover:bg-green-700
  },
  color: "white",
  borderRadius: "0.375rem", // rounded-r
})

const HeaderButtons: React.FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "common")
  const [activeAuthModal, setActiveAuthModal] = useState<AuthModalType | null>(
    null,
  )

  const openModal = (modalType: AuthModalType) => {
    setActiveAuthModal(modalType)
  }

  const closeModal = () => {
    setActiveAuthModal(null)
  }

  return (
    <div>
      <Button
        text="Sign In"
        styles={signInButtonStyle}
        onClick={() => openModal(AuthModalType.SIGN_IN)}
      />
      <Button
        text="Sign Up"
        styles={signUpButtonStyle}
        onClick={() => openModal(AuthModalType.SIGN_UP)}
      />

      <Modal
        isOpen={activeAuthModal !== null}
        onClose={closeModal}
        title={
          activeAuthModal === AuthModalType.SIGN_IN
            ? t("Common.welcome-back")
            : t("Common.join-the-community")
        }
      >
        <AuthModalContainer type={activeAuthModal!} />
      </Modal>
    </div>
  )
}

export default HeaderButtons
