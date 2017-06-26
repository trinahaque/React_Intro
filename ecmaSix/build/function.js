"use strict";

var _logger = require("./logger");

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hello() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "oscar";

  _logger2.default.debug(name);
}

// default parameters, do not have to worry about undefined input
hello();
hello('goose');

// multiple parameters
function SpreadExample() {
  for (var _len = arguments.length, spread = Array(_len), _key = 0; _key < _len; _key++) {
    spread[_key] = arguments[_key];
  }

  _logger2.default.debug(spread);
  spread.forEach(function (value) {
    _logger2.default.debug(value);
  });
}

SpreadExample(1, 2, 3, 4);
SpreadExample(31, 1);