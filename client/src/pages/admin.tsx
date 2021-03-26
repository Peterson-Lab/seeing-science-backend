import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'

const AdminPanel: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/admin/users')
  }, [])

  return <Layout></Layout>
  // const rqClient = createClient()
  // const { data, status } = useMeQuery(rqClient, {}, { staleTime: 360000 })
  // let body

  // if (status !== 'success') {
  //   body = <Flex>Loading..</Flex>
  // } else if (data?.me?.role !== 'ADMIN') {
  //   router.push('/login')
  // } else {
  //   body = <AdminLayout />
  // }

  // return <Layout>{body}</Layout>
}

export default AdminPanel
