import prisma from "@/lib/prisma"

export const getUserByEmail = async (email: string) => {
  return prisma.user.findFirst({
    where: { email },
    include: { userProperty: true },
  })
}
