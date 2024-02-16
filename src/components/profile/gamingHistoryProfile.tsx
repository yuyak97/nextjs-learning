"use client"

import React, { useEffect, useState } from "react"
import Heading from "../common/heading"
import { HeadingStyle } from "@/enums/theme.enum"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import AddGameModal from "./addGameModal"
import { useAppDispatch, useAppSelector } from "@/store/app/hooks"
import { getMyselfGamingHistory } from "@/store/slices/myself.slice"
import GamingHistoryTimeLine from "./gamingHistoryTimeLine"

const GamingHistoryProfile = () => {
  const dispatch = useAppDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { gamingHistories } = useAppSelector((state) => state.myself)

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    dispatch(getMyselfGamingHistory())
  }, [])

  return (
    <>
      <div className="mt-10 flex w-full items-center justify-between">
        <Heading size={HeadingStyle.LG}>Your Gaming History</Heading>
        <div onClick={() => setIsModalOpen(true)}>
          <FontAwesomeIcon icon={faPlusCircle} size="xl" />
        </div>

        <AddGameModal
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
        />
      </div>
      <GamingHistoryTimeLine gamingHistories={gamingHistories} />
    </>
  )
}

export default GamingHistoryProfile
