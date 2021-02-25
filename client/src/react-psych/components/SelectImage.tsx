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

    const userResponse: defaultUserResponse = {
      node: timeline.index,
      response: elementClicked,
      correct: isCorrect,
      time: responseTime,
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
          fontSize="60px"
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
          height="30vh"
          width="30vw"
          src={stimulus}
          quality={100}
          loading="eager"
          priority={true}
        />
        <HStack spacing={15}>
          {responses.map((response, idx) => (
            <Link
              bgColor="gray.200"
              borderWidth="1px"
              borderRadius="lg"
              p={2}
              _hover={{ boxShadow: 'outline' }}
              boxShadow={elementClicked === idx ? 'outline' : undefined}
              key={idx}
              onClick={() => handleClick(idx)}
            >
              <VStack spacing={4} p={4}>
                <NextChakraImage
                  height="25vh"
                  width="18vw"
                  src={response.answerImage}
                  quality={100}
                  loading="eager"
                  priority={true}
                />
                {/* <Text fontSize={30} fontWeight="600">
                  {idx + 1}
                </Text> */}
              </VStack>
            </Link>
          ))}
        </HStack>
        <VStack spacing={2}>
          {elementClicked === -1 ? (
            <Box height="4vh" width="1px"></Box>
          ) : (
            <Button
              colorScheme="blue"
              onClick={handleResponse}
              mt="3vh"
              size="lg"
              height="5vh"
              width="10vw"
              fontSize="30px"
              fontWeight="800"
              display={elementClicked !== -1 ? 'flex' : 'none'}
            >
              Next
            </Button>
          )}

          {buttonError ? (
            <Text fontSize="20px" fontWeight="600">
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
          height="20vh"
          width="20vw"
          src={stimulus}
          quality={100}
          loading="eager"
          priority={true}
        />
        {responses.map((response, idx) => (
          <NextChakraImage
            key={idx}
            height="15vh"
            width="15vw"
            src={response.answerImage}
            quality={100}
            loading="eager"
            priority={true}
          />
        ))}
      </Box>
      {/* The actual shown part. Body starts as just the + and then is rerendered as the question */}
      <VStack spacing={10} display={timeline.isActive ? 'flex' : 'none'}>
        {body}
      </VStack>
    </>
  )
}
