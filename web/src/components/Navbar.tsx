import { Button, Flex, Heading, HStack, Spacer } from '@chakra-ui/react'
import React from 'react'
import { NextChakraImage } from './NextChakraImage'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Flex position="sticky" top={0} zIndex={1} bg="green.500">
      <Flex flex={1} m="auto" align="center" my={2}>
        <HStack ml={4}>
          <NextChakraImage src="/placeholder.png" dimensions={[50, 50]} />
          <Heading ml={2}>Seeing Science</Heading>
        </HStack>
        <Spacer />
        <HStack mr={4}>
          <Button>Login</Button>
          <Button>Register</Button>
        </HStack>
      </Flex>
    </Flex>
  )
}

export default Navbar
