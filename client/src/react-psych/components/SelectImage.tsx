import { Box, Button, HStack, Link, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { NextChakraImage } from '../../components/NextChakraImage'
import { sleep } from '../../utils/sleep'
import {
  defaultUserResponse,
  ImageQuestionFields,
  TimelineNodeProps,
} from '../types'
import { TimelineNodeError } from '../utils/errors'

export type SelectImageProps = ImageQuestionFields & {
  timeline?: TimelineNodeProps
}

const getFileNameFromPath = (str: string): string =>
  str.substring(str.lastIndexOf('/') + 1, str.lastIndexOf('.'))

export const SelectImage: React.FC<SelectImageProps> = ({
  stimulus,
  responses,
  timeline,
  correct,
}) => {
  const [responseStart, setResponseStart] = useState(Date.now())
  const [elementClicked, setElementClicked] = useState(-1)
  const [show, setShow] = useState(false)
  const [buttonError, setButtonError] = useState(false)

  // checks that the timeline props were passed.
  if (!timeline) {
    throw new TimelineNodeError()
  }

  const handleClick = (idx: number): void => {
    setElementClicked(idx)
  }

  // handles the user submitting their selection
  const handleResponse = (): void => {
    const responseEnd = Date.now()

    const responseTime = responseEnd - responseStart

    const isCorrect = elementClicked === correct - 1

    const targetFile = getFileNameFromPath(stimulus)
    const responseFile_1 = getFileNameFromPath(responses[0].answerImage)
    const responseFile_2 = getFileNameFromPath(responses[1].answerImage)
    const responseFile_3 = getFileNameFromPath(responses[2].answerImage)
    const responseFile_4 = getFileNameFromPath(responses[3].answerImage)

    const userResponse: defaultUserResponse = {
      type: 'question',
      node: timeline.index,
      response: elementClicked + 1,
      correct: isCorrect,
      time: responseTime,
      targetFile,
      responseFile_1,
      responseFile_2,
      responseFile_3,
      responseFile_4,
    }
    setShow(false)
    timeline.onFinish(userResponse)
  }
  // Saves the time when the question is shown, might want to set this to just active
  useEffect(() => {
    setResponseStart(Date.now())
  }, [show])

  // Gives time before telling user to select an option
  useEffect(() => {
    const maxResponseTime = async (): Promise<void> => {
      if (show) {
        await sleep(10000)
        setButtonError(true)
      }
    }
    maxResponseTime()
  }, [show])

  // delay for showing cross and then question
  useEffect(() => {
    const waitShow = async (): Promise<void> => {
      await sleep(1000)
      setShow(true)
    }
    if (timeline.isActive) {
      waitShow()
    }
  }, [timeline.isActive])

  let body
  if (!show) {
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
  } else {
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
              mt="5mm"
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
      {/* The actual shown part. Body starts as just the + and then is rerendered as the question */}
      <VStack
        mt="10mm"
        spacing="10mm"
        display={timeline.isActive ? 'flex' : 'none'}
      >
        {body}
      </VStack>
    </>
  )
}
