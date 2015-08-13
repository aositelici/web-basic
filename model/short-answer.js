var Topic = require('./topic');

function ShortAnswer(name, question, options, answer, score) {

  Topic.call(this,name, question, options, answer, score);

}
ShortAnswer.prototype = Object.create(Topic.prototype);
ShortAnswer.prototype.constructor = ShortAnswer;

ShortAnswer.prototype.setInput = function (input) {
  this.input = input;
}

ShortAnswer.prototype.mark = function() {

}

module.exports = ShortAnswer;