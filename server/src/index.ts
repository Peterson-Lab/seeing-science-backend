// ALWAYS KEEP REFLECT META AT TOP

import 'reflect-metadata'
import 'dotenv-safe/config'
import {
  DeleteExperimentResolver,
  DeleteTrialResolver,
  UpdateUserResolver,
  CreateExperimentResolver,
} from '@generated/type-graphql'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { createContext } from './context'
import { createPrismaClient } from './utils/prismaHelpers'
import { UserResolver } from './resolvers/user'
import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import { authChecker } from './utils/gqlAuth'
import { checkRootUser } from './utils/rootUser'
import { TrialResolver } from './resolvers/trial'

const main = async () => {
  const app = express()
  app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }))
  app.use(express.urlencoded({ extended: true }))
  app.use(cookieParser())

  const schema = await buildSchema({
    resolvers: [
      // included resolvers from type-graphql
      CreateExperimentResolver,
      UpdateUserResolver,
      DeleteExperimentResolver,
      DeleteTrialResolver,
      // custom resolvers
      UserResolver,
      TrialResolver,
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
    schema,
  })

  apolloSrv.applyMiddleware({ app, cors: false })

  app.get('/', (_req, res) => {
    res.redirect('/graphql')
  })

  app.listen(parseInt(process.env.PORT), () =>
    console.log(`🚀 Server ready at: http://localhost:${process.env.PORT}`)
  )
}

main().catch((err) => {
  console.error(err)
})
