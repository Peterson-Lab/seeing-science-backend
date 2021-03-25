import { Box, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { useMeQuery } from '../generated/graphql'
import { createClient } from '../graphql/createClient'
import { Admin, Resource } from 'react-admin'
import { useDataProvider } from '@ra-data-prisma/dataprovider'
import { UserList } from '../admin/user'
import { dRTList } from '../admin/drt'

const AdminPanel: React.FC = () => {
  const router = useRouter()

  const rqClient = createClient()
  const { data, status } = useMeQuery(rqClient, {}, { staleTime: 360000 })
  const dataProvider = useDataProvider({
    clientOptions: { uri: 'http://localhost:4000/admingql' },
  })

  useEffect(() => {
    if (status === 'success' && data?.me?.role !== 'ADMIN') {
      router.push('/login')
    }
  }, [status, data, router])

  let body
  if (status === 'loading') {
    body = (
      <Layout>
        <Flex>Loading..</Flex>
      </Layout>
    )
  } else {
    body = (
      <Admin dataProvider={dataProvider}>
        {/* <Resource name="User" list={UserList} /> */}
        <Resource name="DrtTrialResponse" list={dRTList} />
      </Admin>
    )
  }

  return body
}

export default AdminPanel
