import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/Layout'

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
  return (
    <Layout>
      <Hero />
      <Stack
        direction={['column', 'row']}
        spacing="24px"
        m="auto"
        justify="center"
        mt={5}
      >
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
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
