"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pushkinJspsych = _interopRequireDefault(require("pushkin-jspsych"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var timeline = [];
var welcome = {
  type: 'html-keyboard-response',
  stimulus: '<p>Welcome to the experiment. Please press C to continue.</p>',
  choices: ['c']
};
timeline.push(welcome);
var instructions = {
  type: 'html-keyboard-response',
  stimulus: '<p>You will see two sets of letters displayed in a box, like this:</p>' + '<div class="fixation"><p class="top">HELLO</p><p class="bottom">WORLD</p></div>' + '<p>Press Y if both sets are valid English words. Press N if one or both is not a word.</p>' + '<p>Press Y to continue.</p>',
  choices: ['y']
};
timeline.push(instructions);
var instructions_2 = {
  type: 'html-keyboard-response',
  stimulus: '<p>In this case you would press N</p>' + '<div class="fixation"><p class="top">FOOB</p><p class="bottom">ARTIST</p></div>' + '<p>Press N to continue to the start of the experiment.</p>',
  choices: ['n']
};
timeline.push(instructions_2);
var trials = [{
  word_1: 'SOCKS',
  word_2: 'SHOE',
  both_words: true,
  related: true
}, {
  word_1: 'SLOW',
  word_2: 'FAST',
  both_words: true,
  related: true
}, {
  word_1: 'QUEEN',
  word_2: 'KING',
  both_words: true,
  related: true
}, {
  word_1: 'LEAF',
  word_2: 'TREE',
  both_words: true,
  related: true
}, {
  word_1: 'SOCKS',
  word_2: 'TREE',
  both_words: true,
  related: false
}, {
  word_1: 'SLOW',
  word_2: 'SHOE',
  both_words: true,
  related: false
}, {
  word_1: 'QUEEN',
  word_2: 'FAST',
  both_words: true,
  related: false
}, {
  word_1: 'LEAF',
  word_2: 'KING',
  both_words: true,
  related: false
}, {
  word_1: 'AGAIN',
  word_2: 'PLAW',
  both_words: false,
  related: false
}, {
  word_1: 'BOARD',
  word_2: 'TRUDE',
  both_words: false,
  related: false
}, {
  word_1: 'LIBE',
  word_2: 'HAIR',
  both_words: false,
  related: false
}, {
  word_1: 'MOCKET',
  word_2: 'MEET',
  both_words: false,
  related: false
}, {
  word_1: 'FLAFF',
  word_2: 'PLAW',
  both_words: false,
  related: false
}, {
  word_1: 'BALT',
  word_2: 'TRUDE',
  both_words: false,
  related: false
}, {
  word_1: 'LIBE',
  word_2: 'NUNE',
  both_words: false,
  related: false
}, {
  word_1: 'MOCKET',
  word_2: 'FULLOW',
  both_words: false,
  related: false
}];
var lexical_decision_procedure = {
  timeline: [{
    type: 'html-keyboard-response',
    stimulus: '<div class="fixation"></div>',
    choices: _pushkinJspsych["default"].NO_KEYS,
    trial_duration: 1000
  }, {
    type: 'html-keyboard-response',
    stimulus: function stimulus() {
      return '<div class="fixation"><p class="top">' + _pushkinJspsych["default"].timelineVariable('word_1', true) + '</p><p class="bottom">' + _pushkinJspsych["default"].timelineVariable('word_2', true) + '</p></div>';
    },
    choices: ['y', 'n'],
    data: {
      both_words: _pushkinJspsych["default"].timelineVariable('both_words'),
      related: _pushkinJspsych["default"].timelineVariable('related')
    },
    on_finish: function on_finish(data) {
      var char_resp = _pushkinJspsych["default"].pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);

      if (data.both_words) {
        data.correct = char_resp == 'y';
      } else {
        data.correct = char_resp == 'n';
      }
    }
  }, {
    type: 'html-keyboard-response',
    stimulus: function stimulus() {
      var last_correct = _pushkinJspsych["default"].data.get().last(1).values()[0].correct;

      if (last_correct) {
        return '<div class="fixation correct"></div>';
      } else {
        return '<div class="fixation incorrect"></div>';
      }
    },
    choices: _pushkinJspsych["default"].NO_KEYS,
    trial_duration: 2000
  }],
  timeline_variables: trials,
  randomize_order: true
};
timeline.push(lexical_decision_procedure);
var data_summary = {
  type: 'html-keyboard-response',
  stimulus: function stimulus() {
    var mean_rt_related = _pushkinJspsych["default"].data.get().filter({
      related: true,
      both_words: true,
      correct: true
    }).select('rt').mean();

    var mean_rt_unrelated = _pushkinJspsych["default"].data.get().filter({
      related: false,
      both_words: true,
      correct: true
    }).select('rt').mean();

    return '<p>Average response time for related words: ' + Math.round(mean_rt_related) + 'ms</p>' + '<p>Average response time for unrelated words: ' + Math.round(mean_rt_unrelated) + 'ms</p>';
  },
  choices: _pushkinJspsych["default"].NO_KEYS
};
timeline.push(data_summary);
var _default = timeline;
exports["default"] = _default;