import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { NextChakraLink } from '../../components/NextChakraLink'
import { useUsersQuery } from '../../generated/graphql'
import { createClient } from '../../graphql/createClient'

const Users: React.FC = () => {
  const rqClient = createClient()
  // TODO: Pagination
  const [cursor, setCursor] = useState(0)
  const { data } = useUsersQuery(rqClient, { limit: 20 })

  return (
    <AdminLayout>
      <Table>
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
            <NextChakraLink key={idx} href={`/newadmin/users/${user.id}`}>
              <Tr key={idx}>
                <Td>{user.id}</Td>
                <Td>{user.email}</Td>
                <Td>{user.username}</Td>
                <Td>{user.role}</Td>
                <Td>{user.created_at}</Td>
                <Td>{user.updated_at}</Td>
              </Tr>
            </NextChakraLink>
          ))}
        </Tbody>
      </Table>
    </AdminLayout>
  )
}

export default Users
