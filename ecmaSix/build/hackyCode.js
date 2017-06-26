"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// backticks

var User = function () {
  function User(name) {
    _classCallCheck(this, User);

    this.name = name;
    this.printName();
  }

  _createClass(User, [{
    key: "printName",
    value: function printName() {
      console.log(this.name);
    }
  }]);

  return User;
}();
// var user = new User("Trina");


// Arrow Function

function NewPerson() {
  var _this = this;

  this.age = 0;
  setInterval(function () {
    _this.age++;
    console.log(_this.age);
  }, 1000);
}
// var newperson = new NewPerson();


// functions with default values
function createUser() {
  var first_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "haha";

  var _this2 = this;

  var last_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "nana";
  var age = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 21;

  this.first_name = first_name;
  this.last_name = last_name;
  this.age = age;
  var printUser = function printUser() {
    console.log("this is " + _this2.first_name + " " + _this2.last_name + " who is " + _this2.age + " years old");
  };
  return printUser();
}

// var user = new createUser();


var UserCreate = function UserCreate() {
  var first_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "haha";

  var _this3 = this;

  var last_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "nana";
  var age = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 21;

  _classCallCheck(this, UserCreate);

  this.first_name = first_name;
  this.last_name = last_name;
  this.age = age;

  // doing this vs this.method()
  var printUser = function printUser() {
    console.log("this is " + _this3.first_name + " " + _this3.last_name + " who is " + _this3.age + " years old");
  };
  return printerUser();
};
// var user = new createUser("Anni", "Nanni", 28);


var arr = [10, 11, 9, 6];
arr = arr.map(function (v) {
  return console.log(v);
});