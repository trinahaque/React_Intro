"use strict";

function parentFunction(name) {
  var _this = this;

  this.name = name;
  var h1 = document.createElement("h1");
  h1.innerText = "Random Name";
  document.body.appendChild(h1);
  h1.addEventListener("click", function (e) {
    h1.innerText = _this.name;
  });
}