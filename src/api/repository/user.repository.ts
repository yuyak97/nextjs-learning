import prisma from "@/lib/prisma"
import { UserUpdateRequest } from "../type/user"

export const getUserByEmail = async (email: string) => {
  return prisma.user.findFirst({
    where: { email },
    include: { userProperty: true },
  })
}

export const updateUserById = ({
  userId,
  body,
}: {
  userId: string
  body: UserUpdateRequest
}) => {
  return prisma.user.update({
    where: { id: userId },
    data: {
      userProperty: {
        upsert: {
          update: {
            username: body.username,
          },
          create: {
            username: body.username,
          },
        },
      },
    },
  })
}
