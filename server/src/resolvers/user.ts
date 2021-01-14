import {
  Arg,
  Authorized,
  Ctx,
  Mutation,
  ObjectType,
  Query,
  registerEnumType,
  Resolver,
} from 'type-graphql'
import { User } from '@generated/type-graphql'
import { Context } from '../context'
import argon2 from 'argon2'
import { Field, InputType } from 'type-graphql'
import { validateRegister } from '../utils/validateRegister'
import { clearToken, setToken } from '../utils/jwt'
@InputType()
export class LoginInput {
  @Field()
  usernameOrEmail: string

  @Field()
  password: string
}

@InputType()
export class RegisterInput {
  @Field()
  email: string

  @Field()
  username: string

  @Field()
  password: string
}

@ObjectType()
export class FieldError {
  @Field()
  field: string

  @Field()
  message: string
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[]

  @Field(() => User, { nullable: true })
  user?: User
}

enum RoleEnum {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

registerEnumType(RoleEnum, { name: 'RoleEnum', description: 'User Role' })
@InputType()
export class RoleInput {
  @Field()
  email: string

  @Field(() => RoleEnum)
  role: RoleEnum
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async bestUser(@Ctx() { prisma }: Context): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email: 'bob@prisma.io' },
    })
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { prisma, userToken }: Context): Promise<User | undefined> {
    // Get the user token from the headers.
    if (!userToken) return undefined

    // // try to retrieve a user with the token
    const user = await prisma.user.findUnique({ where: { id: userToken.id } })

    if (!user) return undefined

    return user
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg('input') input: RegisterInput,
    @Ctx() { req, res, prisma, userToken }: Context
  ): Promise<UserResponse> {
    if (userToken)
      return { errors: [{ field: 'none', message: 'Already logged in' }] }

    const errors = validateRegister(input)
    if (errors) {
      return { errors }
    }

    const hashedPass = await argon2.hash(input.password)

    const user = await prisma.user.create({
      data: {
        email: input.email,
        password: hashedPass,
        username: input.username,
      },
    })

    if (!user) {
      return { errors: [{ field: 'none', message: 'Server Error' }] }
    }

    setToken(user, res)

    return { user }
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('input') input: LoginInput,
    @Ctx() { req, res, prisma, userToken }: Context
  ): Promise<UserResponse> {
    if (userToken)
      return { errors: [{ field: 'none', message: 'Already logged in' }] }

    const user = await prisma.user.findUnique({
      where: input.usernameOrEmail.includes('@')
        ? { email: input.usernameOrEmail }
        : { username: input.usernameOrEmail },
    })

    if (!user) {
      return {
        errors: [{ field: 'username', message: 'Invalid Login' }],
      }
    }

    const valid = await argon2.verify(user.password, input.password)
    if (!valid) {
      return {
        errors: [{ field: 'password', message: 'Invalid Login' }],
      }
    }

    setToken(user, res)

    return { user }
  }

  @Authorized()
  @Mutation(() => Boolean)
  async logout(@Ctx() { res }: Context): Promise<boolean> {
    clearToken(res)
    return true
  }

  @Authorized(['ADMIN'])
  @Mutation(() => UserResponse)
  async setRole(
    @Arg('input') input: RoleInput,
    @Ctx() { prisma, userToken, res }: Context
  ): Promise<UserResponse> {
    // two select queries and one update, can we simplify later?
    const user = await prisma.user.update({
      where: { email: input.email },
      data: { role: input.role },
    })

    if (!user) return { errors: [{ field: 'none', message: 'Server Error' }] }

    if (user.id === userToken?.id) {
      clearToken(res)
    }

    return { user }
  }

  //TODO: change/forgot pw
}
