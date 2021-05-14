import { attachGqlRoutes } from './gql'
import { Express } from 'express'
import { attachSpatialRoutes } from './spatial'
import { PrismaClient } from '.prisma/client'

// only GQL route for now, will add more as other functionality expands
export const attachRoutes = (app: Express, prisma: PrismaClient) => {
  attachGqlRoutes(app)
  attachSpatialRoutes(app, prisma)
}
