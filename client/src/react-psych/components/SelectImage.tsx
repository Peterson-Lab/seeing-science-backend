import { Button, HStack, Link, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { sleep } from '../../utils/sleep'
import {
  defaultUserResponse,
  ImageQuestionFields,
  TimelineNodeProps,
} from '../types'
import { NextChakraImage } from '../util-components/NextChakraImage'
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

  if (!timeline) {
    throw new TimelineNodeError()
  }

  const handleClick = (idx: number): void => {
    setElementClicked(idx)
  }

  const handleResponse = (): void => {
    if (elementClicked === -1) {
      setButtonError(true)
      return
    }

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

  useEffect(() => {
    setResponseStart(Date.now())
  }, [show])

  useEffect(() => {
    if (timeline.isActive && timeline.keyPressed) {
      const keyNum = parseInt(timeline.keyPressed)
      if (keyNum > 0 && keyNum <= responses.length) {
        handleClick(keyNum - 1)
      }
    }
  }, [timeline.isActive, timeline.keyPressed, responses.length])

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
      <Text
        textAlign="center"
        alignSelf="center"
        justifySelf="center"
        fontSize="50px"
        fontWeight="800"
      >
        +
      </Text>
    )
  } else {
    body = (
      <>
        <NextChakraImage
          height="20vh"
          width="20vw"
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
                  height="15vh"
                  width="15vw"
                  src={response.answerImage}
                  quality={100}
                  loading="eager"
                  priority={true}
                />
                <Text fontSize={30} fontWeight="600">
                  {idx + 1}
                </Text>
              </VStack>
            </Link>
          ))}
        </HStack>
        <VStack spacing={2}>
          <Button colorScheme="blue" onClick={handleResponse}>
            Next
          </Button>
          {buttonError ? <Text>Please select one of the options</Text> : null}
        </VStack>
      </>
    )
  }

  return (
    <VStack spacing={10} display={timeline.isActive ? 'flex' : 'none'}>
      {body}
    </VStack>
  )
}
