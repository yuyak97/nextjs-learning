"use client"

import React, { useState } from "react"
import Modal from "../common/modal"
import YearMonthPicker from "../form/yearMonthPicker"
import { formatDateString } from "@/utils/date.util"
import Button from "../common/button"
import { ButtonColor } from "@/enums/style.enum"
import { useForm } from "react-hook-form"
import FormInput from "../form/formInput"
import useGetGames from "@/hooks/useGetGames"
import FormTextarea from "../common/textarea"
import InputContainer from "../form/inputContainer"

type Props = {
  isModalOpen: boolean
  handleCloseModal: () => void
}

const AddGameModal: React.FC<Props> = ({ isModalOpen, handleCloseModal }) => {
  const { register, handleSubmit, getValues, setValue } = useForm()
  const { games, isLoading, fetchGames, clearSearchResult } = useGetGames()
  const [selectedGame, setSelectedGame] = useState(null)

  const searchGames = async () => {
    const title = getValues("title")
    await fetchGames(title)
  }

  const selectGame = (game: any) => {
    setValue("title", game.name)
    setSelectedGame(game)
    clearSearchResult()
  }

  const submitAddGame = async () => {
    try {
      console.log("submit")
      console.log(getValues())
      handleCloseModal()
    } catch (err) {}
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      title={"Add your gaming history"}
    >
      <form className="relative w-full">
        <InputContainer>
          <div className="flex items-center gap-2">
            <FormInput placeholder="GAME TITLE" {...register("title")} />
            <Button color={ButtonColor.LIGHT_GRAY} onClick={searchGames}>
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
                </div>
              ) : (
                "Search"
              )}
            </Button>
          </div>
          {games.length > 0 && (
            <div>
              <div className="absolute z-50 max-h-60 overflow-y-auto bg-white shadow-lg dark:bg-gray-700">
                {games.map((game, index) => (
                  <div
                    onClick={() => selectGame(game)}
                    key={index}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {game.name}
                  </div>
                ))}
              </div>
              <div className="z-1 fixed inset-0" onClick={clearSearchResult} />
            </div>
          )}
        </InputContainer>
        <InputContainer>
          <p>When did you start playing this game?</p>
          <YearMonthPicker
            {...register("startMonth")}
            defaultValue={formatDateString(new Date(), "yyyy-MM")}
          />
        </InputContainer>
        <InputContainer>
          <p>When did you stop playing this game?</p>
          <p className="text-sm text-gray-500">* This is not required</p>
          <YearMonthPicker {...register("endMonth")} />
        </InputContainer>
        <InputContainer>
          <FormTextarea {...register("comment")} placeholder={"comment"} />
        </InputContainer>
        <Button color={ButtonColor.BLUE} onClick={handleSubmit(submitAddGame)}>
          Add this gaming experience
        </Button>
      </form>
    </Modal>
  )
}

export default AddGameModal
