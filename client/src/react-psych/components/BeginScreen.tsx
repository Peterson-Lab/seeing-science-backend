import { Button, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getResponseTime, useResponseStart } from '../hooks/useResponseStart'
import { TimelineNodeProps } from '../types'
import { TimelineNodeError } from '../utils/errors'

interface BeginScreen {
  timeline?: TimelineNodeProps
  buttonText: string
  inputKey?: string
}

export const BeginScreen: React.FC<BeginScreen> = ({
  children,
  timeline,
  buttonText,
  inputKey = ' ',
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
  }, [])

  const handleResponse = (): void => {
    if (timeline.fullscreen && !timeline.fullscreen.active) {
      timeline.fullscreen.enter()
      setShownText(buttonText)
      return
    }

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
      <Button colorScheme="blue" onClick={handleResponse}>
        {shownText}
      </Button>
    </VStack>
  )
}
