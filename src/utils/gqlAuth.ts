import { AuthChecker, Authorized } from 'type-graphql'
import { Context } from '../context'
import { ResolversEnhanceMap } from '@generated/type-graphql'
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

export const resolversEnhanceMap: ResolversEnhanceMap = {
  User: {
    _all: [Authorized(Role.ADMIN)],
  },
  Drawing: {
    _all: [Authorized(Role.ADMIN)],
  },
  DrtTrialResponse: {
    _all: [Authorized(Role.ADMIN)],
  },
  SpatialActivity: {
    _all: [Authorized(Role.ADMIN)],
  },
}
