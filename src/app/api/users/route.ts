import { getUserByEmailService } from "@/api/service/user"
import { Status } from "@/enums/status.enum"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const url = request.nextUrl
    const email = url.searchParams.get("email")

    if (!email) {
      return new Response(
        JSON.stringify({ error: "email parameter missing" }),
        {
          status: Status.BAD_REQUEST,
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
    }

    const user = await getUserByEmailService(email)

    return new Response(JSON.stringify(user), {
      status: Status.OK,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (err) {
    console.error("failed to fetch users list", err)
    return new Response(null, {
      status: Status.INTERNAL_SERVER_ERROR,
    })
  }
}
