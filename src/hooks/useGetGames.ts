import { useState } from "react"
import axios from "axios"

const useGetGames = () => {
  const [games, setGames] = useState<{ name: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const fetchGames = async (search: string) => {
    setIsLoading(true)
    const { data } = await axios.get<{ name: string }[]>(
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
