import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'neha_test@gmail.com' },
    update: {
      name: 'Neha Updated'
    },
    create: {
      name: 'Neha',
      email: 'neha_test@gmail.com',
      posts: {
        create: {
          title: 'My First Prisma Post',
          content: 'Prisma with MySQL is working 🎉'
        }
      }
    }
  })

  console.log(user)
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  })
