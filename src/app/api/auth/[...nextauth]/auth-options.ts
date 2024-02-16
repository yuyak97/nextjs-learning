import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma"
import { OAuth2Client } from "google-auth-library"
import GoogleProvider from "next-auth/providers/google"
import { Adapter } from "next-auth/adapters"
import { hashIds } from "@/lib/hash"

export const googleAuthClient = new OAuth2Client(
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
)

export const googleSecret = new OAuth2Client(
  process.env.NEXT_PUBLIC_GOOGLE_SECRET,
)

export const adapter: Adapter = PrismaAdapter(prisma)
// @ts-ignore
adapter.createUser = (data: { name: string; email: string; image: string }) => {
  return prisma.$transaction(async (tx) => {
    const user = await tx.user.create({ data })
    const unixTime = Math.floor(user.createdAt.getTime() / 1000)
    await tx.userProperty.create({
      data: {
        username: `user-${hashIds.encode(unixTime)}`,
        userId: user.id,
      },
    })

    const u = await tx.user.findFirst({
      where: { id: user.id },
      include: { userProperty: true },
    })

    return user
  })
}

export const authOptions: NextAuthOptions = {
  debug: false,
  adapter,
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "database", // Important!
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string,
    }),
    // TODO: implement one tap login
    // CredentialsProvider({
    //   // this!
    //   id: "googleonetap", // We will use this id later to specify for what Provider we want to trigger the signIn method
    //   name: "google-one-tap",

    //   // This means that the authentication will be done through a single credential called 'credential'
    //   credentials: {
    //     credential: { type: "text" },
    //   },
    //   // This function will be called upon signIn
    //   authorize,
    // }),
  ],
  callbacks: {
    redirect: async ({ url, baseUrl }) => {
      return url
    },
    session: async ({ session, token, user, trigger, newSession }) => {
      prisma.$connect()
      const userAccount = await prisma.account.findFirst({
        where: {
          userId: user.id,
        },
      })
      prisma.$disconnect()

      return {
        ...session,
        user: {
          ...session.user,
          accessToken: userAccount?.access_token,
        },
      }
    },
  },
}
