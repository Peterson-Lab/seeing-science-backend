import React from 'react'
import dynamic from 'next/dynamic'
const ExperimentWindow = dynamic(
  () => import('../../components/jsPsych/jsPsychKBResponseExperimentWindow'),
  { ssr: false }
)
import drtimg from '../../experiments/jspsych/drt_img'
import Layout from '../../components/Layout/Layout'

const jspsych: React.FC = () => {
  return (
    <Layout>
      <ExperimentWindow timeline={drtimg} />
    </Layout>
  )
}

export default jspsych
