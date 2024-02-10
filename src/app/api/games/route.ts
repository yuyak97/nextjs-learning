import { NextRequest } from "next/server"
import { axiosGameApi } from "./game-axios"

export async function GET(request: NextRequest) {
  const url = request.nextUrl
  const search = url.searchParams.get("search")

  if (!search) {
    return new Response(JSON.stringify({ error: "search parameter missing" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  try {
    const { data } = await axiosGameApi.get(`/games?search=${search}`)
    return new Response(JSON.stringify(data.results), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (err) {
    console.error("failed to fetch games list", err)
    return new Response(null, {
      status: 500,
    })
  }
}
