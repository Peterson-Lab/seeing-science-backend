import { Box, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useMeQuery } from '../generated/graphql'
import { createClient } from '../graphql/createClient'
import { Admin, DataProvider, Resource } from 'react-admin'
import { useDataProvider } from '@ra-data-prisma/dataprovider'
import { drtList } from '../admin/drt'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { UserList } from '../admin/user'

const AdminPanel: React.FC = () => {
  const router = useRouter()

  const rqClient = createClient()
  const { data, status } = useMeQuery(rqClient, {}, { staleTime: 360000 })

  const cache = new InMemoryCache()
  const client = new ApolloClient({
    uri: 'http://localhost:4000/admingql',
    credentials: 'include',
    cache,
  })

  const dataProvider = useDataProvider({
    clientOptions: {
      uri: 'http://localhost:4000/admingql',
    },
    client,
  })
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    if (status !== 'success') return
    if (data?.me?.role === 'ADMIN') {
      setAuthorized(true)
    } else {
      router.push('/login')
    }
  }, [status, data, router])

  const loading = (
    <Layout>
      <Flex>Loading..</Flex>
    </Layout>
  )

  const admin = (
    <Admin dataProvider={dataProvider}>
      <Resource name="User" list={UserList} />
      <Resource name="DrtTrialResponse" list={drtList} />
    </Admin>
  )

  return authorized ? admin : loading
}

export default AdminPanel
