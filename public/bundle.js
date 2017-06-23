/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
throw new Error("Cannot find module \"react\"");

// var React = require('react')
// synonymous

var div = __WEBPACK_IMPORTED_MODULE_0_react___default.a.DOM.div
var h1 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.DOM.h1


var MyTitle = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
  render: function(){
    return (
      div(null,
        h1({style: {color: this.props.color, fontWeight: 'bold'}}, this.props.title)
      )
    )
  }
})

/* harmony default export */ exports["a"] = MyTitle;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
throw new Error("Cannot find module \"react\"");
throw new Error("Cannot find module \"react-dom\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myTitle__ = __webpack_require__(0);




var div = __WEBPACK_IMPORTED_MODULE_0_react___default.a.DOM.div

var MyTitleFactory = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createFactory(__WEBPACK_IMPORTED_MODULE_2__myTitle__["a" /* default */])

var MyFirstComponent = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
  // createClass is blueprint of new type of component
  render: function () {
    return (
      div(null, [
          // React.createElement(MyTitle, null), MyTitleFactory replaces that
          MyTitleFactory({title: "what is prop?", color: 'rebeccapurple'}),
          MyTitleFactory({title: "prop prop", color: 'peru'}),
          MyTitleFactory({title: "ppppppp", color: 'blue'}),
          MyTitleFactory({title: "ha-ha-ha", color: 'green'})
        ]
      )
    )
  }
})
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MyFirstComponent), document.getElementById('app'))


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map