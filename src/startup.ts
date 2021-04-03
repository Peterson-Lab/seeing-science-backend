// ALWAYS KEEP REFLECT META AT TOP
import 'reflect-metadata'
import { PrismaClient } from '.prisma/client'
import 'dotenv-safe/config'
import express, { Express } from "express"
import { buildTGServer } from "./buildTGServer"
import { attachRoutes } from "./routes/routes"
import { __prod__ } from './utils/constants'
import { addErrorHandler, addMiddlewares } from "./utils/expressMiddlewares"
import { checkRootUser } from "./utils/rootUser"

export const buildExpress = async (prisma: PrismaClient): Promise<Express> => {
    const app = express()

    // cors, cookies etc
    addMiddlewares(app)
  
    // main gql server for website
    await buildTGServer(app, prisma)
  
  
    __prod__ ? checkRootUser(prisma) : null
  
    // any other routes, for not gql clients (Unity game)
    attachRoutes(app)
  
    // sentry
    addErrorHandler(app)
  
    return app
}