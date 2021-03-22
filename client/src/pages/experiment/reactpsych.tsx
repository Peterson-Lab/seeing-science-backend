import { Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import Layout from '../../components/Layout/Layout'
import { TrialInput, usePostTrialMutation } from '../../generated/graphql'
import { createClient } from '../../graphql/createClient'
import {
  createQuestionList,
  SelectImage,
  TextScreen,
  Timeline,
} from '../../react-psych'
import { BeginScreen } from '../../react-psych/components/BeginScreen'
import { NumberInputScreen } from '../../react-psych/components/NumberInputScreen'
import { defaultUserResponse } from '../../react-psych/types'

const questionList = createQuestionList(
  '/react-psych/DRT',
  10,
  [4, 3, 2, 2, 2, 1, 4, 3, 4, 2],
  4
)

const ReactPsych: React.FC = () => {
  const router = useRouter()
  const rqClient = createClient()
  const { mutateAsync } = usePostTrialMutation(rqClient)

  const [id, setId] = useState(-1)

  const finish = async (responses: defaultUserResponse[]): Promise<void> => {
    console.log(id)
    const data: TrialInput = {
      experiment: 'DRT',
      responses,
      participantId: id,
    }

    const res = await mutateAsync({ data })

    if (res.postTrial.success) {
      console.log('successfully sent trial')
    } else {
      console.log(`failed to send trial`)
      console.log(res.postTrial.errors)
    }

    router.push('/')
  }

  // useEffect(() => {
  //   cacheImages(['/exp/drt/danny.png'])
  // }, [])

  return (
    <Layout>
      <Flex align="center" justify="center">
        <Flex shadow="md" align="center" justify="center" my={5}>
          <Timeline onFinish={finish} size="100">
            <BeginScreen buttonText="Next">
              <VStack spacing={4} mx={10} mb={5} textAlign="center">
                <Heading fontSize="70px">
                  Diagrammatic Representations Test
                </Heading>
                <Text px={60} mb={6}></Text>
              </VStack>
            </BeginScreen>
            <NumberInputScreen
              buttonText="Next"
              fieldLabel="Participant ID"
              fieldPlaceholder="123"
              setNumber={setId}
            >
              <Heading>Enter your Participant ID</Heading>
            </NumberInputScreen>
            <TextScreen buttonText="Next">
              <VStack spacing={8} mx={10} mb={10} textAlign="center">
                <Heading fontSize="60px">Audio Test</Heading>
                <Text px={60} fontSize="25px">
                  Please click the play button below and ensure you can hear the
                  audio clip, then click Next.
                </Text>
                <ReactPlayer
                  url="/react-psych/DRT/instructions/audio_test.mp3"
                  height="50px"
                  controls={true}
                />
              </VStack>
            </TextScreen>
            <TextScreen buttonText="Begin">
              <VStack px={20} spacing={2} textAlign="center">
                <ReactPlayer
                  url="/react-psych/DRT/instructions/DRT_instructions.mp4"
                  controls={true}
                  width="80%"
                  height="80%"
                />
              </VStack>
            </TextScreen>
            <TextScreen buttonText="Next">
              <VStack px={20} spacing={4} textAlign="center">
                <ReactPlayer
                  url="/react-psych/DRT/instructions/DRT_demo.mp4"
                  controls={true}
                  width="80%"
                  height="80%"
                />
              </VStack>
            </TextScreen>
            {questionList.map((q, idx) => {
              return <SelectImage key={idx} {...q} />
            })}
            <TextScreen buttonText="Finish">
              <Heading fontSize="70px">Done!</Heading>
              <Text mb={4} fontSize="25px">
                Click below to return to the home page.
              </Text>
            </TextScreen>
          </Timeline>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default ReactPsych
