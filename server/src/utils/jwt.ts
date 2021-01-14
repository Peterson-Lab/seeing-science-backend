import { User } from '@prisma/client'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const JWT_COOKIE_NAME = process.env.JWT_COOKIE_NAME
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

export interface jwtPayload {
  id: number
  role: string
  email: string
  username: string
}

export const isPayload = (p: any): p is jwtPayload => {
  return p && p.id && typeof p.id === 'number'
}

export const decryptToken = (req: Request): jwtPayload | undefined => {
  const token = req.cookies[JWT_COOKIE_NAME]

  if (!token) return undefined

  const payload = jwt.verify(token, JWT_SECRET_KEY)

  if (!isPayload(payload)) return undefined

  return payload
}

export const setToken = (user: User, res: Response): void => {
  const payload: jwtPayload = {
    email: user.email,
    role: user.role,
    username: user.username,
    id: user.id,
  }

  const token = jwt.sign(payload, JWT_SECRET_KEY)

  res.cookie(JWT_COOKIE_NAME, token, {
    httpOnly: true,
    //secure: true, //on HTTPS
    //domain: 'example.com', //set your domain })
  })
}
