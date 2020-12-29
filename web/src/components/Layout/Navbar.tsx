import { Button, Flex, Heading, HStack, Spacer } from '@chakra-ui/react'
import React from 'react'
import { NextChakraImage } from '../NextChakraImage'
import { NextChakraLink } from '../NextChakraLink'

const Navbar: React.FC = () => {
  return (
    <Flex position="sticky" top={0} zIndex={1} bg="green.500">
      <Flex flex={1} m="auto" align="center" my={2}>
        <NextChakraLink
          href="/"
          _hover={{ textDecoration: 'none', boxShadow: 'xs' }}
        >
          <HStack ml={4}>
            <NextChakraImage src="/bdmagnify.png" dimensions={[50, 50]} />
            <Heading color="white" ml={2}>
              Seeing Science
            </Heading>
          </HStack>
        </NextChakraLink>
        <Spacer />
        <HStack spacing={4} mr={4}>
          <NextChakraLink textColor="white" href="/about">
            About
          </NextChakraLink>
          <NextChakraLink textColor="white" href="/participate">
            Participate
          </NextChakraLink>
          <NextChakraLink textColor="white" href="/people">
            People
          </NextChakraLink>
        </HStack>
        <HStack mr={4}>
          <Button>Login</Button>
          <Button>Register</Button>
        </HStack>
      </Flex>
    </Flex>
  )
}

export default Navbar
