import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const usersWithPosts = await prisma.user.findMany({   //thing are automatically saved in data and replace by a function
    include: {
      posts: true,
    },
  })
  console.dir(usersWithPosts, { depth: null })  //the objects in usersWithPosts array are fully typed.
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