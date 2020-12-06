import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Experiment from '../../components/experiments/Experiment'
import { mentalFolding } from '../../experiments/mentalFolding'

const ExperimentPage: React.FC = () => {
  const router = useRouter()

  const name = router.query.name
  if (name === 'mentalfolding') {
    return <Experiment questions={mentalFolding} />
  }

  return <Box>No Experiment with that name.</Box>
}

export default ExperimentPage
