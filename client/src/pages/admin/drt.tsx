import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
  Button,
  HStack,
  VStack,
  Spacer,
  Heading,
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { DrtTrialResponse, useDrtsQuery } from '../../generated/graphql'
import { createClient } from '../../graphql/createClient'
import { CSVLink } from 'react-csv'
import { format } from 'date-fns'

type CSVDataExport = {
  trial_id: number
  accuracy: 1 | 0
  participant_id: number
  question: number
  target: string
  answer: number
  response_1: string
  response_2: string
  response_3: string
  response_4: string
  time: number
  created_at: string
  updated_at: string
}

const DrtAdmin: React.FC = () => {
  const rqClient = createClient()
  const { data } = useDrtsQuery(rqClient, { limit: 1000000 })
  const [csvData, setCsvData] = useState<CSVDataExport[]>([])

  useEffect(() => {
    if (!data || !data.drtTrialResponses) return
    setCsvData(
      data.drtTrialResponses.map(({ __typename, id, correct, ...trial }) => {// eslint-disable-line

        return { trial_id: id, ...trial, accuracy: correct ? 1 : 0 }
      })
    )
  }, [data])

  if (!data || !data.drtTrialResponses) {
    return <AdminLayout>Loading...</AdminLayout>
  }

  return (
    <AdminLayout>
      <VStack mt={3} spacing={3}>
        <Flex flex={1} w="100%" px="10px">
          <Heading>DRT Trial Responses</Heading>
          <Spacer />
          <HStack>
            {csvData ? (
              <CSVLink filename="drt.csv" data={csvData}>
                <Button>Download CSV</Button>
              </CSVLink>
            ) : null}
          </HStack>
        </Flex>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Trial ID</Th>
              <Th>Participant ID</Th>
              <Th>Question</Th>
              <Th>Answer</Th>
              <Th>Target</Th>
              <Th>Time</Th>
              <Th>Accuracy</Th>
              <Th>Created At</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.drtTrialResponses.map((drt, idx) => (
              <Tr key={idx}>
                <Td>{drt.id}</Td>
                <Td>{drt.participant_id}</Td>
                <Td>{drt.question}</Td>
                <Td>{drt.answer}</Td>
                <Td>{drt.target}</Td>
                <Td>{drt.time}</Td>
                <Td>{drt.correct ? <CheckIcon /> : <CloseIcon />}</Td>
                <Td>{format(new Date(drt.created_at), 'h:mmb LL/dd/yy')}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </AdminLayout>
  )
}

export default DrtAdmin
