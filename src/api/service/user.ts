import { Status } from "@/enums/status.enum"
import { formatUser } from "../formatter/user"
import {
  getUserByEmail,
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

export const updateUserService = async ({
  email,
  body,
}: {
  email: string
  body: UserUpdateRequest
}) => {
  try {
    const user = await getUserByEmail(email)
    if (!user) {
      console.error(`User ${email} does not exist`)
      throw new Error()
    }

    const updatedUser = await updateUserById({ body, userId: user.id })
    return getUserByEmailService(updatedUser.email!)
  } catch (err) {
    console.error(err)
    throw new Error()
  }
}
