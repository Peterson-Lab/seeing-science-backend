import { VStack, HStack, Button, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { TextQuestionType } from '../../types'

interface TextQuestionProps {
  question: TextQuestionType
  handleAnswerClick: (answer: number) => void
  loading: boolean
  setQuestionStart: (now: number) => void
}

const TextQuestion: React.FC<TextQuestionProps> = ({
  question,
  handleAnswerClick,
  loading,
  setQuestionStart,
}) => {
  useEffect(() => {
    setQuestionStart(Date.now())
  }, [question, setQuestionStart])
  return (
    <VStack mt={6}>
      <Text>{question.prompt}</Text>
      <HStack spacing={2}>
        {question.answers.map((option, idx) => (
          <Button
            key={idx}
            onClick={() => handleAnswerClick(idx)}
            isLoading={loading}
          >
            {option.answerText}
          </Button>
        ))}
      </HStack>
    </VStack>
  )
}

export default TextQuestion
