import React from 'react'
import Experiment from '../../components/react-psych/Experiment'
import { mentalFolding } from '../../experiments/react-psych/mentalFolding'

interface ReactPsychProps {}

const reactPsych: React.FC<ReactPsychProps> = ({}) => {
  return <Experiment questions={mentalFolding} />
}

export default reactPsych
