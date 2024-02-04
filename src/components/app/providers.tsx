"use client"

import { FC, PropsWithChildren } from "react"
import { ThemeProvider } from "next-themes"
import { SessionProvider, SessionProviderProps } from "next-auth/react"
import { Provider } from "react-redux"
import { store } from "@/store/app/store"

type ProvidersProps = PropsWithChildren<{
  session: SessionProviderProps["session"]
}>

export const Providers: FC<ProvidersProps> = ({ children, session }) => {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </SessionProvider>
    </Provider>
  )
}
