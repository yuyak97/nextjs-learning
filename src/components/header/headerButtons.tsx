import Button from "@/components/common/button"
import { useEffect, useState } from "react"
import Modal from "../common/modal"
import { AuthModalType } from "@/enums/auth.enum"
import AuthModalContainer from "../common/authModalContainer"
import { useSession } from "next-auth/react"

const HeaderButtons = () => {
  const [activeAuthModal, setActiveAuthModal] = useState<AuthModalType | null>(
    null,
  )
  const { data: session, status } = useSession()

  const openModal = (modalType: AuthModalType) => {
    setActiveAuthModal(modalType)
  }

  const closeModal = () => {
    setActiveAuthModal(null)
  }

  useEffect(() => {
    console.log({session})
  }, [session])
  

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

      <p>email:{status}</p>

      <Modal
        isOpen={activeAuthModal !== null}
        onClose={closeModal}
        title={activeAuthModal === AuthModalType.SIGN_IN ? "Welcome back" : "Join The community"}
      >
        <AuthModalContainer type={activeAuthModal!} />
      </Modal>
    </div>
  )
}

export default HeaderButtons
