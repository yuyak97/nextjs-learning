"use client"

import GamingHistory from "@/components/profile/gamingHistory"
import ProfileInfo from "@/components/profile/profileInfo"
import { useAppDispatch, useAppSelector } from "@/store/app/hooks"
import { getMyselfThunk, updateMyselfThunk } from "@/store/slices/myself.slice"
import { DefaultPageProps } from "@/types/page-props.types"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import React, { useEffect } from "react"

const Profile: React.FC<DefaultPageProps> = ({ params: { lng } }) => {
  const dispatch = useAppDispatch()
  const { myself } = useAppSelector((state) => state.myself)
  const { data: session } = useSession()

  if (!session?.user) {
    redirect("/")
  }

  const user = session.user

  useEffect(() => {
    if (!myself) {
      dispatch(getMyselfThunk(user.email!))
    }
  }, [])

  return (
    <main className="mx-auto w-full max-w-2xl p-4 pt-4">
      <ProfileInfo
        id={myself?.id}
        name={user!.name!}
        email={user!.email!}
        image={user!.image!}
        username={myself?.username}
        lng={lng}
      />
      <GamingHistory />
    </main>
  )
}

export default Profile
