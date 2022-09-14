import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const res = await prisma.post.findMany({
    where: {
      author: {
        email: {
          contains: 'prisma.io',  //the following query returns all posts where the author's email contains "prisma.io"
        },
      },
    },
  })
  console.log(res);
}


 main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })