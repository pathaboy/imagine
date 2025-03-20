import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // 
}

main().catch(e => {
  console.log(e)
  process.exit(1)
}).then(()=> {
  console.log("Data seeded successfully")
}).finally(async()=> {
  await prisma.$disconnect()
})