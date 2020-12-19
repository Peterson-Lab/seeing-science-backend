import React from 'react'
import dynamic from 'next/dynamic'
const ExperimentWindow = dynamic(
  () => import('../../components/jsPsych/jsPsychExperimentWindow'),
  { ssr: false }
)
import drt from '../../experiments/jspsych/drt'
import Layout from '../../components/Layout/Layout'

interface jspsychProps {}

const jspsych: React.FC<jspsychProps> = ({}) => {
  return (
    <Layout>
      <ExperimentWindow timeline={drt} />
    </Layout>
  )
}

export default jspsych
