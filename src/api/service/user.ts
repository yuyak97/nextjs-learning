import { Status } from "@/enums/status.enum"
import { formatUser } from "../formatter/user"
import { getUserByEmail as getUserByEmailRepository } from "../repository/user"

export const getUserByEmailService = async (email: string) => {
  try {
    const user = await getUserByEmailRepository(email)

    if (!user) {
      return new Response(null, {
        status: Status.NOT_FOUND,
      })
    }

    return formatUser(user)
  } catch (err) {
    console.error(err)
    throw new Error()
  }
}
