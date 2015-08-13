var Topic = require('./topic');

function MultiChoice(name, question, options, answer, score) {

  Topic.call(this,name, question, options, answer, score);

}
MultiChoice.prototype = Object.create(Topic.prototype);
MultiChoice.prototype.constructor = MultiChoice;

MultiChoice.prototype.mark = function() {

}
module.exports = MultiChoice;