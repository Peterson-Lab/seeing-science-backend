import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '../components/Layout'

const ExperimentWindow = dynamic(
  () => import('../components/jsPsych/jsPsychExperimentWindow'),
  { ssr: false }
)

// const balloon = dynamic(() => import('../experiments/balloon'), { ssr: false })

const ExperimentPage: React.FC = () => {
  const router = useRouter()

  const name = router.query.name

  return (
    <Layout>
      <ExperimentWindow />
    </Layout>
  )

  return <Box>On server</Box>

  return <Box>No Experiment with that name.</Box>
}

export default ExperimentPage
