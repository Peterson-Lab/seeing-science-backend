import { GraphQLJSONObject } from 'graphql-scalars'
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

  @Field(() => [GraphQLJSONObject])
  responses: Record<string, any>[]

  @Field()
  participantId: number
}

@Resolver()
export class TrialResolver {
  @Mutation(() => TrialResponse)
  async postTrial(
    @Arg('data') { experiment, responses, participantId }: TrialInput,
    @Ctx() { prisma }: Context
  ): Promise<TrialResponse> {
    // TODO: validate responses for that trial. will need custom stuff here
    if (experiment === 'DRT' && responses.length !== 12) {
      return {
        errors: [
          { error: 'Invalid Trial', message: 'Incorrect Number of Responses' },
        ],
      }
    }

    const trial = await prisma.trial.create({
      data: {
        experiment: { connect: { name: experiment } },
        responses,
        participant_id: participantId,
      },
    })

    console.log(trial)

    return { success: true }
  }
}
