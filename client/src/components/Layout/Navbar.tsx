import { Box, Flex, Heading, HStack, Link, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useQueryClient } from 'react-query'
import { useLogoutMutation, useMeQuery } from '../../generated/graphql'
import { createClient } from '../../graphql/createClient'
import { NextChakraImage } from '../NextChakraImage'
import { NextChakraLink } from '../NextChakraLink'

const Navbar: React.FC = () => {
  const rqClient = createClient()
  const queryClient = useQueryClient()
  const { data, isFetching } = useMeQuery(rqClient, {}, { staleTime: 360000 })
  const { mutateAsync: logout } = useLogoutMutation(rqClient, {
    onSuccess: () => {
      queryClient.invalidateQueries('Me')
    },
  })

  let userLogin

  if (isFetching) {
    userLogin = (
      <>
        <Box textColor="white" fontWeight="600">
          Loading...
        </Box>
      </>
    )
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
        <Link textColor="white" onClick={() => logout({})} fontWeight="700">
          Logout
        </Link>
      </>
    )
  }

  return (
    <Flex position="sticky" top={0} zIndex={1} h="65px">
      <Flex flex={1} m="auto" align="center" bg="green.500" py={2} h="65px">
        <NextChakraLink
          href="/"
          _hover={{ textDecoration: 'none', boxShadow: 'xs' }}
        >
          <HStack ml={4}>
            <NextChakraImage src="/bdmagnify.png" width="50px" height="65px" />
            <Heading color="white" ml={2}>
              Seeing Science
            </Heading>
          </HStack>
        </NextChakraLink>
        <Spacer />
        <HStack spacing={4} mr={4}>
          <NextChakraLink textColor="white" href="/citizensciencemonth">
            Citizen Science Month
          </NextChakraLink>
          <NextChakraLink textColor="white" href="/about">
            About
          </NextChakraLink>
          <NextChakraLink textColor="white" href="/participate">
            Participate
          </NextChakraLink>
          <NextChakraLink textColor="white" href="/people">
            People
          </NextChakraLink>
          {data?.me?.role === 'ADMIN' ? (
            <NextChakraLink textColor="white" href="/admin">
              Admin Panel
            </NextChakraLink>
          ) : null}
        </HStack>
      </Flex>
      <HStack
        bg="green.500"
        h="65px"
        px={4}
        spacing={5}
        justify="end"
        ml="auto"
      >
        {userLogin}
      </HStack>
    </Flex>
  )
}

export default Navbar
