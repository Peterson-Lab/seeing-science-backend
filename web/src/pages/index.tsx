import { Button, Flex, Heading, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { ExperimentStack } from '../components/ExperimentStack'
import Layout from '../components/Layout/Layout'

//interface indexProps {}

const Index: React.FC = () => {
  return (
    <Layout>
      <Flex justify="center">
        <VStack
          justifyContent="center"
          alignItems="center"
          height="50vh"
          width="60vw"
          spacing={3}
        >
          <Heading fontSize="3vw">
            Play games. Solve puzzles. Do science.
          </Heading>
          <Heading fontSize="2vw">Coming Spring 2021</Heading>
          <Text textAlign="center">
            Welcome to Seeing Science, an online laboratory investigating how
            kids learn science! Seeing Science is a citizen science website
            created by a team of researchers at American University in
            Washington, DC. Through Seeing Science we seek to engage kids,
            teachers, families, and scientists in science education research as
            participants and collaborators. For updates on Seeing Science and
            science education research, enter your email address below to join
            our mailing list and follow us on Twitter
          </Text>{' '}
          <Link>
            <Button>Twitter</Button>
          </Link>
        </VStack>
      </Flex>
      <ExperimentStack />
    </Layout>
  )
}

export default Index
