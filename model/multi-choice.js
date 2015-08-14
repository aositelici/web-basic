'use strict'

var Topic = require('./topic');

function MultiChoice(name, question, options, answer, score) {

  Topic.call(this, name, question, options, answer, score);

}
MultiChoice.prototype = Object.create(Topic.prototype);
MultiChoice.prototype.constructor = MultiChoice;

MultiChoice.prototype.mark = function () {
  var score = (this.input.join('') === this.answer.join('')) ? this.score : 0;
  return score;
}
module.exports = MultiChoice;