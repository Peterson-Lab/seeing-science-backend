import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

const ExperimentPage: React.FunctionComponent = () => {
  const router = useRouter()

  const name = router.query.name
  if (name === 'mentalfolding') {
    return <Box>{name}</Box>
  }

  return <Box>No Experiment with that name.</Box>
}

export default ExperimentPage
