import { PrismaClient } from "@prisma/client"
import { addCrudResolvers } from '@ra-data-prisma/backend'
import { ApolloServer } from "apollo-server-express"
import { Express } from 'express'
import { makeSchema } from 'nexus'
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'
import { Context, createContext } from "../context"
import { drtTrialResponse } from "./schema/DRT"
import { rule, allow, shield } from "graphql-shield"
import { applyMiddleware } from 'graphql-middleware'
import { User } from "./schema/User"


const isAdmin = rule({ cache: false })(
  async (parent, args, { userToken }: Context, info) => {
    if (!userToken) return false

    if(userToken.role === 'ADMIN') return true

    return false
  }
);


const permissions = shield(
  {},
  {
    fallbackRule: isAdmin
  }
);


export const buildNexusServer = async (app: Express, prisma: PrismaClient): Promise<void> => {

  const schema = makeSchema({
    types: [
      User,
      addCrudResolvers("User"),
      drtTrialResponse,
      addCrudResolvers("DrtTrialResponse")
    ],
    plugins: [
      nexusSchemaPrisma({
        experimentalCRUD: true, // required!
        paginationStrategy: "prisma", // required!
        //   outputs: {
        //     typegen: typegenPath("./generated/nexus-prisma.ts")
        //   }
      })
    ]
  })

  const apolloSrv = new ApolloServer({
    context: (exp) => createContext(exp, prisma),
    uploads: false,
    schema: applyMiddleware(schema, permissions),

  })
  // TODO: CORS
  apolloSrv.applyMiddleware({ app, cors: { origin: process.env.CORS_ORIGIN, credentials: true }, path: "/admingql" })


}