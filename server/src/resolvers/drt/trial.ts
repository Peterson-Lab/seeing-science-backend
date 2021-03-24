import {
  Arg,
  Ctx,
  Resolver,
  ObjectType,
  Field,
  InputType,
  Mutation,
} from 'type-graphql'
import { Context } from '../../context'

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
}

@Resolver()
export class TrialResolver {
  @Mutation(() => TrialResponse)
  async postTrial(
    @Arg('data') {answer, correct, participantId, questionId, time}: TrialInput,
    @Ctx() { prisma }: Context
  ): Promise<TrialResponse> {


    await prisma.drtTrialResponse.create({
      data: {
        answer,
        correct,
        participant_id: participantId,
        time,
        question: questionId
      }
    })

    return { success: true }
  }
}
