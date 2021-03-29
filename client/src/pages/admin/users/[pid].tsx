import { Button, Select, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
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

  if (!data || !data.findFirstUser) {
    return <AdminLayout>Loading...</AdminLayout>
  }

  return (
    <AdminLayout>
      <VStack mt={50}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <Text>ID: {data.findFirstUser.id}</Text>
            <Text>Email: {data.findFirstUser.email}</Text>
            <Text>Username: {data.findFirstUser.username}</Text>
            <Select
              name="role"
              ref={register()}
              defaultValue={data.findFirstUser.role}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </Select>
            <Text>Created At: {data.findFirstUser.created_at}</Text>
            <Text>Updated At: {data.findFirstUser.updated_at}</Text>
            <Button mt={4} isLoading={formState.isSubmitting} type="submit">
              Submit
            </Button>
          </VStack>
        </form>
      </VStack>
    </AdminLayout>
  )
}

export default UserEdit
