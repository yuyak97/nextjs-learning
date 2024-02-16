import { User, UserProperty } from "@prisma/client"

export type UserEntity = User & { userProperty: UserProperty | null }

export type UserResponse = {
  id: string
  email: string | null
  username: string
}

export type UserUpdateRequest = {
  username: string
}
