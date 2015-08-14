var Topic = require('./topic');

function TrueFalse(name, question, options, answer, score) {

  Topic.call(this, name, question, options, answer, score);

}
TrueFalse.prototype = Object.create(Topic.prototype);
TrueFalse.prototype.constructor = TrueFalse;

TrueFalse.prototype.mark = function () {

  var score = (this.input.join('') === this.answer.join('')) ? this.score : 0;
  return score;
}


module.exports = TrueFalse;