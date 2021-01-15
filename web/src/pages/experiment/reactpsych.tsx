import { Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { withUrqlClient } from 'next-urql'
import { useRouter } from 'next/router'
import React from 'react'
import {
  createQuestionList,
  ImageQuestion,
  TextScreen,
  Timeline,
} from 'react-psych'
import { defaultUserResponse } from 'react-psych/dist/types'
import Layout from '../../components/Layout/Layout'
import { TrialInput, usePostTrialMutation } from '../../generated/graphql'
import { createUrqlClient } from '../../utils/createUrqlClient'

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

  return (
    <Layout>
      <Flex align="center" justify="center">
        <Flex shadow="md" align="center" justify="center" my={5}>
          <Timeline onFinish={finish} size="85">
            <TextScreen buttonText="Begin">
              <VStack spacing={4} mx={8} mb={5}>
                <Heading>Diagrammatic Representation Test</Heading>
                <Text align="center">
                  You will be shown a number of objects, select the correct
                  respresentation of the object. Click on the image to select
                  the right response.
                </Text>
                <Text>
                  Press the spacebar or click the button below to begin.
                </Text>
              </VStack>
            </TextScreen>
            {questionList.map((q, idx) => {
              return <ImageQuestion key={idx} {...q} />
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
