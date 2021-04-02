// ALWAYS KEEP REFLECT META AT TOP
import { PrismaClient } from '.prisma/client'
import 'dotenv-safe/config'
import express, { Express } from "express"
import 'reflect-metadata'
import { buildTGServer } from "./buildTGServer"
import { attachRoutes } from "./routes/routes"
import { addErrorHandler, addMiddlewares } from "./utils/expressMiddlewares"
import { checkRootUser } from "./utils/rootUser"

export const buildExpress = async (prisma: PrismaClient): Promise<Express> => {
    const app = express()

    // cors, cookies etc
    addMiddlewares(app)
  
    // main gql server for website
    await buildTGServer(app, prisma)
  
  
    checkRootUser(prisma)
  
    // any other routes, for not gql clients (Unity game)
    attachRoutes(app)
  
    // sentry
    addErrorHandler(app)
  
    return app
}