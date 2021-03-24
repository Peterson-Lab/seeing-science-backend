import { AuthChecker, Authorized } from 'type-graphql'
import { Context } from '../context'
import {
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
} from '@generated/type-graphql'
import { Role } from '@prisma/client'

export const authChecker: AuthChecker<Context> = (
  { context: { userToken } },
  roles
) => {
  if (!userToken) return false

  // check user's role
  if (roles.length === 0) return true
  else if (roles.includes(userToken.role)) return true

  // no roles matched, restrict access
  return false
}

//TODO: add all of the other methods here once determined which ones I need in general
const resolversEnhanceMap: ResolversEnhanceMap = {
  User: {
    updateUser: [Authorized(Role.ADMIN)],
  },
}

applyResolversEnhanceMap(resolversEnhanceMap)
