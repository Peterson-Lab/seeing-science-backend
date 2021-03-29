import { Button, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getResponseTime, useResponseStart } from '../hooks/useResponseStart'
import { TimelineNodeProps } from '../types'
import { TimelineNodeError } from '../../react-psych/utils/errors'

interface BeginScreen {
  timeline?: TimelineNodeProps
  buttonText: string
  inputKey?: string
}

export const BeginScreen: React.FC<BeginScreen> = ({
  children,
  timeline,
  buttonText,
}) => {
  const [shownText, setShownText] = useState(buttonText)

  if (!timeline) {
    throw new TimelineNodeError()
  }

  const responseStart = useResponseStart(timeline.isActive)

  useEffect(() => {
    if (timeline.fullscreen) {
      setShownText('Click here to go fullscreen')
    }
  }, [timeline.fullscreen])

  const handleResponse = (): void => {
    if (timeline.fullscreen && !timeline.fullscreen.active) {
      timeline.fullscreen.enter()
      setShownText(buttonText)
      return
    }

    const responseTime = getResponseTime(responseStart)
    timeline.onFinish({
      type: 'instruction',
      node: timeline.index,
      correct: null,
      response: buttonText,
      time: responseTime,
    })
  }

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
        {shownText}
      </Button>
    </VStack>
  )
}
