import { cacheExchange } from '@urql/exchange-graphcache'
import { PartialNextContext, SSRExchange } from 'next-urql'
import { ClientOptions, dedupExchange, fetchExchange } from 'urql'
import {
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
  RegisterMutation,
} from '../generated/graphql'
import { betterUpdateQuery } from './betterUpdateQuery'
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
    url: process.env.NEXT_PUBLIC_API_URL as string,
    fetchOptions: {
      credentials: 'include' as const,
      headers: cookie ? { cookie } : undefined,
    },
    exchanges: [
      dedupExchange,
      cacheExchange({
        updates: {
          Mutation: {
            logout: (_result, _args, cache) => {
              betterUpdateQuery<LogoutMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                () => ({ me: null })
              )
            },
            login: (_result, _args, cache) => {
              betterUpdateQuery<LoginMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                (result, query) => {
                  if (result.login.errors) {
                    return query
                  } else {
                    return { me: result.login.user }
                  }
                }
              )
            },
            register: (_result, _args, cache) => {
              betterUpdateQuery<RegisterMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                (result, query) => {
                  if (result.register.errors) {
                    return query
                  } else {
                    return { me: result.register.user }
                  }
                }
              )
            },
          },
        },
      }),
      ssrExchange,
      fetchExchange,
    ],
  }
}
