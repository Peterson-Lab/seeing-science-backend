import { Express } from 'express'


export const attachGqlRoutes = (app: Express) => {
  app.get('/', (_req, res) => {
    res.redirect('/graphql')
  })
}