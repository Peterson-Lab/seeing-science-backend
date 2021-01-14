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
  if (roles.length === 0) {
    // if `@Authorized()`, check only if user exists
    return userToken !== undefined
  }
  // there are some roles defined now

  if (!userToken) {
    // and if no user, restrict access
    return false
  }

  // role is in roles list, return true
  if (roles.includes(userToken.role)) return true

  // no roles matched, restrict access
  return false
}

//TODO: add all of the other methods here once determined which ones I need in general
const resolversEnhanceMap: ResolversEnhanceMap = {
  User: {
    updateUser: [Authorized(Role.ADMIN)],
  },
  Experiment: {
    deleteExperiment: [Authorized(Role.ADMIN)],
  },
  Response: {
    deleteResponse: [Authorized(Role.ADMIN)],
  },
}

applyResolversEnhanceMap(resolversEnhanceMap)
