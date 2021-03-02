import { Button, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { getResponseTime, useResponseStart } from '../hooks/useResponseStart'
import { TimelineNodeProps } from '../types'
import { TimelineNodeError } from '../utils/errors'

interface TextScreen {
  timeline?: TimelineNodeProps
  buttonText: string
  inputKey?: string
}

export const TextScreen: React.FC<TextScreen> = ({
  children,
  timeline,
  buttonText,
  inputKey = ' ',
}) => {
  if (!timeline) {
    throw new TimelineNodeError()
  }

  const responseStart = useResponseStart(timeline.isActive)

  const handleResponse = (): void => {
    const responseTime = getResponseTime(responseStart)
    timeline.onFinish({
      node: timeline.index,
      correct: null,
      response: buttonText,
      time: responseTime,
    })
  }

  useEffect(() => {
    if (timeline.isActive && timeline.keyPressed === inputKey) {
      handleResponse()
    }
  }, [timeline.isActive, timeline.keyPressed, inputKey])

  if (!timeline.isActive) {
    return null
  }

  return (
    <VStack>
      {children}
      <Button
        colorScheme="blue"
        mt="3vh"
        size="lg"
        fontSize="20px"
        fontWeight="600"
        onClick={handleResponse}
      >
        {buttonText}
      </Button>
    </VStack>
  )
}
