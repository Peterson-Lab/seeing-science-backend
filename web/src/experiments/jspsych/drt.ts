type jsPsychKeyboardResponse = {
  type: string
  stimulus: string
  choices: string[] | number[]
}

const timeline: jsPsychKeyboardResponse[] = []

const experimentPath = '/jsPsych/DRT'

const instructions = {
  type: 'html-keyboard-response',
  stimulus:
    '<h2 style="font-size:30px; font-weight: bold;">Diagrammatic Representation Test</h2><p>You will be shown a number of objects, select the correct respresentation of the object. Use keys 1-4 to select the right response.</p> <p>Press the spacebar to continue.</p>',
  choices: [32],
}

const createQuestion = (questionNumber: number): jsPsychKeyboardResponse => {
  return {
    type: 'html-keyboard-response',
    stimulus: `<img src="${experimentPath}/question${questionNumber}/stimulus.png" width="1000" />`,
    choices: ['1', '2', '3', '4'],
  }
}

const createQuestions = (numQuestions: number): jsPsychKeyboardResponse[] => {
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
