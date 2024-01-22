"use client"

import { DefaultPageProps } from "@/types/page-props.types"
import Link from "next/link"

const SecondPage: React.FC<DefaultPageProps> = ({ params: { lng } }) => {
  return (
    <>
      <h1>Hi from second page!</h1>
      <Link href={`/${lng}`}>back</Link>
    </>
  )
}

export default SecondPage
