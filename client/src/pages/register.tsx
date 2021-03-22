import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../components/Layout/Layout'
import { RegisterInput, useRegisterMutation } from '../generated/graphql'
import { createClient } from '../graphql/createClient'

const Register: React.FC = () => {
  const router = useRouter()
  const rqClient = createClient()
  const { mutateAsync } = useRegisterMutation(rqClient)
  const { register, handleSubmit, errors, formState, setError } = useForm()
  const onSubmit = async (input: RegisterInput): Promise<void> => {
    const response = await mutateAsync({ input })
    if (response.register.errors) {
      response.register.errors.forEach((err) => {
        setError(err.field, { message: err.message })
      })
    } else if (response.register.user) {
      router.push('/')
    } else {
      console.log('unknown error')
    }
  }
  return (
    <Layout>
      <Box align="center" justify="center" mx="auto" mt={10} maxW="800px">
        <Heading>Register</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mt={4}>
            <FormControl isInvalid={!!errors?.username?.message}>
              <FormLabel>Username</FormLabel>
              <Input
                name="username"
                placeholder="username"
                label="Username"
                ref={register({ required: true })}
              ></Input>
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
          </Box>
          <Box mt={4}>
            <FormControl isInvalid={!!errors?.email?.message}>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                placeholder="email"
                label="Email"
                ref={register({ required: true })}
              ></Input>
              <FormErrorMessage>
                {errors.email && errors.email.message}
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
          <Button
            mt={4}
            //onClick={handleSubmit(onSubmit)}
            isLoading={formState.isSubmitting}
            type="submit"
          >
            Register
          </Button>
        </form>
      </Box>
    </Layout>
  )
}
export default Register
