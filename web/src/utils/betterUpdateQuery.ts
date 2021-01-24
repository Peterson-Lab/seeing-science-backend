import { QueryInput, Cache } from '@urql/exchange-graphcache'

export function betterUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
): void {
  return cache.updateQuery(qi, (data: any) => fn(result, data) as any)
}
