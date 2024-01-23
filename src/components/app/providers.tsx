"use client"

import { FC, PropsWithChildren } from "react"
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </SessionProvider>
  )
}
