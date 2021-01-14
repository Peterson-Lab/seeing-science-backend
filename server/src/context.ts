import { PrismaClient } from '@prisma/client'

export interface ContextIn {
  req: Express.Request
  res: Express.Response
}
export interface Context {
  req: Express.Request
  res: Express.Response
  prisma: PrismaClient
}

export async function createContext({ req, res }: ContextIn): Promise<Context> {
  // Note! This example uses the `req` object to access headers,
  // but the arguments received by `context` vary by integration.
  // This means they will vary for Express, Koa, Lambda, etc.!
  //
  // To find out the correct arguments for a specific integration,
  // see the `context` option in the API reference for `apollo-server`:
  // https://www.apollographql.com/docs/apollo-server/api/apollo-server/

  const prisma = new PrismaClient()

  // Get the user token from the headers.
  // const token = parseInt(req.headers.authorization || '-1')

  // // try to retrieve a user with the token
  // const user = await prisma.user.findUnique({ where: { id: token } })

  // add the user to the context
  return { req, res, prisma }
}
