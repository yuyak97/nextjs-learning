import { UserEntity } from "../type/user"

export const formatUser = (user: UserEntity) => ({
  id: user.id,
  email: user.email,
  username: user.userProperty?.username || user.name,
})
