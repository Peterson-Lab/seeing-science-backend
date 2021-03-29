import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { NextChakraImage } from '../../components/NextChakraImage'
import { sleep } from '../../utils/sleep'
import {
  defaultUserResponse,
  ImageQuestionFields,
  TimelineNodeProps,
} from '../types'
import { TimelineNodeError } from '../utils/errors'

export type PracticeSelectImageProps = ImageQuestionFields & {
  timeline?: TimelineNodeProps
}

type showState = 'cross' | 'question' | 'feedback'

export const PracticeSelectImage: React.FC<PracticeSelectImageProps> = ({
  stimulus,
  responses,
  timeline,
  correct,
}) => {
  const [responseStart, setResponseStart] = useState(Date.now())
  const [elementClicked, setElementClicked] = useState(-1)
  const [show, setShow] = useState<showState>('cross')
  const [buttonError, setButtonError] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  // checks that the timeline props were passed.
  if (!timeline) {
    throw new TimelineNodeError()
  }

  const handleClick = (idx: number): void => {
    setElementClicked(idx)
  }

  // handles the user submitting their selection
  const handleResponse = (): void => {
    const isCorrectResponse = elementClicked === correct - 1
    setIsCorrect(isCorrectResponse)
    setShow('feedback')
    // timeline.onFinish(userResponse)
  }

  const handleFeedbackResponse = (): void => {
    const responseEnd = Date.now()

    const responseTime = responseEnd - responseStart

    const userResponse: defaultUserResponse = {
      type: 'practice',
      node: timeline.index,
      response: elementClicked + 1,
      correct: isCorrect,
      time: responseTime,
    }
    timeline.onFinish(userResponse)
  }

  // Saves the time when the question is shown, might want to set this to just active
  useEffect(() => {
    if (show === 'question') {
      setResponseStart(Date.now())
      const maxResponseTime = async (): Promise<void> => {
        await sleep(10000)
        if (show === 'question') setButtonError(true)
      }
      maxResponseTime()
    }
  }, [show])

  // Gives time before telling user to select an option

  // delay for showing cross and then question
  useEffect(() => {
    const waitShow = async (): Promise<void> => {
      await sleep(1000)
      setShow('question')
    }
    if (timeline.isActive) {
      waitShow()
    }
  }, [timeline.isActive])

  let body
  if (show === 'cross') {
    body = (
      <>
        <Text
          textAlign="center"
          alignSelf="center"
          justifySelf="center"
          fontSize="3cm"
          fontWeight="800"
        >
          +
        </Text>
        <Box height="18vh"></Box>
      </>
    )
  } else if (show === 'question') {
    body = (
      <>
        <NextChakraImage
          height="70mm"
          width="70mm"
          src={stimulus}
          quality={100}
          loading="eager"
          priority={true}
        />
        <HStack spacing={15}>
          {responses.map((response, idx) => (
            <Link
              // bgColor="gray.200"
              borderWidth="3px"
              borderRadius="lg"
              p={2}
              _hover={{ boxShadow: 'outline' }}
              boxShadow={elementClicked === idx ? 'outline' : undefined}
              key={idx}
              onClick={() => handleClick(idx)}
            >
              <VStack spacing={4} p={4}>
                <NextChakraImage
                  height="70mm"
                  width="50mm"
                  src={response.answerImage}
                  quality={100}
                  loading="eager"
                  priority={true}
                />
                <Text fontSize="8mm" fontWeight="600">
                  {idx + 1}
                </Text>
              </VStack>
            </Link>
          ))}
        </HStack>
        <VStack spacing={2}>
          {elementClicked === -1 ? (
            <Box height="20mm" width="1px"></Box>
          ) : (
            <Button
              colorScheme="blue"
              onClick={handleResponse}
              mt="10mm"
              size="lg"
              height="15mm"
              width="50mm"
              fontSize="10mm"
              fontWeight="800"
              display={elementClicked !== -1 ? 'flex' : 'none'}
            >
              Next
            </Button>
          )}

          {buttonError ? (
            <Text fontSize="6mm" fontWeight="600">
              Please select one of the options
            </Text>
          ) : null}
        </VStack>
      </>
    )
  } else if (show === 'feedback') {
    body = (
      <>
        <Center>
          <VStack spacing="20mm">
            {isCorrect ? (
              <>
                <CheckIcon boxSize="70px" />
                <Heading fontSize="60px">Correct!</Heading>
              </>
            ) : (
              <>
                <CloseIcon boxSize="70px" />
                <Heading fontSize="60px">Incorrect</Heading>
              </>
            )}
            <Button
              colorScheme="blue"
              mt="10mm"
              size="lg"
              height="15mm"
              width="50mm"
              fontSize="10mm"
              fontWeight="800"
              onClick={handleFeedbackResponse}
            >
              Next
            </Button>
          </VStack>
        </Center>
      </>
    )
  }

  return (
    // hidden images to get Next to preload all of the images when starting the experiment
    // I have no idea why this works but it does!
    <>
      <Box display="none">
        <NextChakraImage
          height="1mm"
          width="1mm"
          src={stimulus}
          quality={100}
          loading="eager"
          priority={true}
        />
        {responses.map((response, idx) => (
          <NextChakraImage
            key={idx}
            height="1mm"
            width="1mm"
            src={response.answerImage}
            quality={100}
            loading="eager"
            priority={true}
          />
        ))}
      </Box>
      {/* The actual shown part. Body starts as just the + and then is rerendered as the question, then the feedback */}
      <VStack
        mt="10mm"
        spacing="20mm"
        display={timeline.isActive ? 'flex' : 'none'}
      >
        {body}
      </VStack>
    </>
  )
}
