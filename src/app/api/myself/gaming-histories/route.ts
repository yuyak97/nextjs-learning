import { Status } from "@/enums/status.enum"
import { getServerSession } from "next-auth"
import { NextRequest } from "next/server"
import { authOptions } from "../../auth/[...nextauth]/auth-options"
import {
  createGamingHistoryService,
  getMyselfGamingHistoryService,
} from "@/api/service/gaming-history"

export async function GET(req: NextRequest) {
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

    const gamingHistories = await getMyselfGamingHistoryService(
      session.user.email!,
    )

    return new Response(JSON.stringify(gamingHistories), {
      status: Status.OK,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Could not get user's gaming history" }),
      {
        status: Status.INTERNAL_SERVER_ERROR,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  }
}

export async function POST(req: NextRequest) {
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
    await createGamingHistoryService({ email: session.user.email!, body })
    return new Response(null, {
      status: Status.CREATED,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Could not get user's gaming history" }),
      {
        status: Status.INTERNAL_SERVER_ERROR,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  }
}
