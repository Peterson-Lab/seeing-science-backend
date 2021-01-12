import { PrismaClient } from '@prisma/client'
import { Request } from 'apollo-server'

const prisma = new PrismaClient()

export interface Context {
  req: Request
  prisma: PrismaClient
}

export function createContext({ req }: any): Context {
  return { req, prisma }
}
