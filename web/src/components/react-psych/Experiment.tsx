import { Heading, Button, Flex, VStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { experimentElement, ImageQuestionType } from '../../types'
import Layout from '../Layout/Layout'
import ImageQuestion from './ImageQuestion'

interface ExperimentProps {
  questions: ImageQuestionType[]
}

const Experiment: React.FC<ExperimentProps> = ({ questions }) => {
  const [elementShown, setElement] = useState<experimentElement>('intro')

  const handleIntroClick = async (): Promise<void> => {
    console.log(elementShown)
    setElement('question')
  }

  let body

  if (elementShown === 'intro') {
    body = (
      <>
        <Heading fontSize="4vw">Mental Folding</Heading>
        <Text>
          You will be shown a prompt for 5 seconds, and then 4 possible answers.
          Click on the one you think is correct. Click on the button below when
          you are ready to begin.
        </Text>
        <Button onClick={() => handleIntroClick()} colorScheme="green">
          Begin
        </Button>
      </>
    )
  }

  if (elementShown === 'finish') {
    body = (
      <>
        <Heading fontSize="4vw">Thanks for playing!</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          feugiat porta turpis ac mattis. Fusce volutpat tempor est eu
          scelerisque.
        </Text>
      </>
    )
  }

  if (elementShown === 'question') {
    body = <ImageQuestion questions={questions} setElement={setElement} />
  }

  return (
    <Layout>
      <Flex m="auto" justify="center" align="center" height="75vh">
        <VStack
          shadow="md"
          borderWidth="1px"
          height="60vh"
          width="75vw"
          justify="center"
          align="center"
          spacing={5}
          px={4}
        >
          {body}
        </VStack>
      </Flex>
    </Layout>
  )
}

export default Experiment
