import { Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { withUrqlClient } from 'next-urql'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import {
  createQuestionList,
  TextScreen,
  Timeline,
  SelectImage,
} from '../../react-psych'
import { defaultUserResponse } from '../../react-psych/types'
import Layout from '../../components/Layout/Layout'
import { NextChakraImage } from '../../components/NextChakraImage'
import { TrialInput, usePostTrialMutation } from '../../generated/graphql'
import { createUrqlClient } from '../../utils/createUrqlClient'
import { cacheImages } from '../../utils/cacheImages'

const questionList = createQuestionList(
  '/react-psych/DRT',
  10,
  [4, 3, 2, 2, 2, 1, 4, 3, 4, 2],
  4
)

const ReactPsych: React.FC = () => {
  const router = useRouter()
  const [, post] = usePostTrialMutation()

  const finish = async (responses: defaultUserResponse[]): Promise<void> => {
    const data: TrialInput = {
      experiment: 'DRT',
      responses,
    }

    const res = await post({ data })

    if (res.data?.postTrial.success) {
      router.push('/')
    } else {
      console.log(res)
      console.log(res.data?.postTrial.errors)
    }
  }

  useEffect(() => {
    cacheImages(['/exp/drt/danny.png'])
  }, [])

  return (
    <Layout>
      <Flex align="center" justify="center">
        <Flex shadow="md" align="center" justify="center" my={5}>
          <Timeline onFinish={finish} size="85">
            <TextScreen buttonText="Next">
              <VStack spacing={4} mx={10} mb={5} textAlign="center">
                <Heading>Diagrammatic Representations Test</Heading>
                <Text px={60} mb={6}></Text>
              </VStack>
            </TextScreen>
            <TextScreen buttonText="Begin">
              <NextChakraImage
                src="/exp/drt/danny.png"
                width={640}
                height={400}
              />
              <VStack px={60} spacing={2} textAlign="center">
                <Text>
                  This is Danny - he likes to draw. And he likes to draw things
                  exactly how he sees them, so that his drawings match the real
                  things as closely as possible.
                </Text>
                <Text>
                  He‘s drawing the house exactly how it looks and his drawing
                  matches the house perfectly. This is excellent work!
                </Text>
              </VStack>
            </TextScreen>
            <TextScreen buttonText="Next">
              <VStack px={60} spacing={2} textAlign="center">
                <Text>
                  So, now I am going to show you some more of Danny’s drawings
                  and I‘ll show you what he tried to draw. Your job in this game
                  is to tell me which one is his best drawing, where he did the
                  best job!
                </Text>
              </VStack>
            </TextScreen>
            {questionList.map((q, idx) => {
              return <SelectImage key={idx} {...q} />
            })}
            <TextScreen buttonText="Finish">
              <Heading>Done!</Heading>
              <Text mb={4}>
                Press the spacebar or click below to return to the home page.
              </Text>
            </TextScreen>
          </Timeline>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default withUrqlClient(createUrqlClient)(ReactPsych)
