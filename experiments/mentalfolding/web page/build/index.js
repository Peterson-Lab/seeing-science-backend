"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _pushkinClient = _interopRequireDefault(require("pushkin-client"));

var _pushkinJspsych = _interopRequireDefault(require("pushkin-jspsych"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _experiment = _interopRequireDefault(require("./experiment"));

var _jsYaml = _interopRequireDefault(require("js-yaml"));

require("./assets/experiment.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var expConfig = _jsYaml["default"].safeLoad(Buffer("ZXhwZXJpbWVudE5hbWU6IG1lbnRhbC1mb2xkaW5nCnNob3J0TmFtZTogbWVudGFsZm9sZGluZwphcGlDb250cm9sbGVyczoKICBtb3VudFBhdGg6IG1lbnRhbGZvbGRpbmcKICBsb2NhdGlvbjogYXBpIGNvbnRyb2xsZXJzCiAgbmFtZTogbXljb250cm9sbGVyCndvcmtlcjoKICBsb2NhdGlvbjogd29ya2VyCiAgc2VydmljZToKICAgIGltYWdlOiBtZW50YWxmb2xkaW5nCiAgICBsaW5rczoKICAgICAgLSBtZXNzYWdlLXF1ZXVlCiAgICAgIC0gdGVzdF9kYgogICAgZW52aXJvbm1lbnQ6CiAgICAgIEFNUVBfQUREUkVTUzogJ2FtcXA6Ly9tZXNzYWdlLXF1ZXVlOjU2NzInCiAgICAgIERCX1VTRVI6IHBvc3RncmVzCiAgICAgIERCX1BBU1M6IGV4YW1wbGUKICAgICAgREJfVVJMOiB0ZXN0X2RiCiAgICAgIERCX05BTUU6IHRlc3RfZGIKd2ViUGFnZToKICBsb2NhdGlvbjogd2ViIHBhZ2UKbWlncmF0aW9uczoKICBsb2NhdGlvbjogbWlncmF0aW9ucwpzZWVkczoKICBsb2NhdGlvbjogJycKZGF0YWJhc2U6IGxvY2FsdGVzdGRiCmxvZ286IGxvZ281MTIucG5nCnRleHQ6IEVudGVyIHlvdXIgZXhwZXJpbWVudCBkZXNjcmlwdGlvbiBoZXJlLgp0YWdsaW5lOiBCZSBhIGNpdGl6ZW4gc2NpZW50aXN0ISBUcnkgdGhpcyBxdWl6LgpkdXJhdGlvbjogJycKcHJvZHVjdGlvbkRCOiBNYWluCg==", "base64"), 'utf8');

var pushkin = new _pushkinClient["default"]();
window.jsPsych = _pushkinJspsych["default"];

var mapStateToProps = function mapStateToProps(state) {
  return {
    userID: state.userInfo.userID
  };
};

var quizComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(quizComponent, _React$Component);

  var _super = _createSuper(quizComponent);

  function quizComponent(props) {
    var _this;

    _classCallCheck(this, quizComponent);

    _this = _super.call(this, props);
    _this.state = {
      loading: true
    };
    return _this;
  }

  _createClass(quizComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startExperiment();
    }
  }, {
    key: "startExperiment",
    value: function () {
      var _startExperiment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var timeline;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  experimentStarted: true
                });

                _pushkinJspsych["default"].data.addProperties({
                  user_id: this.props.userID
                }); //See https://www.jspsych.org/core_library/jspsych-data/#jspsychdataaddproperties


                _context.next = 4;
                return pushkin.connect(this.props.api);

              case 4:
                _context.next = 6;
                return pushkin.prepExperimentRun(this.props.userID);

              case 6:
                _context.next = 8;
                return pushkin.loadScripts(['https://cdn.jsdelivr.net/gh/jspsych/jsPsych@6.0.4/plugins/jspsych-html-keyboard-response.js']);

              case 8:
                timeline = pushkin.setSaveAfterEachStimulus(_experiment["default"]);
                _context.next = 11;
                return _pushkinJspsych["default"].init({
                  display_element: document.getElementById('jsPsychTarget'),
                  timeline: timeline,
                  on_finish: this.endExperiment.bind(this)
                });

              case 11:
                document.getElementById('jsPsychTarget').focus();
                this.setState({
                  loading: false
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function startExperiment() {
        return _startExperiment.apply(this, arguments);
      }

      return startExperiment;
    }()
  }, {
    key: "endExperiment",
    value: function () {
      var _endExperiment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                document.getElementById("jsPsychTarget").innerHTML = "Processing...";
                _context2.next = 3;
                return pushkin.tabulateAndPostResults(this.props.userID, expConfig.experimentName);

              case 3:
                document.getElementById("jsPsychTarget").innerHTML = "Thank you for participating!";

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function endExperiment() {
        return _endExperiment.apply(this, arguments);
      }

      return endExperiment;
    }()
  }, {
    key: "render",
    value: function render() {
      var match = this.props.match;
      return /*#__PURE__*/_react["default"].createElement("div", null, this.state.loading && /*#__PURE__*/_react["default"].createElement("h1", null, "Loading..."), /*#__PURE__*/_react["default"].createElement("div", {
        id: "jsPsychTarget"
      }));
    }
  }]);

  return quizComponent;
}(_react["default"].Component);

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(quizComponent));

exports["default"] = _default;