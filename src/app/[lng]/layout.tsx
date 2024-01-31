import { ReactNode } from "react"
import { dir } from "i18next"
import { languages } from "../i18n/settings"
import { Footer } from "@/components/common/footer"
import { Providers } from "@/components/app/providers"
import Header from "@/components/common/header"
import "@/styles/globals.css"
import Script from "next/script"
import { Session, getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/auth-options"
import CookieConsentModal from "@/components/common/cookieConsentModal"

export async function generateStaticParams(): Promise<{ lng: string }[]> {
  return languages.map((lng) => ({ lng }))
}

interface RootLayoutProps {
  children: ReactNode
  params: { lng: string }
}

const RootLayout: React.FC<RootLayoutProps> = async ({
  children,
  params: { lng },
}) => {
  const session = await getServerSession(authOptions)

  return (
    <html suppressHydrationWarning lang={lng} dir={dir(lng)}>
      <head>
        <Script src="https://accounts.google.com/gsi/client" />
      </head>
      <body>
        <Providers session={session}>
          <Header lng={lng} />
          <div className="pt-12">{children}</div>
          <Footer lng={lng} />
          {/* <OneTapComponent /> */}

          <CookieConsentModal />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
