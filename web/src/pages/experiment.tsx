import { Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import ImageQuestion from '../components/experiments/ImageQuestion'
import Layout from '../components/Layout'
import { ImageQuestionType, questionElement, questionReponse } from '../types'

//interface ExperimentProps {}

const imageQuestions: ImageQuestionType[] = [
  {
    prompt: '/test1/prompt1/stim.png',
    answers: [
      {
        answerImage: '/test1/prompt1/ans1.png',
      },
      {
        answerImage: '/test1/prompt1/ans2.png',
      },
      {
        answerImage: '/test1/prompt1/ans3.png',
      },
      {
        answerImage: '/test1/prompt1/ans4.png',
      },
    ],
    correct: 2,
  },
  {
    prompt: '/test1/prompt2/stim.png',
    answers: [
      {
        answerImage: '/test1/prompt2/ans1.png',
      },
      {
        answerImage: '/test1/prompt2/ans2.png',
      },
      {
        answerImage: '/test1/prompt2/ans3.png',
      },
      {
        answerImage: '/test1/prompt2/ans4.png',
      },
    ],
    correct: 2,
  },
  {
    prompt: '/test1/prompt3/stim.png',
    answers: [
      {
        answerImage: '/test1/prompt3/ans1.png',
      },
      {
        answerImage: '/test1/prompt3/ans2.png',
      },
      {
        answerImage: '/test1/prompt3/ans3.png',
      },
      {
        answerImage: '/test1/prompt3/ans4.png',
      },
    ],
    correct: 2,
  },
]

const Experiment: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [loading, setLoading] = useState(false)
  const [questionStart, setQuestionStart] = useState(Date.now())
  const [elementShown, setElement] = useState<questionElement>('prompt')
  const [responses, setResponses] = useState<questionReponse[]>([])

  const handleAnswerClick = async (answer: number): Promise<void> => {
    const answerTime = Date.now()

    setElement(null)
    setLoading(true)

    const interval = answerTime - questionStart

    console.log(interval)

    console.log(answer)

    if (imageQuestions[currentQuestion].correct === answer) {
      console.log('correct!')
    }

    const isCorrect = imageQuestions[currentQuestion].correct === answer
    setResponses((responses) => [
      ...responses,
      {
        question: currentQuestion,
        response: answer,
        correct: isCorrect,
      },
    ])

    console.log(responses)

    if (currentQuestion === imageQuestions.length - 1) {
      console.log('last question')
      setElement('finish')
    } else {
      setCurrentQuestion(currentQuestion + 1)
      setLoading(false)
      setElement('prompt')
    }
  }

  if (elementShown === 'finish') {
    return (
      <Layout>
        <Flex justify="center">
          <VStack
            justifyContent="center"
            alignItems="center"
            height="50vh"
            width="60vw"
          >
            <Heading fontSize="4vw">Thanks for playing!</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              feugiat porta turpis ac mattis. Fusce volutpat tempor est eu
              scelerisque.
            </Text>
          </VStack>
        </Flex>
      </Layout>
    )
  }

  return (
    <Layout>
      <Flex m="auto" justify="center" align="center" height="50vh">
        <ImageQuestion
          question={imageQuestions[currentQuestion]}
          handleAnswerClick={handleAnswerClick}
          setQuestionStart={setQuestionStart}
          loading={loading}
          elementShown={elementShown}
          setElementShown={setElement}
        />
      </Flex>
    </Layout>
  )
}

{
  /* <TextQuestion
          question={questions[currentQuestion]}
          handleAnswerClick={handleAnswerClick}
          setQuestionStart={setQuestionStart}
          loading={loading}
        /> */
}

export default Experiment
