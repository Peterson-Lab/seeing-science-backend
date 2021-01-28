import { Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { ExperimentStack } from '../components/ExperimentStack'
import Layout from '../components/Layout/Layout'

const Participate: React.FC = () => {
  return (
    <Layout>
      <Flex justify="center">
        <VStack
          my={5}
          //justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Heading fontSize="3vw">Participate</Heading>
          <Text textAlign="center">
            Get your lab notebooks ready….games, puzzles, activities, drawing
            challenges, and more are coming Spring 2021!
          </Text>
        </VStack>
      </Flex>
      <ExperimentStack />
    </Layout>
  )
}

export default Participate
