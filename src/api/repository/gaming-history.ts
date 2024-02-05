import prisma from "@/lib/prisma"
import { GamingHistoryCreateBodyWithUserId } from "../type/gaming-history"
import { hashIds } from "@/lib/hash"

export const getUserGamingHistory = async (email: string) => {
  return prisma.user.findFirst({
    where: { email },
    include: { gamingHistories: true },
  })
}

export const createGamingHistory = async (
  body: GamingHistoryCreateBodyWithUserId,
) => {
  const { userId, ...rest } = body
  return prisma.$transaction(async (tx) => {
    const { id } = await tx.gamingHistory.create({
      data: {
        userId,
        createdById: userId,
        updatedById: userId,
        ...rest,
      },
    })

    return tx.gamingHistory.update({
      where: { id },
      data: {
        publicId: hashIds.encode(id),
      },
    })
  })
}
