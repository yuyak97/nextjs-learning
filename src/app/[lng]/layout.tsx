import { ReactNode } from "react"
import { dir } from "i18next"
import { languages } from "../i18n/settings"
import { Footer } from "@/components/common/footer"
import { Providers } from "@/components/app/providers"
import Header from "@/components/common/header"
import "@/styles/globals.css"
import Script from "next/script"
import { Session } from "next-auth"

export async function generateStaticParams(): Promise<{ lng: string }[]> {
  return languages.map((lng) => ({ lng }))
}

interface RootLayoutProps {
  children: ReactNode
  params: { lng: string }
  session?: Session;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  params: { lng },
  session
}) => {
  return (
    <html suppressHydrationWarning lang={lng} dir={dir(lng)}>
      <head>
        <Script src="https://accounts.google.com/gsi/client" />
      </head>
      <body>
        <Providers session={session}>
          <Header />
          <div className="pt-16">
            {children}
          </div>
          <Footer lng={lng} />
          {/* <OneTapComponent /> */}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
