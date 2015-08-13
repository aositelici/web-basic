var data = require('../data.json');
var Fill = require('./fill');
var Choice = require('./choice');
var MultiChoice = require('./multi-choice');
var TrueFalse = require('./true-false');
var ShortAnswer = require('./short-answer');

function TopicFactory () {

}
TopicFactory.prototype.getTopic = function(topic) {
  if(topic.type === 'fill_in_blanks') {
    return new Fill(topic.name, topic.question, topic.options, topic.answer, topic.score);
  }

  if(topic.type === 'fill_in_blanks') {
    return new Choice(topic.name, topic.question, topic.options, topic.answer, topic.score);
  }

  if(topic.type === 'fill_in_blanks') {
    return new MultiChoice(topic.name, topic.question, topic.options, topic.answer, topic.score);
  }

  if(topic.type === 'fill_in_blanks') {
    return new TrueFalse(topic.name, topic.question, topic.options, topic.answer, topic.score);
  }

  if(topic.type === 'fill_in_blanks') {
    return new ShortAnswer(topic.name, topic.question, topic.options, topic.answer, topic.score);
  }
}