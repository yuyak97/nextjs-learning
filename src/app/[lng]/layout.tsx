import { ReactNode } from "react"
import { dir } from "i18next"
import { languages } from "../i18n/settings"
import { Footer } from "@/components/common/footer"
import { Providers } from "@/components/app/providers"
import Header from "@/components/common/header"
import "@/styles/globals.css"
import Script from "next/script"
import { Session } from "next-auth"
import { GlobalStyles } from "@/components/app/globalStyle"

export async function generateStaticParams(): Promise<{ lng: string }[]> {
  return languages.map((lng) => ({ lng }))
}

interface RootLayoutProps {
  children: ReactNode
  params: { lng: string }
  session?: Session
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  params: { lng },
  session,
}) => {
  return (
    <html suppressHydrationWarning lang={lng} dir={dir(lng)}>
      <head>
        <Script src="https://accounts.google.com/gsi/client" />
      </head>
      <body>
        <Providers session={session}>
          <GlobalStyles />
          <Header lng={lng} />
          <div>{children}</div>
          <Footer lng={lng} />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
