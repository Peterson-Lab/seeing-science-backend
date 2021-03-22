import { Heading, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { NextChakraLink } from './NextChakraLink'

export const ExperimentStack: React.FC = () => {
  return (
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
          <Heading>DRT</Heading>
          <Text>Diagrammatic Representation Test</Text>
        </VStack>
      </NextChakraLink>
      <NextChakraLink
        href="/"
        _hover={{ textDecoration: 'none', boxShadow: 'outline' }}
      >
        <VStack shadow="md" p={5}>
          <Heading>Example</Heading>
          <Text>Example example</Text>
        </VStack>
      </NextChakraLink>
    </Stack>
  )
}
