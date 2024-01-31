import { AuthModalType } from "@/enums/auth.enum"
import { signIn } from "next-auth/react"
import Image from "next/image"
import React from "react"

type Props = {
  type: AuthModalType
}

const AuthModalContainer: React.FC<Props> = ({ type }) => {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/second-page" })
  }

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r px-5 py-2.5 text-center text-sm font-medium transition duration-300 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        <div className="pr-1">
          <Image src="google.svg" alt="Google" width={24} height={24} />
        </div>
        <span>
          {type === AuthModalType.SIGN_IN
            ? "Sign in with Google"
            : "Sign up with Google"}
        </span>
      </button>
    </div>
  )
}

export default AuthModalContainer
