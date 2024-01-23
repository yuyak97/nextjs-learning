"use client"

import Link from "next/link"
import { Trans } from "react-i18next/TransWithoutContext"
import { languages } from "@/app/i18n/settings"
import { useTranslation } from "@/app/i18n/client"
import { useSession } from "next-auth/react"

type Props = {
  lng: string
}

export const Footer: React.FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng)
  const { data } = useSession()
  console.log(data)
  return (
    <footer style={{ marginTop: 50 }}>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{lng}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          )
        })}
    </footer>
  )
}
