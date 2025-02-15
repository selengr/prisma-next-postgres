import { prisma } from '@/lib/prisma'

export default async function Home() {
  const user = await prisma.user.findFirst({
    where: {
      email: 'reza@test.com'
    }
  })

  return (
    <main>
      <div>Hello, {user?.name}</div>
    </main>
  )
}
