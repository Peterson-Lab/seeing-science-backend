import { PartialNextContext, SSRExchange } from 'next-urql'
import {
  ClientOptions,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from 'urql'
import { isBrowser } from './isBrowser'

export const createUrqlClient = (
  ssrExchange: SSRExchange,
  ctx: PartialNextContext | undefined
): ClientOptions => {
  let cookie = ''
  if (!isBrowser()) {
    cookie = ctx?.req.headers.cookie
  }

  return {
    url: 'http://localhost:4000/graphql',
    fetchOptions: {
      credentials: 'include' as const,
      headers: cookie ? { cookie } : undefined,
    },
    exchanges: [dedupExchange, cacheExchange, ssrExchange, fetchExchange],
  }
}
