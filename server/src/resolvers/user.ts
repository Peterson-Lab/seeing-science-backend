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
}
