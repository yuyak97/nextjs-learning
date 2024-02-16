import { useState } from "react"
import axios from "axios"
import { GameApiResponse } from "@/api/type/game.types"

const useGetGames = () => {
  const [games, setGames] = useState<GameApiResponse[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const fetchGames = async (search: string) => {
    setIsLoading(true)
    const { data } = await axios.get<GameApiResponse[]>(
      `/api/games?search=${search}`,
    )
    setGames(data)
    setIsLoading(false)
  }
  const clearSearchResult = () => {
    setGames([])
  }

  return { games, isLoading, fetchGames, clearSearchResult }
}

export default useGetGames
