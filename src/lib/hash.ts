import Hashids from "hashids"

export const hashIds = new Hashids(process.env.NEXT_HASH_SALT, 10)
