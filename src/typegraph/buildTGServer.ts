import { applyResolversEnhanceMap, crudResolvers } from '@generated/type-graphql'
import { PrismaClient } from "@prisma/client"
import { ApolloServer } from "apollo-server-express"
import { Express } from 'express'
import { graphqlUploadExpress } from "graphql-upload"
import { buildSchema } from "type-graphql"
import { createContext } from "../context"
import { authChecker, resolversEnhanceMap } from "../utils/gqlAuth"
import { DrawingResolver } from "./resolvers/drawing"
import { TrialResolver } from "./resolvers/drt"
import { SpatialResolver } from "./resolvers/spatial"
import { UserResolver } from "./resolvers/user"

export const buildTGServer = async (app: Express, prisma: PrismaClient): Promise<void> => {
  app.use(graphqlUploadExpress())

  const schema = await buildSchema({
        resolvers: [
          ...crudResolvers,
          // included resolvers from type-graphql
          UserResolver,
          DrawingResolver,
          SpatialResolver,
          TrialResolver
        ],
        validate: false,
        // using built in type-graphql auth
        authChecker: authChecker,
      })

  applyResolversEnhanceMap(resolversEnhanceMap)

  const apolloSrv = new ApolloServer({
        context: (exp) => createContext(exp, prisma),
        uploads: false,
        schema,
  })

  apolloSrv.applyMiddleware({ app, cors: { origin: process.env.CORS_ORIGIN, credentials: true } })


}