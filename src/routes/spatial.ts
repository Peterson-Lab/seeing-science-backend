import { PrismaClient } from '.prisma/client'
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  validate,
} from 'class-validator'
import { Express } from 'express'

class SpatialGame {
  @IsNotEmpty({ each: true })
  times: number[]

  @IsInt({ each: true })
  scores: number[]

  @IsInt({ each: true })
  rotations: number[]

  @IsString({ each: true })
  scenes: string[]

  @IsBoolean()
  firstTime: boolean

  @IsBoolean()
  consent: boolean

  @IsString()
  state: string

  @IsInt()
  age: number

  @IsString()
  gender: string

  @IsInt()
  participantID: number

  @IsEmail()
  emailAddress: string
}

export const attachSpatialRoutes = (app: Express, prisma: PrismaClient) => {
  app.post('/spatial-game', async (req, res) => {
    console.log(req.body)
    const game = new SpatialGame()
    game.times = req.body.times
    game.scores = req.body.scores
    game.rotations = req.body.rotations
    game.scenes = req.body.scenes
    game.firstTime = req.body.firstTime
    game.consent = req.body.consent
    game.state = req.body.state
    game.age = req.body.age
    game.gender = req.body.gender
    game.participantID = req.body.participantID
    game.emailAddress = req.body.emailAddress

    const errors = await validate(game)

    if (errors.length > 0) {
      res.statusCode = 500
      res.send(errors)
      return
    }

    prisma.spatialGame.create({
      data: {
        first_time: game.firstTime,
        email_address: game.emailAddress,
        participantId: game.participantID,
        ...game,
      },
    })

    res.statusCode = 200
    res.send('success')
  })
}
