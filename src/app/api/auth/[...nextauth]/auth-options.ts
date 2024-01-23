import NextAuth, { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma"
import CredentialsProvider from "next-auth/providers/credentials"
import { OAuth2Client } from "google-auth-library"
import { NextApiRequest, NextApiResponse } from "next/types"
import GoogleProvider from "next-auth/providers/google"
import { Adapter } from "next-auth/adapters"
import { authorize } from "./authorize"

export const googleAuthClient = new OAuth2Client(
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
)

export const adapter: Adapter = PrismaAdapter(prisma)

export const authOptions: NextAuthOptions = {
  adapter,
  session: {
    strategy: "jwt", // Important!
  },
  providers: [
    CredentialsProvider({
      // this!
      id: "googleonetap", // We will use this id later to specify for what Provider we want to trigger the signIn method
      name: "google-one-tap",

      // This means that the authentication will be done through a single credential called 'credential'
      credentials: {
        credential: { type: "text" },
      },
      // This function will be called upon signIn
      authorize,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
}
