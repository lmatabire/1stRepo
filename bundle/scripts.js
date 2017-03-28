"use strict";

function getRandomNum() {
  var randomNum = Math.floor(Math.random() * (10 - 0) + 1);
  document.getElementById("result").append(randomNum);
};

function changeColor() {
  var colors = ["yellow", "red", "green"];

  setInterval(function () {
    var elem = document.getElementById("result");
    elem.className = colors[Math.floor(Math.random() * colors.length)];
  }, 1000);
};
changeColor();
document.getElementById("button").addEventListener('click', getRandomNum);
