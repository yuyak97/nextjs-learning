"use client"

import React from "react"
import HeaderButtons from "@/components/header/headerButtons"
import { brand } from "@/const/meta"

type Props = {
  lng: string
}

const Header: React.FC<Props> = ({ lng }) => {
  return (
    <div className="fixed top-0 z-10 flex h-12 w-full items-center justify-between bg-gray-100 px-4 dark:bg-gray-900">
      <div className="text-xl">{brand.name}</div>
      <HeaderButtons lng={lng} />
    </div>
  )
}

export default Header
