// src/index.js
const _ = require('lodash');

function greetAndShowLast(arr) {
  console.log('Hello, Hexlet!');
  return _.last(arr);
}

module.exports = greetAndShowLast;