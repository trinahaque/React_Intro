"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jsLogger = require("js-logger");

var _jsLogger2 = _interopRequireDefault(_jsLogger);

var _colors = require("colors");

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jsLogger2.default.useDefaults({
  formatter: function formatter(messages, context) {
    messages.map(function (value, index) {
      console.log(typeof value === "undefined" ? "undefined" : _typeof(value));
      if (typeof value == "string") {
        return messages[index] = value.red;
      }

      // else if ()
      // set logger debug green
      // set logger warn orange
      return;
    });
    messages.unshift(new Date().toLocaleTimeString().green);
  }
});
exports.default = _jsLogger2.default;