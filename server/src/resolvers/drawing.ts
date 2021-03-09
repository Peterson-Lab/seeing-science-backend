import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Resolver,
} from 'type-graphql'
import { GraphQLUpload, FileUpload } from 'graphql-upload'
import { Context } from '../context'

@InputType()
export class DrawingInput {
  @Field()
  prompt: string

  @Field()
  image: FileUpload
}

@ObjectType()
export class DrawingError {
  @Field()
  error: string

  @Field()
  message: string
}

@ObjectType()
class DrawingResponse {
  @Field(() => [DrawingError], { nullable: true })
  errors?: DrawingError[]

  @Field(() => Boolean, { nullable: true })
  success?: boolean
}

@Resolver()
export class DrawingResolver {
  @Mutation(() => DrawingResponse)
  async postDrawing(
    @Arg('data') { prompt, image }: DrawingInput,
    @Ctx() { prisma }: Context
  ) {
    // add size checks etc
    const stream = image.createReadStream()

    const arr = []
    for await (const chunk of stream) {
      arr.push(chunk)
    }
    const buf = Buffer.concat(arr)

    prisma.drawing.create({ data: { prompt, image: buf } })
  }
}
