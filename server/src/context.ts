import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { decryptToken, jwtPayload } from './utils/jwt'

export interface ContextIn {
  req: Request
  res: Response
}
export interface Context {
  req: Request
  res: Response
  prisma: PrismaClient
  userToken?: jwtPayload
}

export async function createContext(
  { req, res }: ContextIn,
  prisma: PrismaClient
): Promise<Context> {
  // decrypts the jwt in cookies into a user
  const userToken = decryptToken(req)

  // add the user to the context
  return { req, res, prisma, userToken }
}

export const __prod__ = process.env.NODE_ENV === 'production'
