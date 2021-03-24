import {
  Button,
  FormControl,
  NumberInput,
  NumberInputField,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { getResponseTime, useResponseStart } from '../hooks/useResponseStart'
import { TimelineNodeProps } from '../types'
import { TimelineNodeError } from '../utils/errors'

interface NumberInputScreen {
  timeline?: TimelineNodeProps
  buttonText: string
  fieldLabel: string
  fieldPlaceholder: string
  setNumber?: (n: number) => void
}

interface NumberFormData {
  num: string
}

export const NumberInputScreen: React.FC<NumberInputScreen> = ({
  children,
  timeline,
  buttonText,
  fieldLabel,
  fieldPlaceholder,
  setNumber,
}) => {
  const { register, handleSubmit, setValue, setError } = useForm()
  if (!timeline) {
    throw new TimelineNodeError()
  }

  const responseStart = useResponseStart(timeline.isActive)

  const onSubmit = async (data: NumberFormData): Promise<void> => {
    const responseTime = getResponseTime(responseStart)
    const number = parseInt(data.num)
    if (isNaN(number)) {
      setError('num', { type: 'required' })
      return
    }

    if (setNumber) setNumber(number)

    timeline.onFinish({
      type: 'input',
      node: timeline.index,
      correct: null,
      response: number,
      time: responseTime,
    })
  }

  if (!timeline.isActive) {
    return null
  }

  return (
    <VStack spacing={5}>
      {children}
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={3}>
          <FormControl>
            <NumberInput
              label={fieldLabel}
              type="number"
              ref={
                register({
                  required: true,
                  name: 'num',
                  validateAsNumber: true,
                }) as undefined
              }
              size="lg"
              w="20vw"
              onChange={(valueString) => setValue('num', valueString)}
            >
              <NumberInputField name="num" placeholder={fieldPlaceholder} />
            </NumberInput>
          </FormControl>
          <Button
            colorScheme="blue"
            size="lg"
            height="4vh"
            width="10vw"
            fontSize="25px"
            fontWeight="800"
            type="submit"
          >
            {buttonText}
          </Button>
        </VStack>
      </form>
    </VStack>
  )
}
