import React from 'react'
import Experiment from '../../components/react-psych/Experiment'
import { mentalFolding } from '../../experiments/react-psych/mentalFolding'
import { Timeline, ImageQuestion, ImageQuestionProps } from "react-psych"

interface ReactPsychProps {}

const drtFilePath = "react-psych/DRT/question1"

const question1:ImageQuestionProps ={
  stimulus
}


const reactPsych: React.FC<ReactPsychProps> = ({}) => {
  return (
    <Timeline>
      <ImageQuestion stimulus={`${drtFilePath}/stimulus.png`}  />
    </Timeline>
  )
  )
}

export default reactPsych
