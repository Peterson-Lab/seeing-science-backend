import { resolvers } from '@generated/type-graphql'
import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { createContext } from './context'

const app = async () => {
  const schema = await buildSchema({
    resolvers: [...resolvers],
    validate: false,
  })

  const prisma = new PrismaClient()

  const server = new ApolloServer({
    context: (exp) => createContext(exp),
    schema,
  })

  server.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at: http://localhost:4000`)
  )
}

app().catch((err) => {
  console.error(err)
})
