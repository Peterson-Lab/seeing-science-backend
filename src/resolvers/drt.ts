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
  answer: number

  @Field()
  correct: boolean

  @Field()
  time: number

  @Field()
  questionId: number

  @Field()
  participantId: number

  @Field()
  target: string

  @Field()
  response_1: string
  @Field()
  response_2: string
  @Field()
  response_3: string
  @Field()
  response_4: string
}

@Resolver()
export class TrialResolver {
  @Mutation(() => TrialResponse)
  async postTrial(
    @Arg('data') { participantId, questionId, ...data }: TrialInput,
    @Ctx() { prisma }: Context
  ): Promise<TrialResponse> {
    await prisma.drtTrialResponse.create({
      data: {
        participant_id: participantId,
        question: questionId,
        ...data,
      },
    })

    return { success: true }
  }
}
