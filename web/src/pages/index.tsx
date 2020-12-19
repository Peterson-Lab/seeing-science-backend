import { Flex, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/Layout/Layout'
import { NextChakraLink } from '../components/NextChakraLink'

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
        >
          <Heading fontSize="4vw">Welcome to Seeing Science!</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            feugiat porta turpis ac mattis. Fusce volutpat tempor est eu
            scelerisque.
          </Text>
        </VStack>
      </Flex>
      <Stack
        direction={['column', 'row']}
        spacing={8}
        m="auto"
        justify="center"
        mt={5}
      >
        <NextChakraLink
          href="/experiment/reactpsych"
          _hover={{ textDecoration: 'none', boxShadow: 'outline' }}
        >
          <VStack shadow="md" p={5}>
            <Heading>React-Psych DRT</Heading>
            <Text>Diagrammatic Representation Test built with React-Psych</Text>
          </VStack>
        </NextChakraLink>
        <NextChakraLink
          href="/experiment/jspsych"
          _hover={{ textDecoration: 'none', boxShadow: 'outline' }}
        >
          <VStack shadow="md" p={5}>
            <Heading>jsPsych DRT</Heading>
            <Text>Diagrammatic Representation Test built with jsPsych</Text>
          </VStack>
        </NextChakraLink>
      </Stack>
    </Layout>
  )
}

export default Index
