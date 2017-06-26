'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var newUser = function () {
  function newUser(first_name, last_name) {
    _classCallCheck(this, newUser);

    this.first_name = first_name;
    this.last_name = last_name;
    this.name = first_name + ' ' + last_name;
    this.sayHello();
  }

  _createClass(newUser, [{
    key: 'sayHello',
    value: function sayHello() {
      console.log('Hello my name is ' + this.name);
    }
  }]);

  return newUser;
}();

var newuser = new newUser('To be or', 'Not to be');