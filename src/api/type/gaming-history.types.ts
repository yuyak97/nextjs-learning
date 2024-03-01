import { GamingHistory } from "@prisma/client"

export type GamingHistoryCreateBody = {
  title: string
  startMonth: Date
  slug: string
  image: string
  endMonth?: Date | null
  description: string
}

export type GamingHistoryCreateBodyWithUserId = GamingHistoryCreateBody & {
  userId: string
}

export type GamingHistoryResponse = Pick<
  GamingHistory,
  "title" | "publicId" | "startMonth" | "endMonth" | "description" | "image"
>
