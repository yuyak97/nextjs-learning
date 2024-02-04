import { User, UserProperty } from "@prisma/client"

export type UserEntity = User & { userProperty: UserProperty | null }
