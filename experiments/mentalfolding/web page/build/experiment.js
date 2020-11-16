"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pushkinJspsych = _interopRequireDefault(require("pushkin-jspsych"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var timeline = [];
var hello_trial = {
  type: 'html-keyboard-response',
  stimulus: 'Hello world!'
};
timeline.push(hello_trial);
var _default = timeline;
exports["default"] = _default;