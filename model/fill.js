'use strict';

var Topic = require('./topic');
var _ = require('lodash');

function Fill(name, question, options, answer, score) {

  Topic.call(this, name, question, options, answer, score);

}
Fill.prototype = Object.create(Topic.prototype);
Fill.prototype.constructor = Fill;

Fill.prototype.mark = function () {
  var score = _.intersection(this.answer, this.input).length * this.score;
  return score;
}

module.exports = Fill;