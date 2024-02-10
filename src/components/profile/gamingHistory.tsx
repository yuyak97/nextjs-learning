"use client"

import React, { useState } from "react"
import Heading from "../common/heading"
import { HeadingStyle } from "@/enums/theme.enum"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import Modal from "../common/modal"
import YearMonthPicker from "../form/yearMonthPicker"
import { formatDateString } from "@/utils/date.util"
import Button from "../common/button"
import { ButtonColor } from "@/enums/style.enum"
import { useForm } from "react-hook-form"
import FormInput from "../form/formInput"
import useGetGames from "@/hooks/useGetGames"
import FormTextarea from "../common/textarea"
import AddGameModal from "./addGameModal"

const GamingHistory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
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
  )
}

export default GamingHistory
