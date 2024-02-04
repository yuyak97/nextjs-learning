"use client"

import { PropsWithChildren, useEffect } from "react"
import { redirect } from "next/navigation"
import { Session } from "next-auth"

type Props = PropsWithChildren & { session: Session | null }

const AuthGuard: React.FC<Props> = ({ children, session }) => {
  if (!session) {
    // Redirect to the login page if the user is not authenticated
    redirect("/")
    return null // Render nothing while redirecting
  }

  return children
}

export default AuthGuard
