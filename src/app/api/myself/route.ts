import { Status } from "@/enums/status.enum"
import { NextRequest } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/auth-options"
import { updateUserService } from "@/api/service/user.service"

export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: Status.UNAUTHORIZED,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }

    const body = await req.json()
    const user = await updateUserService({
      email: session.user.email!,
      body: { username: body.username },
    })

    return new Response(JSON.stringify(user), {
      status: Status.OK,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "User could not be updated" }),
      {
        status: Status.INTERNAL_SERVER_ERROR,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  }
}
