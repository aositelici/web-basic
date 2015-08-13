var Topic = require('./topic');

function TrueFalse(name, question, options, answer, score) {

  Topic.call(this,name, question, options, answer, score);

}
TrueFalse.prototype = Object.create(Topic.prototype);
TrueFalse.prototype.constructor = TrueFalse;

TrueFalse.prototype.setInput = function (input) {
  this.input = input;
};
TrueFalse.prototype.mark = function() {

}

module.exports = TrueFalse;