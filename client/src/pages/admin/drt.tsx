import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import { GraphQLClient } from 'graphql-request'
import React, { useEffect, useState } from 'react'
import { CSVLink } from 'react-csv'
import { useInfiniteQuery } from 'react-query'
import AdminLayout from '../../components/admin/AdminLayout'
import { DrtsDocument, DrtsQuery } from '../../generated/graphql'
import { createClient } from '../../graphql/createClient'

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

const fetchDrts = (client: GraphQLClient, limit: number) => {
  return async ({ pageParam = undefined }): Promise<DrtsQuery> =>
    client.request(DrtsDocument, { limit, cursor: pageParam })
}

const DrtAdmin: React.FC = () => {
  const rqClient = createClient()

  const pageLimit = 1000000
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'Drts',
    fetchDrts(rqClient, pageLimit),
    {
      getNextPageParam: (lastPage, _pages) => {
        if (lastPage.drtTrialResponses.length < pageLimit) return undefined

        return {
          id:
            lastPage.drtTrialResponses[lastPage.drtTrialResponses.length - 1]
              .id + 1,
        }
      },
    }
  )

  // const { data } = useDrtsQuery(
  //   rqClient,
  //   { limit: 1000000 },
  //   { staleTime: 300000 }
  // )
  const [csvData, setCsvData] = useState<CSVDataExport[]>([])

  useEffect(() => {
    if (!data || !data.pages) return

    const csv: CSVDataExport[] = []

    data.pages.forEach((page) => {
      page.drtTrialResponses.forEach(
        ({ __typename, id, correct, time, answer, ...trial }) => {
          csv.push({
            trial_id: id,
            ...trial,
            answer,
            time,
            accuracy: correct ? 1 : 0,
          })
        }
      )
    })

    setCsvData(csv)
  }, [data])

  if (!data || !data.pages) {
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
            {data.pages.map((page, _idx) =>
              page.drtTrialResponses.map((drt, idx) => (
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
              ))
            )}
          </Tbody>
        </Table>
        {hasNextPage ? (
          <Button onClick={() => fetchNextPage()}>Load More</Button>
        ) : null}
      </VStack>
    </AdminLayout>
  )
}

export default DrtAdmin
