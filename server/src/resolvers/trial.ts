import GraphQLJSON from 'graphql-type-json'
import { stringify } from 'querystring'
import {
  Arg,
  Ctx,
  Resolver,
  ObjectType,
  Field,
  InputType,
  Mutation,
} from 'type-graphql'
import { Context } from '../context'

@ObjectType()
export class TrialError {
  @Field()
  error: string

  @Field()
  message: string
}

@ObjectType()
class TrialResponse {
  @Field(() => [TrialError], { nullable: true })
  errors?: TrialError[]

  @Field(() => Boolean, { nullable: true })
  success?: boolean
}

@InputType()
export class TrialInput {
  @Field()
  experiment: string

  @Field(() => [GraphQLJSON])
  responses: Record<string, any>[]
}

@Resolver()
export class TrialResolver {
  @Mutation(() => TrialResponse)
  async postTrial(
    @Arg('data') { experiment, responses }: TrialInput,
    @Ctx() { prisma, userToken }: Context
  ): Promise<TrialResponse> {
    // validate responses for that trial. will need custom stuff here
    if (experiment === 'DRT' && responses.length !== 12) {
      return {
        errors: [
          { error: 'Invalid Trial', message: 'Incorrect Number of Responses' },
        ],
      }
    }

    let user = undefined
    if (userToken) {
      user = { connect: { id: userToken.id } }
    }

    const trial = await prisma.trial.create({
      data: { experiment: { connect: { name: experiment } }, responses, user },
    })

    console.log(trial)

    return { success: true }
  }
}
