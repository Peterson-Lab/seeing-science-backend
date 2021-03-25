import { buildSchema } from "type-graphql"
import { authChecker } from "../utils/gqlAuth"
import { DrawingResolver } from "./resolvers/drawing"
import { TrialResolver } from "./resolvers/drt"
import { SpatialResolver } from "./resolvers/spatial"
import { UserResolver } from "./resolvers/user"
import {crudResolvers} from '@generated/type-graphql'
import {Express} from 'express'
import { prisma, PrismaClient } from "@prisma/client"
import { ApolloServer } from "apollo-server-express"
import { createPrismaClient } from "../utils/prismaHelpers"
import { createContext } from "../context"
import { graphqlUploadExpress } from "graphql-upload"

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

      const apolloSrv = new ApolloServer({
        context: (exp) => createContext(exp, prisma),
        uploads: false,
        schema,
      })

      apolloSrv.applyMiddleware({ app, cors: false })


}