import React, { useEffect, useState } from 'react'
import jsPsych from '../../libraries/jspsych'
import reading from '../../experiments/jspsych/reading'
import htmlKeyboardResponse from '../../libraries/plugins/html-keyboard-response'
import { jsPsychOptions } from '../../libraries/types'
import { Flex } from '@chakra-ui/react'

interface ExperimentWindowProps {}

const ExperimentWindow: React.FC<ExperimentWindowProps> = ({}) => {
  const [experimentRunning, setExperimentRunning] = useState(false)

  jsPsych.plugins['html-keyboard-response'] = htmlKeyboardResponse

  console.log('jsPsych plugins: ', jsPsych.plugins)

  const endExperiment = async () => {
    setExperimentRunning(false)
    const data = jsPsych.data.get().json()
    console.log(data)
  }

  const startExperiement = async () => {
    setExperimentRunning(true)
    const options: jsPsychOptions = {
      display_element: document.getElementById('jsPsychTarget'),
      timeline: reading,
      on_finish: endExperiment,
    }
    await jsPsych.init(options)
  }

  useEffect(() => {
    startExperiement()
  }, [])

  return (
    <Flex justify="center" align="center" m={10}>
      <div id="jsPsychTarget"></div>
    </Flex>
  )
}

export default ExperimentWindow
