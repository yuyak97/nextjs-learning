import { AuthModalType } from '@/enums/auth.enum'
import { signIn } from 'next-auth/react'
import React from 'react'

type Props = {
  type:  AuthModalType
}

const AuthModalContainer: React.FC<Props> = ({type}) => {
  const handleGoogleSignIn = () => {
    signIn('google');
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>
        Sign in with Google
      </button>
    </div>

  )
}

export default AuthModalContainer