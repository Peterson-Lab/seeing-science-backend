import { attachGqlRoutes } from "./gql"
import { Express } from 'express'


// only GQL route for now, will add more as other functionality expands
export const attachRoutes = (app: Express) => {
    attachGqlRoutes(app)
}