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
}) => {
  const { register, handleSubmit, setValue } = useForm()
  if (!timeline) {
    throw new TimelineNodeError()
  }

  const responseStart = useResponseStart(timeline.isActive)

  const onSubmit = async (data: NumberFormData): Promise<void> => {
    const responseTime = getResponseTime(responseStart)
    timeline.onFinish({
      node: timeline.index,
      correct: null,
      response: parseInt(data.num),
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
              ref={register({
                required: true,
                name: 'num',
                validateAsNumber: true,
              })}
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
