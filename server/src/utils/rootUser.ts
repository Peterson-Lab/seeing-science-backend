import { PrismaClient } from '@prisma/client'
import argon2 from 'argon2'
import { experiments } from '../context'

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

export const checkExperimentsPresent = async (
  prisma: PrismaClient
): Promise<void> => {
  experiments.forEach(async (experimentName) => {
    console.log(experimentName)
    let experiment = await prisma.experiment.findUnique({
      where: { name: experimentName },
    })

    if (!experiment) {
      experiment = await prisma.experiment.create({
        data: { name: experimentName },
      })
    }
  })
}
