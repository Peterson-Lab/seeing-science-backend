"use strict";

var _pushkinApi = _interopRequireDefault(require("pushkin-api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db_read_queue = 'mentalfolding_quiz_dbread'; // simple endpoints

var db_write_queue = 'mentalfolding_quiz_dbwrite'; // simple save endpoints (durable/persistent)

var task_queue = 'mentalfolding_quiz_taskworker'; // for stuff that might need preprocessing

var myController = new _pushkinApi["default"].ControllerBuilder();
myController.setDefaultPasses(db_read_queue, db_write_queue, task_queue);
module.exports = myController;