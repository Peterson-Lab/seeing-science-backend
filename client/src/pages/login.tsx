import React from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react'
import Layout from '../components/Layout/Layout'
import { LoginInput, useLoginMutation } from '../generated/graphql'
import { createClient } from '../graphql/createClient'
import { useQueryClient } from 'react-query'

const Login: React.FC = () => {
  const router = useRouter()
  const rqClient = createClient()
  const queryClient = useQueryClient()
  const { mutateAsync } = useLoginMutation(rqClient, {
    onSuccess: () => {
      queryClient.invalidateQueries('Me')
    },
  })
  const { register, handleSubmit, errors, formState, setError } = useForm()
  const onSubmit = async (input: LoginInput): Promise<void> => {
    const response = await mutateAsync({ input })
    console.log(response)
    if (response.login.errors) {
      response.login.errors.forEach((err) => {
        setError(err.field, { message: err.message })
      })
    } else if (response.login.user) {
      router.push('/')
    } else {
      console.log('unknown error')
    }
  }
  return (
    <Layout>
      <Box align="center" justify="center" mx="auto" mt={10} maxW="800px">
        <Heading>Login</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mt={4}>
            <FormControl isInvalid={!!errors?.username?.message}>
              <FormLabel>Username or Email</FormLabel>
              <Input
                name="usernameOrEmail"
                placeholder="username or email"
                label="Username or Email"
                ref={register({ required: true })}
              ></Input>
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
          </Box>
          <Box mt={4}>
            <FormControl isInvalid={!!errors?.password?.message}>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                placeholder="password"
                label="Password"
                type="password"
                ref={register({ required: true })}
              ></Input>
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
          </Box>
          <Button mt={4} isLoading={formState.isSubmitting} type="submit">
            Login
          </Button>
        </form>
      </Box>
    </Layout>
  )
}

export default Login
