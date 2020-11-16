"use strict";

var _pushkinApi = _interopRequireDefault(require("pushkin-api"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.PORT || 3000;
var amqpAddress = process.env.AMQP_ADDRESS || 'amqp://localhost:5672';
var production = process.env.NODE_ENV || false;
console.log('port: ', port, 'amqpAddress: ', amqpAddress, 'production: ', production); //FUBAR

var api = new _pushkinApi["default"].API(port, amqpAddress);
api.init().then(function () {
  // load in user controllers
  var controllersFile = _path["default"].join(__dirname, 'controllers.json');

  var controllers = JSON.parse(_fs["default"].readFileSync(controllersFile));
  Object.keys(controllers).forEach(function (controller) {
    var pathExt = production ? '/' : '/api/';

    var mountPath = _path["default"].join(pathExt, controllers[controller]);

    console.log('mountPath: ', mountPath);

    var contrModule = require(controller);

    console.log("Mounting ", controller);
    api.usePushkinController(mountPath, contrModule);
  });
  api.start();
})["catch"](console.error);