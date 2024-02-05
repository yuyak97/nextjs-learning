import { Status } from "@/enums/status.enum"
import { formatUser } from "../formatter/user"
import {
  getUserByEmail as getUserByEmailRepository,
  updateUserById,
} from "../repository/user"
import { UserUpdateRequest } from "../type/user"

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

export const updateUserService = async (req: {
  userId: string
  body: UserUpdateRequest
}) => {
  try {
    const user = await updateUserById(req)
    return getUserByEmailService(user.email!)
  } catch (err) {
    console.error(err)
    throw new Error()
  }
}
