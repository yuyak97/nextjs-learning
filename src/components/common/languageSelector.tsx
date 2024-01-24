import React, { ChangeEvent } from "react"
import { languages } from "@/app/i18n/settings"

type Props = {
  lng: string
}

const LanguageSelector: React.FC<Props> = ({ lng }) => {
  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value
    window.location.pathname = `/${selectedLanguage}`
  }

  return (
    <div className="mt-4 md:mt-0">
      <label
        htmlFor="language-select"
        className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Language:
      </label>
      <select
        id="language-select"
        value={lng}
        onChange={handleLanguageChange}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
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
