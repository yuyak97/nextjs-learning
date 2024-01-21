import { DefaultPageProps } from "@/types/page-props"
import Link from "next/link"

const Page: React.FC<DefaultPageProps> = ({ params: { lng } }) => {
  return (
    <>
      <h1>Hi from second page!</h1>
      <Link href={`/${lng}`}>back</Link>
    </>
  )
}
