import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
//import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server'
import { resolvers } from '@generated/type-graphql'
import { createContext } from './context'

const app = async () => {
  const schema = await buildSchema({
    resolvers: [...resolvers],
    validate: false,
  })

  const prisma = new PrismaClient()

  //const prisma = new PrismaClient()

  const server = new ApolloServer({
    context: ({ req }) => {
      // Note! This example uses the `req` object to access headers,
      // but the arguments received by `context` vary by integration.
      // This means they will vary for Express, Koa, Lambda, etc.!
      //
      // To find out the correct arguments for a specific integration,
      // see the `context` option in the API reference for `apollo-server`:
      // https://www.apollographql.com/docs/apollo-server/api/apollo-server/

      // Get the user token from the headers.
      const token = req.headers.authorization || ''

      // try to retrieve a user with the token
      const user = prisma.user.findUnique()

      // add the user to the context
      return { user }
    },
  })

  server.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at: http://localhost:4000`)
  )
}

app().catch((err) => {
  console.error(err)
})
