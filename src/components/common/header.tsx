"use client"

import React from "react"
import HeaderButtons from "@/components/header/headerButtons"
import { brand } from "@/const/meta.const"
import Link from "next/link"

type Props = {
  lng: string
}

const Header: React.FC<Props> = ({ lng }) => {
  return (
    <div className="fixed top-0 z-10 flex h-12 w-full items-center justify-between bg-gray-100 px-2 dark:bg-gray-900">
      <Link href="/">
        <div className="text-xl">{brand.name}</div>
      </Link>
      <HeaderButtons lng={lng} />
    </div>
  )
}

export default Header
