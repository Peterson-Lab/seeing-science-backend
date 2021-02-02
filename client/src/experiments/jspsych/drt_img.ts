interface imageButtonResponse {
  type: string
  stimulus: string
  stimulus_width?: number
  stimulus_height?: number
  maintain_aspect_ratio?: boolean
  choices: string[]
  button_html: string
  prompt?: string
  stimulus_duration?: number
  trial_duration?: number
  margin_vertical?: string
  margin_horizontal?: string
  response_ends_trial?: boolean
  render_on_canvas?: boolean
}

type jsPsychKeyboardResponse = {
  type: string
  stimulus: string
  choices: string[] | number[]
}

const timeline: (imageButtonResponse | jsPsychKeyboardResponse)[] = []

const experimentPath = '/react-psych/DRT'

const instructions = {
  type: 'html-keyboard-response',
  stimulus:
    '<h2 style="font-size:30px; font-weight: bold;">Diagrammatic Representation Test</h2><p>You will be shown a number of objects, select the correct respresentation of the object. Use keys 1-4 to select the right response.</p> <p>Press the spacebar to continue.</p>',
  choices: [32],
}

const createQuestion = (questionNumber: number): imageButtonResponse => {
  return {
    type: 'image-button-response',
    stimulus: `${experimentPath}/question${questionNumber}/stimulus.png`,
    button_html:
      '<button class="jspsych-btn"><img src="%choice%" width="100" /></button>',
    choices: [
      `${experimentPath}/question${questionNumber}/response1.png`,
      `${experimentPath}/question${questionNumber}/response2.png`,
      `${experimentPath}/question${questionNumber}/response3.png`,
      `${experimentPath}/question${questionNumber}/response4.png`,
    ],
  }
}

const createQuestions = (numQuestions: number): imageButtonResponse[] => {
  const questions = []
  for (let i = 1; i <= numQuestions; i++) {
    questions.push(createQuestion(i))
  }
  return questions
}

const finish = {
  type: 'html-keyboard-response',
  stimulus:
    '<h2 style="font-size:30px; font-weight: bold;">Done!</h2> <p>Press the spacebar to go back to the home page.</p>',
  choices: [32],
}
const questions = createQuestions(10)

timeline.push(instructions, ...questions, finish)

export default timeline
