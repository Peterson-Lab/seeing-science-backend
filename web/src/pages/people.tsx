import { Flex, VStack, Heading, Text, Stack, Box } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/Layout/Layout'

const People: React.FC = () => {
  return (
    <Layout>
      <Flex justify="center">
        <VStack
          my={5}
          //justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Heading fontSize="3vw">People</Heading>
          <Text textAlign="center">
            Seeing Science is created by a team of education and neuroscience
            researchers curious about how kids learn science.
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
        <Box>
          <Text>Person card placeholder</Text>
        </Box>
        <Box>
          <Text>Person card placeholder</Text>
        </Box>
        <Box>
          <Text>Person card placeholder</Text>
        </Box>
      </Stack>
    </Layout>
  )
}

export default People
