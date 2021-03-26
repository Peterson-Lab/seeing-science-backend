// ALWAYS KEEP REFLECT META AT TOP
import 'reflect-metadata'
import 'dotenv-safe/config'
import { __prod__ } from './utils/constants'
import { createPrismaClient } from './utils/prismaHelpers'
import express from 'express'
import { buildTGServer } from './typegraph/buildTGServer'
import { buildNexusServer } from './nexus/buildNexusServer'
import { addMiddlewares, addErrorHandler } from './utils/expressMiddlewares'
import { startExpress } from './utils/startExpress'
import { checkRootUser } from './utils/rootUser'
import { attachRoutes } from './routes/routes'

const main = async () => {
  const app = express()

  // cors, cookies etc
  addMiddlewares(app)

  const prisma = createPrismaClient()

  // main gql server for website
  await buildTGServer(app, prisma)

  // hacky nexus gql server to serve admin panel
  await buildNexusServer(app, prisma)

  checkRootUser(prisma)

  // any other routes, for not gql clients (Unity game)
  attachRoutes(app)

  // sentry
  addErrorHandler(app)

  startExpress(app)
}

main().catch((err) => {
  console.error(err)
})
