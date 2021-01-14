import { Ctx, Query, Resolver } from 'type-graphql'
import { User } from '@generated/type-graphql'
import { Context } from '../context'

@Resolver()
export class CustomUserResolver {
  @Query(() => User, { nullable: true })
  async bestUser(@Ctx() { prisma }: Context): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email: 'bob@prisma.io' },
    })
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, prisma }: Context): Promise<User | undefined> {
    // Get the user token from the headers.

    const token = parseInt(req.headers.authorization || '-1')

    // // try to retrieve a user with the token
    const user = await prisma.user.findUnique({ where: { id: token } })
  }
}
