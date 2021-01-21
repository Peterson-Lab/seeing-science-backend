// @ts-nocheck
import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import jsPsych from '../../libraries/jspsych'
import imageButtonResponse from '../../libraries/plugins/image-button-response'

import { jsPsychOptions } from '../../libraries/jsPsychtypes'
import { useRouter } from 'next/router'
import htmlKeyboardResponse from '../../libraries/plugins/html-keyboard-response'

interface ExperimentWindowProps {
  timeline: any[]
}

const ExperimentWindow: React.FC<ExperimentWindowProps> = ({ timeline }) => {
  const router = useRouter()
  const [experimentRunning, setExperimentRunning] = useState(false)

  jsPsych.plugins['image-button-response'] = imageButtonResponse
  jsPsych.plugins['html-keyboard-response'] = htmlKeyboardResponse

  jsPsych.pluginAPI.registerPreload(
    'image-button-response',
    'stimulus',
    'image'
  )

  console.log('jsPsych plugins: ', jsPsych.plugins)

  const endExperiment = async () => {
    setExperimentRunning(false)
    const data = jsPsych.data.get().json()
    console.log(data)
    router.push('/')
  }
  if (experimentRunning) {
    console.log('Experiment Running')
  }

  const startExperiment = async () => {
    setExperimentRunning(true)
    const options: jsPsychOptions = {
      display_element: document.getElementById('jsPsychTarget'),
      timeline,
      on_finish: endExperiment,
    }
    await jsPsych.init(options)
  }

  useEffect(() => {
    startExperiment()
  }, [])

  return (
    <Flex justify="center" align="center" m={10}>
      <div id="jsPsychTarget"></div>
    </Flex>
  )
}

export default ExperimentWindow
