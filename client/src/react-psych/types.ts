import { FullScreenHandle } from 'react-full-screen'

export type TextAnswer = {
  answerText: string
}

export type TextQuestionType = {
  prompt: string
  answers: TextAnswer[]
  correct: number
}
//comment

export type ImageResponse = {
  answerImage: string
}

export type ImageQuestionFields = {
  stimulus: string
  responses: ImageResponse[]
  correct: number
}

export type experimentElement = 'question' | 'finish' | 'intro' | null

export type questionState = 'prompt' | 'responses' | null

export type defaultUserResponse = {
  type: 'input' | 'question' | 'practice' | 'instruction'
  node: number
  response: number | string | null
  correct: boolean | null
  time: number | null
  targetFile?: string
  responseFile_1?: string
  responseFile_2?: string
  responseFile_3?: string
  responseFile_4?: string
}

export type TimelineNodeProps = {
  onFinish: (userResponse: defaultUserResponse) => Promise<void>
  isActive: boolean
  index: number
  fullscreen: FullScreenHandle | null
}
