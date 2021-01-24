import { Box, Flex, Heading, HStack, Link, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useLogoutMutation, useMeQuery } from '../../generated/graphql'
import { NextChakraImage } from '../NextChakraImage'
import { NextChakraLink } from '../NextChakraLink'

const Navbar: React.FC = () => {
  const [{ data, fetching }] = useMeQuery({})
  const [, logout] = useLogoutMutation()

  let userLogin

  if (fetching) {
    userLogin = null
  } else if (!data?.me) {
    userLogin = (
      <>
        <NextChakraLink textColor="white" fontWeight="600" href="/login">
          Login
        </NextChakraLink>
        <NextChakraLink textColor="white" fontWeight="600" href="/register">
          Register
        </NextChakraLink>
      </>
    )
  } else {
    userLogin = (
      <>
        <Box textColor="white">{data.me.username}</Box>
        <Link textColor="white" onClick={() => logout()} fontWeight="700">
          Logout
        </Link>
      </>
    )
  }

  return (
    <Flex position="sticky" top={0} zIndex={1}>
      <Flex flex={1} m="auto" align="center" bg="green.500" py={2}>
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
      </Flex>
      <HStack bg="green.800" p={4} spacing={5} justify="end" ml="auto">
        {userLogin}
      </HStack>
    </Flex>
  )
}

export default Navbar
