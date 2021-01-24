import { Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import {
  createQuestionList,
  ImageQuestion,
  TextScreen,
  Timeline,
} from 'react-psych'
import Layout from '../../components/Layout/Layout'
import { NextChakraImage } from '../../components/NextChakraImage'

const questionList = createQuestionList(
  '/react-psych/DRT',
  10,
  [4, 3, 2, 2, 2, 1, 4, 3, 4, 2],
  4
)

const ReactPsych: React.FC = () => {
  const router = useRouter()

  return (
    <Layout>
      <Flex align="center" justify="center">
        <Flex shadow="md" align="center" justify="center" my={5}>
          <Timeline onFinish={() => router.push('/')} size="85">
            <TextScreen buttonText="Start">
              <VStack spacing={4} mx={10} mb={5} textAlign="center">
                <Heading>Diagrammatic Representations Test</Heading>
                <Text px={60} mb={6}>
                  This is Danny - he likes to draw. And he likes to draw things
                  exactly how he sees them, so that his drawings match the real
                  things as closely as possible.
                </Text>
                <NextChakraImage
                  src="/exp/drt/danny.png"
                  dimensions={[640, 400]}
                />
                <VStack px={60} spacing={2} textAlign="center">
                  <Text>
                    He‘s drawing the house exactly how it looks and his drawing
                    matches the house perfectly. This is excellent work!
                  </Text>
                  <Text>
                    So, now I am going to show you some more of Danny’s drawings
                    and I‘ll show you what he tried to draw. Your job in this
                    game is to tell me which one is his best drawing, where he
                    did the best job!
                  </Text>
                </VStack>
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

export default ReactPsych
