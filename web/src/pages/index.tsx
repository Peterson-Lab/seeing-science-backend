import { Box, Stack, Heading, Text, VStack, Flex } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/Layout'

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
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
        spacing="24px"
        m="auto"
        justify="center"
        mt={5}
      >
        <Flex shadow="md" borderWidth="1px" p={5} bg="yellow.200">
          1
        </Flex>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </Stack>
    </Layout>
  )
}

export default Index
