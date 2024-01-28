"use client"

import { FC, PropsWithChildren } from "react"
import { ThemeProvider } from "next-themes"
import { SessionProvider, SessionProviderProps } from "next-auth/react"

type ProvidersProps = PropsWithChildren<{
  session: SessionProviderProps['session'];
}>;

export const Providers: FC<ProvidersProps> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </SessionProvider>
  )
}
