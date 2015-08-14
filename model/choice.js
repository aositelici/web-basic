'use strict'
var Topic = require('./topic');

function Choice(name, question, options, answer, score) {

  Topic.call(this, name, question, options, answer, score);

}
Choice.prototype = Object.create(Topic.prototype);
Choice.prototype.constructor = Choice;

Choice.prototype.setInput = function (input) {
  this.input = input;
};
Choice.prototype.mark = function () {
  var score = (this.input.join('') === this.answer.join('')) ? this.score : 0;

  return score;
}

module.exports = Choice;