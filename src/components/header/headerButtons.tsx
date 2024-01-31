import Button from "@/components/common/button"
import { useState } from "react"
import Modal from "../common/modal"
import { AuthModalType, AuthStatus } from "@/enums/auth.enum"
import AuthModalContainer from "../common/authModalContainer"
import { signOut, useSession } from "next-auth/react"
import { useTranslation } from "@/app/i18n/client"
import Image from "next/image"

type Props = {
  lng: string
}

const HeaderButtons: React.FC<Props> = ({ lng }) => {
  const { data: session, status } = useSession()
  const { t } = useTranslation(lng, "common")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [activeAuthModal, setActiveAuthModal] = useState<AuthModalType | null>(
    null,
  )

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const openModal = (modalType: AuthModalType) => {
    setActiveAuthModal(modalType)
  }

  const closeModal = () => {
    setActiveAuthModal(null)
  }

  return (
    <>
      {status === AuthStatus.UNAUTHENTICATED ? (
        <div>
          <Button
            text="Sign In"
            styles="bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-3"
            onClick={() => openModal(AuthModalType.SIGN_IN)}
          />
          <Button
            text="Sign Up"
            styles="bg-green-500 hover:bg-red-800 text-white font-bold py-1 px-3"
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
      ) : (
        <div>
          {session?.user && (
            <div onClick={() => toggleDropdown()}>
              <Image
                src={session.user.image!}
                alt="profile image"
                width={32}
                height={32}
                className="cursor-pointer rounded-2xl"
              />
            </div>
          )}

          {isDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => toggleDropdown()}
              ></div>
              <nav className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-white px-4 py-2 shadow-lg dark:bg-gray-800">
                <div className="py-2">Profile</div>
                <div className="py-2">Settings</div>
                <div className="cursor-pointer py-2" onClick={() => signOut()}>
                  Sign out
                </div>
              </nav>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default HeaderButtons
