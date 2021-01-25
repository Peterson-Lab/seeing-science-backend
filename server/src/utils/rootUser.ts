import { PrismaClient } from '@prisma/client'
import argon2 from 'argon2'

export const checkRootUser = async (prisma: PrismaClient): Promise<void> => {
  const rootUser = await prisma.user.findUnique({ where: { username: 'root' } })

  if (!rootUser) {
    const pw = await argon2.hash(process.env.ROOT_PASSWORD)

    await prisma.user.create({
      data: {
        email: process.env.ROOT_EMAIL,
        password: pw,
        username: process.env.ROOT_USERNAME,
        role: 'ADMIN',
      },
    })
  }
}
