"use client"

import React, { ChangeEvent } from "react"
import { languages } from "@/app/i18n/settings"
import { css } from "@emotion/react"

type Props = {
  lng: string
}

const containerStyle = css({
  marginTop: "1rem", // mt-4
  "@media (min-width: 768px)": {
    marginTop: 0, // md:mt-0
  },
})

const selectStyle = css({
  display: "block",
  width: "100%",
  borderRadius: "0.375rem", // rounded-lg
  border: "1px solid",
  borderColor: "var(--gray-300)",
  backgroundColor: "var(--gray-50)",
  padding: "0.625rem", // p-2.5
  fontSize: "0.875rem", // text-sm
  color: "var(--gray-900)",
  "&:focus": {
    borderColor: "var(--blue-500)",
    outline: "var(--blue-500)",
  },
  "@media (prefers-color-scheme: dark)": {
    borderColor: "var(--gray-600)",
    backgroundColor: "var(--gray-700)",
    color: "white",
    placeholderColor: "var(--gray-400)",
  },
})

const LanguageSelector: React.FC<Props> = ({ lng }) => {
  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value
    window.location.pathname = `/${selectedLanguage}`
  }

  return (
    <div css={containerStyle}>
      <select
        id="language-select"
        value={lng}
        onChange={handleLanguageChange}
        css={selectStyle}
      >
        {languages.map((l) => (
          <option key={l} value={l}>
            {l.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSelector
