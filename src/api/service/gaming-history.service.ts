import { getUserByEmail } from "../repository/user.repository"
import {
  GamingHistoryCreateBody,
  GamingHistoryResponse,
} from "../type/gaming-history.types"
import {
  createGamingHistory,
  getUserGamingHistory,
} from "../repository/gaming-history.repository"

export const getMyselfGamingHistoryService = async (
  email: string,
): Promise<GamingHistoryResponse[]> => {
  try {
    const user = await getUserGamingHistory(email)
    if (!user) {
      console.error("User could not found")
      throw new Error()
    }

    return user?.gamingHistories.map(
      ({ publicId, title, description, startMonth, endMonth, image }) => ({
        publicId,
        title,
        description,
        startMonth,
        endMonth,
        image,
      }),
    )
  } catch (err) {
    console.error(err)
    throw new Error()
  }
}

export const createGamingHistoryService = async ({
  email,
  body,
}: {
  email: string
  body: GamingHistoryCreateBody
}) => {
  try {
    const user = await getUserByEmail(email)
    if (!user) {
      console.error(`User ${email} does not exist`)
      throw new Error()
    }

    await createGamingHistory({ ...body, userId: user.id })
    return
  } catch (err) {
    console.error(err)
    throw new Error()
  }
}
