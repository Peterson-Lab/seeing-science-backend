import { Box, Button, VStack } from '@chakra-ui/react'
import React from 'react'
import Layout from '../Layout/Layout'
import { NextChakraLink } from '../NextChakraLink'

const AdminLayout: React.FC = ({ children }) => {
  return (
    <Layout>
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
        </VStack>
      </Box>
      <Box ml={150}>{children}</Box>
    </Layout>
  )
}

export default AdminLayout
