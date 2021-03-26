import { Box, Button, Flex, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useMeQuery } from '../../generated/graphql'
import { createClient } from '../../graphql/createClient'
import Layout from '../Layout/Layout'
import { NextChakraLink } from '../NextChakraLink'

const AdminLayout: React.FC = ({ children }) => {
  const router = useRouter()
  const rqClient = createClient()
  const { data, status } = useMeQuery(rqClient, {}, { staleTime: 360000 })

  let body
  if (status !== 'success') {
    body = <Flex>Loading..</Flex>
  } else if (data?.me?.role !== 'ADMIN') {
    router.push('/login')
  } else {
    body = (
      <>
        <Box
          position="fixed"
          left={0}
          mt={65}
          p={5}
          w="150px"
          top={0}
          h="100%"
          bg="#dfdfdf"
        >
          <VStack>
            <NextChakraLink href={'/admin/users'} w="100%">
              <Button w="100%">Users</Button>
            </NextChakraLink>
            <NextChakraLink href={'/admin/drt'} w="100%">
              <Button w="100%">DRT</Button>
            </NextChakraLink>
          </VStack>
        </Box>
        <Box ml={150}>{children}</Box>
      </>
    )
  }

  return <Layout>{body}</Layout>
}

export default AdminLayout
