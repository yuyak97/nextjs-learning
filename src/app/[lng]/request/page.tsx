import prisma from "@/lib/prisma"

export default async function Home() {
  const users = prisma.user.findMany()

  return (
    <>
      <h1 className="font-bold text-2xl">Users</h1>
      {/* Userテーブルの結果の一覧を画面に出力する */}
      {(await users).map(({ id, email }) => (
        <p key={id}>{email}</p>
      ))}
    </>
  )
}
