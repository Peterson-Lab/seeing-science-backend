import { VStack, Text, Select, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import AdminLayout from '../../../components/admin/AdminLayout'
import {
  Role,
  useFindUserByIdQuery,
  useUpdateUserRoleMutation,
} from '../../../generated/graphql'
import { createClient } from '../../../graphql/createClient'

interface EditRole {
  role: string
}

const UserEdit: React.FC = () => {
  const router = useRouter()
  const { pid } = router.query

  const id = parseInt(pid as string)
  const rqClient = createClient()
  const { data } = useFindUserByIdQuery(
    rqClient,
    { id },
    { staleTime: 3600000, enabled: !!id }
  )

  const { mutateAsync } = useUpdateUserRoleMutation(rqClient)
  const { register, handleSubmit, formState } = useForm()

  const onSubmit = async (data: EditRole): Promise<void> => {
    console.log(data)

    const response = await mutateAsync({ id, role: data.role as Role })
    console.log(response)
  }

  return (
    <AdminLayout>
      <VStack>
        <VStack>
          <Text>ID: {data?.findFirstUser?.id}</Text>
          <Text>Email: {data?.findFirstUser?.email}</Text>
          <Text>Username: {data?.findFirstUser?.username}</Text>
          <Text>Role: {data?.findFirstUser?.role}</Text>
          <Text>Created At: {data?.findFirstUser?.created_at}</Text>
          <Text>Updated At: {data?.findFirstUser?.updated_at}</Text>
        </VStack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Select name="role" ref={register()}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </Select>
          <Button mt={4} isLoading={formState.isSubmitting} type="submit">
            Submit
          </Button>
        </form>
      </VStack>
    </AdminLayout>
  )
}

export default UserEdit
