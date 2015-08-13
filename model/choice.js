var Topic = require('./topic');

function Choice(name, question, options, answer, score) {

  Topic.call(this,name, question, options, answer, score);

}
Choice.prototype = Object.create(Topic.prototype);
Choice.prototype.constructor = Choice;

Choice.prototype.setInput = function (input) {
  this.input = input;
};
Choice.prototype.mark = function() {

}

module.exports = Choice;