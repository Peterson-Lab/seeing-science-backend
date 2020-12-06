export type TextAnswer = {
  answerText: string
}

export type TextQuestionType = {
  prompt: string
  answers: TextAnswer[]
  correct: number
}

export type ImageAnswer = {
  answerImage: string
}

export type ImageQuestionType = {
  prompt: string
  answers: ImageAnswer[]
  correct: number
}

export type questionElement = 'prompt' | 'answers' | 'finish' | null

export type questionReponse = {
  question: number
  response: number
  correct: boolean
}
