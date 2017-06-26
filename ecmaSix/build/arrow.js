"use strict";

function parentFunction(name) {
  var _this = this;

  this.name = name;
  var childFunction = function childFunction() {
    console.log(_this.name);
  };
  return childFunction();
}

var oscar = new parentFunction("oscar");

var arr = [1, 3, 4, 6, 7];
arr = arr.map(function (v) {
  return v * 2;
});
console.log(arr);