// ALWAYS KEEP REFLECT META AT TOP
import 'reflect-metadata'
import 'dotenv-safe/config'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { createContext, __prod__ } from './context'
import { createPrismaClient } from './utils/prismaHelpers'
import { UserResolver } from './typegraph/resolvers/user'
import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import { authChecker } from './utils/gqlAuth'
import { checkRootUser } from './utils/rootUser'
import * as Sentry from '@sentry/node'
import * as Tracing from '@sentry/tracing'
import { DrawingResolver } from './typegraph/resolvers/drawing'
import { graphqlUploadExpress } from 'graphql-upload'
import { SpatialResolver } from './typegraph/resolvers/spatial'
import { TrialResolver } from './typegraph/resolvers/drt/drt'
import { crudResolvers } from '@generated/type-graphql'
import { buildTGServer } from './typegraph/buildTGServer'
import { initSentry } from './sentry/initSentry'
import { buildNexusServer } from './nexus/buildNexusServer'

const main = async () => {
  const app = express()
  if (__prod__) {
    app.set('trust proxy', 1)
  }

  initSentry(app)

  app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }))
  app.use(express.urlencoded({ extended: true }))
  app.use(cookieParser())

  const prisma = createPrismaClient()

  await buildTGServer(app, prisma)

  // creates root user in DB if hasn't been created already. Might need to remove depending on how service is deployed. Works for testing for now.
  checkRootUser(prisma)


  await buildNexusServer(app, prisma)



  app.get('/', (_req, res) => {
    res.redirect('/graphql')
  })
  // The error handler must be before any other error middleware and after all controllers
  app.use(Sentry.Handlers.errorHandler())

  app.listen(parseInt(process.env.PORT), () =>
    console.log(`🚀 Server ready at: http://localhost:${process.env.PORT}`)
  )
}

main().catch((err) => {
  console.error(err)
})
