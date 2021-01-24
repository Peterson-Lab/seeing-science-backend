import { PrismaClient } from '@prisma/client'
import { __prod__ } from './constants'

export const createPrismaClient = (): PrismaClient => {
  if (__prod__) return new PrismaClient({ errorFormat: 'pretty' })

  return new PrismaClient({
    log: ['query', 'info', 'warn'],
    errorFormat: 'pretty',
  })
}
