import { ReactNode } from "react"
import { dir } from "i18next"
import { languages } from "../i18n/settings"
import { Footer } from "@/components/common/footer"
import { Providers } from "@/components/app/providers"
import Header from "@/components/common/header"
import "@/styles/globals.css"

export async function generateStaticParams(): Promise<{ lng: string }[]> {
  return languages.map((lng) => ({ lng }))
}

interface RootLayoutProps {
  children: ReactNode
  params: { lng: string }
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  params: { lng },
}) => {
  return (
    <html suppressHydrationWarning lang={lng} dir={dir(lng)}>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer lng={lng} />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
