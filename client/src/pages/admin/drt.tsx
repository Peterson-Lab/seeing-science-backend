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
} from '@chakra-ui/react'
import React from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { useDrtsQuery } from '../../generated/graphql'
import { createClient } from '../../graphql/createClient'
import { CSVLink } from 'react-csv'

const DrtAdmin: React.FC = () => {
  const rqClient = createClient()
  const { data } = useDrtsQuery(rqClient, { limit: 1000000 })

  if (!data || !data.drtTrialResponses) {
    return <AdminLayout>Loading...</AdminLayout>
  }

  return (
    <AdminLayout>
      <VStack mt={10} spacing={10}>
        <HStack>
          <CSVLink filename="drt.csv" data={data.drtTrialResponses}>
            <Button>Download CSV</Button>
          </CSVLink>
        </HStack>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Participant ID</Th>
              <Th>Question</Th>
              <Th>Answer</Th>
              <Th>Target</Th>
              <Th>Time</Th>
              <Th>Correct</Th>
              <Th>Created At</Th>
              <Th>Updated At</Th>
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
                <Td>{drt.created_at}</Td>
                <Td>{drt.updated_at}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </AdminLayout>
  )
}

export default DrtAdmin
