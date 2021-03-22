import { GraphQLClient } from 'graphql-request'

export const createClient = (): GraphQLClient => {
  let url = ''
  if (process.env.NEXT_PUBLIC_API_URL) url = process.env.NEXT_PUBLIC_API_URL
  else url = 'http://localhost:4000/graphql'

  const client = new GraphQLClient(url, { credentials: 'include' })
  return client
}
