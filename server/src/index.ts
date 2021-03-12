// ALWAYS KEEP REFLECT META AT TOP

import 'reflect-metadata'
import 'dotenv-safe/config'
import {
  DeleteExperimentResolver,
  DeleteTrialResolver,
  UpdateUserResolver,
  CreateExperimentResolver,
  FindManyDrawingResolver,
} from '@generated/type-graphql'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { createContext, __prod__ } from './context'
import { createPrismaClient } from './utils/prismaHelpers'
import { UserResolver } from './resolvers/user'
import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import { authChecker } from './utils/gqlAuth'
import { checkRootUser } from './utils/rootUser'
import { TrialResolver } from './resolvers/trial'
import * as Sentry from '@sentry/node'
import * as Tracing from '@sentry/tracing'
import { DrawingResolver } from './resolvers/drawing'
import { graphqlUploadExpress } from 'graphql-upload'

const main = async () => {
  const app = express()
  if (__prod__) {
    app.set('trust proxy', 1)
  }
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [
      // enable HTTP calls tracing
      new Sentry.Integrations.Http({ tracing: true }),
      // enable Express.js middleware tracing
      new Tracing.Integrations.Express({ app }),
    ],
    environment: process.env.NODE_ENV,

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  })
  // RequestHandler creates a separate execution context using domains, so that every
  // transaction/span/breadcrumb is attached to its own Hub instance
  app.use(Sentry.Handlers.requestHandler())
  // TracingHandler creates a trace for every incoming request
  app.use(Sentry.Handlers.tracingHandler())

  app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }))
  app.use(express.urlencoded({ extended: true }))
  app.use(cookieParser())

  app.use(graphqlUploadExpress())

  const schema = await buildSchema({
    resolvers: [
      // included resolvers from type-graphql
      CreateExperimentResolver,
      UpdateUserResolver,
      DeleteExperimentResolver,
      DeleteTrialResolver,
      FindManyDrawingResolver,
      // custom resolvers
      UserResolver,
      TrialResolver,
      DrawingResolver,
    ],
    validate: false,
    // using built in type-graphql auth
    authChecker: authChecker,
  })

  const prisma = createPrismaClient()

  // creates root user in DB if hasn't been created already. Might need to remove depending on how service is deployed. Works for testing for now.
  checkRootUser(prisma)

  const apolloSrv = new ApolloServer({
    context: (exp) => createContext(exp, prisma),
    uploads: false,
    schema,
  })

  apolloSrv.applyMiddleware({ app, cors: false })

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
