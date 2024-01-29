"use client"

import { useSession } from "next-auth/react"
import { ThemeSwitch } from "./themeSwitch"
import LanguageSelector from "./languageSelector"
import { brand } from "@/const/meta"
import { useTranslation } from "@/app/i18n/client"
import { css } from "@emotion/react"

type Props = {
  lng: string
}

const footerStyle = css({
  backgroundColor: "var(--gray-100)",
  padding: "1rem",
  "@media (min-width: 768px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.5rem",
  },
  ".dark": {
    backgroundColor: "var(--gray-900)",
  },
})

const footerSectionStyle = css({
  marginBottom: "1rem",
  "@media (min-width: 768px)": {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
})

const languageSectionStyle = css({
  margin: "0.25rem",
  label: {
    textTransform: "uppercase",
  },
  ".languageSelector": {
    marginTop: "0.25rem",
    width: "4rem",
  },
})

const themeSwitchSectionStyle = css({
  margin: "0.5rem",
  "@media (min-width: 768px)": {
    display: "none",
  },
})

const themeSwitchDesktopStyle = css({
  display: "none",
  "@media (min-width: 768px)": {
    display: "block",
  },
})

const brandInfoStyle = css({
  fontSize: "0.875rem",
  color: "var(--gray-500)",
  ".dark": {
    color: "var(--gray-400)",
  },
})

export const Footer: React.FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "common")
  const { data: session, status } = useSession()

  return (
    <footer css={footerStyle}>
      <div css={footerSectionStyle}>
        <div css={languageSectionStyle}>
          <label>{t("Common.language")}</label>
          <div className="languageSelector">
            <LanguageSelector lng={lng} />
          </div>
          <p>status: {status}</p>
        </div>

        <div css={themeSwitchSectionStyle}>
          <ThemeSwitch />
        </div>

        <div css={themeSwitchDesktopStyle}>
          <ThemeSwitch />
        </div>
      </div>

      <div>
        <span css={brandInfoStyle}>
          © {new Date().getFullYear()} {brand.name}
        </span>
      </div>
    </footer>
  )
}
