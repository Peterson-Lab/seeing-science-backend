import { Button, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import ReactPlayer, { ReactPlayerProps } from 'react-player'
import { getResponseTime, useResponseStart } from '../hooks/useResponseStart'
import { TimelineNodeProps } from '../types'
import { TimelineNodeError } from '../utils/errors'

interface VideoScreen {
  timeline?: TimelineNodeProps
  buttonText: string
  url: string
  playerProps?: ReactPlayerProps
}

export const VideoScreen: React.FC<VideoScreen> = ({
  children,
  timeline,
  buttonText,
  url,
  playerProps,
}) => {
  const [videoFinished, setVideoFinished] = useState(false)

  if (!timeline) {
    throw new TimelineNodeError()
  }

  const responseStart = useResponseStart(timeline.isActive)

  const handleResponse = (): void => {
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
    <VStack px={20} spacing={2} textAlign="center">
      {children}
      <ReactPlayer
        url={url}
        controls={true}
        width="80%"
        height="80%"
        onEnded={() => setVideoFinished(true)}
        {...playerProps}
      />
      {videoFinished ? (
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
      ) : null}
    </VStack>
  )
}
