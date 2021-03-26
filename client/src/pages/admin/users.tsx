import {
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Spacer,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { NextChakraLink } from '../../components/NextChakraLink'
import { useUsersQuery } from '../../generated/graphql'
import { createClient } from '../../graphql/createClient'
import NextLink from 'next/link'

const Users: React.FC = () => {
  const rqClient = createClient()
  // TODO: Pagination
  const [cursor, setCursor] = useState(0)
  const { data } = useUsersQuery(rqClient, { limit: 20 })

  return (
    <AdminLayout>
      <VStack mt={3} spacing={3}>
        <Flex flex={1} w="100%" px="10px">
          <Heading>Users</Heading>
          <Spacer />
          <HStack></HStack>
        </Flex>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Email</Th>
              <Th>Username</Th>
              <Th>Role</Th>
              <Th>Created At</Th>
              <Th>Updated At</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.users.map((user, idx) => (
              // <NextChakraLink key={idx} href={`/newadmin/users/${user.id}`}>
              <Link key={idx} as={NextLink} href={`/admin/users/${user.id}`}>
                <Tr _hover={{ boxShadow: 'md' }}>
                  <Td>{user.id}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.username}</Td>
                  <Td>{user.role}</Td>
                  <Td>{user.created_at}</Td>
                  <Td>{user.updated_at}</Td>
                </Tr>
              </Link>
              // </NextChakraLink>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </AdminLayout>
  )
}

export default Users
