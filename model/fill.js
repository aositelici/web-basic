var Topic = require('./topic');

function Fill(name, question, options, answer, score) {

  Topic.call(this,name, question, options, answer, score);

}
Fill.prototype = Object.create(Topic.prototype);
Fill.prototype.constructor = Fill;

Fill.prototype.mark = function() {

}