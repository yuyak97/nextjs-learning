import Button from "@/components/common/button"
import { useEffect, useState } from "react"
import Modal from "../common/modal"
import { AuthModalType } from "@/enums/auth.enum"
import AuthModalContainer from "../common/authModalContainer"
import { useSession } from "next-auth/react"
import { useTranslation } from "@/app/i18n/client"

type Props = {
  lng: string
}

const HeaderButtons: React.FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "common")
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
    console.log({ session })
  }, [session])

  return (
    <div>
      <Button
        text="Sign In"
        styles="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-300 ease-in-out font-press-start"
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
