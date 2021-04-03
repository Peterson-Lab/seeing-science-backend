// ALWAYS KEEP REFLECT META AT TOP

import { buildExpress } from './startup'
import { createPrismaClient } from './utils/prismaHelpers'
import { startExpress } from './utils/startExpress'

const main = async () => {
  const prisma = createPrismaClient()
  const app = await buildExpress(prisma)
  startExpress(app, parseInt(process.env.PORT))
}

main().catch((err) => {
  console.error(err)
})
