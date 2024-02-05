"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import Heading from "../common/heading"
import LoadingDots from "@/components/common/loadingDots"
import { HeadingStyle } from "@/enums/theme.enum"
import { useTranslation } from "@/app/i18n/client"
import { useAppDispatch } from "@/store/app/hooks"
import { updateMyselfThunk } from "@/store/slices/myself.slice"

type Props = {
  name: string
  email: string
  image: string
  username?: string
  id?: string
  lng: string
}

const ProfileInfo: React.FC<Props> = ({
  name,
  email,
  image,
  username,
  id,
  lng,
}) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation(lng, "profile")
  const [editUsername, setEditUsername] = useState(username)

  const handleSave = () => {
    if (!id || editUsername === undefined) {
      return
    }

    dispatch(updateMyselfThunk({ id, body: { username: editUsername } }))
  }

  useEffect(() => {
    setEditUsername(username) // Update editUsername when username prop changes
  }, [username])

  return (
    <div className="w-full">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Image
            src={image}
            alt="profile image"
            width={52}
            height={52}
            className="rounded-full"
          />
        </div>
        <div className="flex-grow">
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-sm text-gray-600">{email}</p>
        </div>
      </div>
      <div className="mt-4">
        <Heading size={HeadingStyle.MD}>username</Heading>
        <p className="text-sm text-gray-600">
          * {t("Profile.name-is-displayed-to-other-member")}
        </p>
        <div className="text-lg">
          {username ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="flex-grow border-b-2 bg-transparent focus:border-blue-500 focus:outline-none dark:border-white"
                value={editUsername || ""}
                onChange={(e) => setEditUsername(e.target.value)}
              />
              <button
                className="rounded px-2 py-1 text-sm font-semibold hover:bg-gray-200 dark:border-white dark:hover:bg-gray-700"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          ) : (
            <LoadingDots />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
