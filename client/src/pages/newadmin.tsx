import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import AdminLayout from '../components/admin/AdminLayout'
import Layout from '../components/Layout/Layout'
import { useMeQuery } from '../generated/graphql'
import { createClient } from '../graphql/createClient'

const AdminPanel: React.FC = () => {
  const router = useRouter()
  const rqClient = createClient()
  const { data, status } = useMeQuery(rqClient, {}, { staleTime: 360000 })
  let body

  if (status !== 'success') {
    body = <Flex>Loading..</Flex>
  } else if (data?.me?.role !== 'ADMIN') {
    router.push('/login')
  } else {
    body = <AdminLayout />
  }

  return <Layout>{body}</Layout>
}

export default AdminPanel
