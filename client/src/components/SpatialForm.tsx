import { CloseIcon } from '@chakra-ui/icons'
import { VStack } from '@chakra-ui/layout'
import {
  Button,
  FormControl,
  HStack,
  IconButton,
  Textarea,
} from '@chakra-ui/react'
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { usePostSpatialMutation } from '../generated/graphql'
import { createClient } from '../graphql/createClient'

interface Answer {
  answer: string
}
interface FormData {
  ans?: Answer[]
}

const SpatialForm: React.FC = () => {
  const { register, handleSubmit, control, setError, errors } = useForm({
    defaultValues: {
      ans: [{ answer: '' }],
    },
  })
  const rqClient = createClient()

  const { mutateAsync } = usePostSpatialMutation(rqClient)

  const { fields, append, remove } = useFieldArray({ control, name: 'ans' })
  const onSubmit = async (input: FormData): Promise<void> => {
    const answers: string[] = []
    if (!input.ans) {
      setError('ans', {
        type: 'minLength',
        message: `You can't have zero answers!`,
      })
      return
    }

    input.ans.forEach((ans) => {
      if (ans.answer.length > 5) answers.push(ans.answer)
    })
    if (answers.length >= 1) await mutateAsync({ answers })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        {fields.map((item, index) => {
          return (
            <HStack key={item.id}>
              <FormControl isInvalid={!!errors.ans}>
                <Textarea
                  name={`ans[${index}].answer`}
                  ref={register({ required: true, minLength: 5 })}
                  defaultValue={item.value}
                  size="lg"
                  w="50vw"
                />
              </FormControl>
              <IconButton
                icon={<CloseIcon />}
                size="xs"
                aria-label="Delete item"
                colorScheme="red"
                onClick={() => remove(index)}
              />
            </HStack>
          )
        })}
        <HStack>
          <Button type="button" size="md" onClick={() => append({})}>
            Add Another
          </Button>
          <Button type="submit" size="md" bg="green.500" color="white">
            Submit
          </Button>
        </HStack>
      </VStack>
    </form>
  )
}

export default SpatialForm
