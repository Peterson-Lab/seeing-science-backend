import React from 'react'
import { getResponseTime, useResponseStart } from '../hooks/useResponseStart'
import { TimelineNodeProps } from '../types'
import { TimelineNodeError } from '../utils/errors'
import { useForm } from 'react-hook-form'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  VStack,
} from '@chakra-ui/react'

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
    <VStack>
      {children}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <FormControl>
            <FormLabel>{fieldLabel}</FormLabel>
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
              onChange={(valueString) => setValue('num', valueString)}
            >
              <NumberInputField name="num" placeholder={fieldPlaceholder} />
            </NumberInput>
          </FormControl>
          <Button colorScheme="blue" type="submit">
            {buttonText}
          </Button>
        </Box>
      </form>
    </VStack>
  )
}
