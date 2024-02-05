import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  safelist: [
    "bg-red-500",
    "text-3xl",
    "lg:text-4xl",
    "bg-red-600",
    "hover:bg-red-800",
    "text-white",
    "bg-green-500",
    "hover:bg-green-800",
    "bg-gray-300",
    "hover:bg-gray-400",
    "text-black",
    "bg-blue-500",
    "hover:bg-blue-700",
    "bg-gray-500",
    "hover:bg-gray-700",
    "dark:hover:bg-blue-800",
    "text-sm",
    "md:text-lg",
    "text-lg",
    "md:text-xl",
    "text-xl",
    "md:text-2xl",
    "text-2xl",
    "md:text-4xl",
  ],
  plugins: [],
}
export default config
