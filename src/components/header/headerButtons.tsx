import Button from "@/components/common/button"
import { useState } from "react"
import Modal from "../common/modal"
import { AuthModalType } from "@/enums/auth.enum"

const HeaderButtons = () => {
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
        styles="bg-blue-500 hover:bg-blue-700 text-white rounded-l"
        onClick={() => openModal(AuthModalType.SIGN_IN)}
      />
      <Button
        text="Sign Up"
        styles="bg-green-500 hover:bg-green-700 text-white rounded-r"
        onClick={() => openModal(AuthModalType.SIGN_UP)}
      />

      <Modal
        isOpen={activeAuthModal !== null}
        onClose={closeModal}
        title="Sign In"
      >
        <p>{activeAuthModal}</p>
      </Modal>
    </div>
  )
}

export default HeaderButtons
