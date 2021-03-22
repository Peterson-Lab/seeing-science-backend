import { VStack } from '@chakra-ui/layout'
import { Box, Button, HStack, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

const SpatialForm: React.FC = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      answer: [''],
    },
  })

  const { fields, append } = useFieldArray({ control, name: 'answer' })
  const onSubmit = async (input: any) => {
    console.log(input)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        {fields.map((item, index) => {
          return (
            <Box key={item.id}>
              <Textarea
                name={`answer[${index}]`}
                ref={register()}
                size="lg"
                w="50vw"
              />
            </Box>
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
