import jsPsych from '../libraries/jspsych'
// const experimentConfig = require('./config').default
// const stimArray = require('./stim').default
// const debrief = require('./debrief.js').default
// const consent = require('./consent.js').default

// require('./jspsych-moving-window.js')

const consent =
  '<p>' +
  'Consent text goes here. Please read this consent statement carefully before deciding whether to participate. This research has no known risks or anticipated direct benefits. You will not receive compensation for participating in this experiment. Your participation in this research is completely voluntary. You can end your participation at any time without penalty. Your participation is completely anonymous. By proceeding, you agree to participate in this experiment' +
  '</p>'

const debrief =
  '<p>' +
  "Debrief text goes here. In this study, we are interested in understanding how people's rate of reading varies based on the context and structure of a sentence, and whether or not ambiguous words with multiple meanings are used." +
  '</p>'

const stimArray = [
  {
    sentence:
      'An initial sentence. This is a second sentence. I saw the teacher with eyeglasses on.',
  },
  { sentence: 'An initial sentence. We saw the wooden board in two.' },
  {
    sentence:
      'An initial sentence. They said last Monday there would be an exam.',
  },
  {
    sentence:
      'An initial sentence. The mysterious bark turned out to be from a tree native to New Zealand.',
  },
]

const timeline = []

const welcome = {
  type: 'html-keyboard-response',
  stimulus: consent + '<p>Press spacebar to continue.</p>',
  choices: [32],
}

const instructions = {
  type: 'html-keyboard-response',
  stimulus:
    '<div>You will be reading excerpts of text, using the spacebar to move through words.</div><br/><div>Press spacebar to continue.</div>',
}

const trial = {
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus:
        '<div>Press spacebar when you are ready to read some text.</div>',
    },
    {
      type: 'html-keyboard-response',
      stimulus: 'test',
    },
  ],
  timeline_variables: stimArray,
}

const summary = {
  type: 'html-keyboard-response',
  stimulus: debrief,
  //choices: jsPsych.NO_KEYS,
}

timeline.push(welcome, instructions, trial, summary)

export default timeline
