var TopicHelper = require('../helper/topic-helper');
var Fill = require('../model/fill');
var Choice = require('../model/choice');
var MultiChoice = require('../model/multi-choice');
var TrueFalse = require('../model/true-false');
var ShortAnswer = require('../model/short-answer');
function HomeViewModel (topics,inputs) {
  this.topics = topics;
  this.inputs = inputs;
}
HomeViewModel.prototype.getFillTopics = function() {
  var topics = [];
  this.topics.forEach(function(topic) {
    if(topic instanceof Fill){
      topics.push(topic);
    }
  })
  return topics;
}

HomeViewModel.prototype.getChoiceTopics = function() {
  var topics = [];
  this.topics.forEach(function(topic) {
    if(topic instanceof Choice){
      topics.push(topic);
    }
  })
  return topics;
}

HomeViewModel.prototype.getMultiChoiceTopics = function() {
  var topics = [];
  this.topics.forEach(function(topic) {
    if(topic instanceof MultiChoice){
      topics.push(topic);
    }
  })
  return topics;
}

HomeViewModel.prototype.getTrueFalseTopics= function() {
  var topics = [];
  this.topics.forEach(function(topic) {
    if(topic instanceof TrueFalse){
      topics.push(topic);
    }
  })
  return topics;
}

HomeViewModel.prototype.getShortAnswerTopics= function() {
  var topics = [];
  this.topics.forEach(function(topic) {
    if(topic instanceof ShortAnswer){
      topics.push(topic);
    }
  })
  return topics;
}

HomeViewModel.prototype.setUserInput= function() {

  var _this = this;
  _this.topics.forEach(function(topic) {

    var userInput =_this.inputs[topic.name];

    if(!(userInput instanceof Array)) {
      userInput = [userInput];
    }
    topic.setInput(userInput);
  })


}
HomeViewModel.prototype.getScores= function() {
  if (!this.inputs) {

    return '';
  }
  else{

    var scores = 0;
    this.topics.forEach(function(topic) {
      scores += topic.mark();
    })

    return scores;
  }
}

HomeViewModel.prototype.getUserInfo= function() {
  if(this.inputs) {
    return{
      name: this.inputs.name ,
      class: this.inputs.class ,
      number: this.inputs.number ,
      score: this.getScores()
    }
  }
  else{
    return {
      name:'',
      class:'',
      number:'',
      score:''
    }
  }


}
module.exports = HomeViewModel;