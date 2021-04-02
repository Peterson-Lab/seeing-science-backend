import { ReadStream } from 'fs'
import { GraphQLUpload, FileUpload } from 'graphql-upload'
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Resolver,
} from 'type-graphql'
import { Context } from '../../context'

@InputType()
export class DrawingInput {
  @Field()
  prompt: string

  @Field(() => GraphQLUpload)
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

  @Field(() => Int, { nullable: true })
  id?: number
}

function streamToBuffer(stream: ReadStream): Promise<Buffer> {
  const chunks: Buffer[] = []
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(chunk as Buffer))
    stream.on('error', (err) => reject(err))
    stream.on('end', () => resolve(Buffer.concat(chunks)))
  })
}

@Resolver()
export class DrawingResolver {
  @Mutation(() => DrawingResponse)
  async postDrawing(
    @Arg('prompt') prompt: string,
    @Arg('image', () => GraphQLUpload)
    { createReadStream }: FileUpload,
    @Ctx() { prisma }: Context
  ): Promise<DrawingResponse> {
    // add size checks etc
    const stream = createReadStream()
    const buf = await streamToBuffer(stream)

    const drawing = await prisma.drawing.create({
      data: { prompt, image: buf },
    })

    return {
      success: true,
      id: drawing.id,
    }
  }
}
