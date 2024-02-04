import { keysToCamel } from "@/utils/camel-case.util"
import axios from "axios"

const gameApiBaseUrl = "https://api.rawg.io/api/"

export const axiosGameApi = axios.create({
  baseURL: gameApiBaseUrl,
  params: {
    key: process.env.NEXT_GAME_API_KE,
  },
})

axiosGameApi.interceptors.response.use((response) => {
  response.data = keysToCamel(response.data)
  return response
})
