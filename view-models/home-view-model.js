'use strict'

var TopicHelper = require('../helper/topic-helper');
var Fill = require('../model/fill');
var Choice = require('../model/choice');
var MultiChoice = require('../model/multi-choice');
var TrueFalse = require('../model/true-false');
var ShortAnswer = require('../model/short-answer');
function HomeViewModel(topics, inputs) {
  this.topics = topics;
  this.inputs = inputs;
  this.totalScore = '';
  this.Name ='';
  this.Class ='';
  this.Number = '';
}

HomeViewModel.prototype.getFillTopics = function () {
  var topics = [];
  this.topics.forEach(function (topic) {
    if (topic instanceof Fill) {
      topics.push(topic);
    }
  });
  return topics;
};

HomeViewModel.prototype.getChoiceTopics = function () {
  var topics = [];
  this.topics.forEach(function (topic) {
    if (topic instanceof Choice) {
      topics.push(topic);
    }
  });
  return topics;
};

HomeViewModel.prototype.getMultiChoiceTopics = function () {
  var topics = [];
  this.topics.forEach(function (topic) {
    if (topic instanceof MultiChoice) {
      topics.push(topic);
    }
  });
  return topics;
};

HomeViewModel.prototype.getTrueFalseTopics = function () {
  var topics = [];
  this.topics.forEach(function (topic) {
    if (topic instanceof TrueFalse) {
      topics.push(topic);
    }
  });
  return topics;
};

HomeViewModel.prototype.getShortAnswerTopics = function () {
  var topics = [];
  this.topics.forEach(function (topic) {
    if (topic instanceof ShortAnswer) {
      topics.push(topic);
    }
  });
  return topics;
};

HomeViewModel.prototype.setUserInput = function () {

  var _this = this;
  _this.topics.forEach(function (topic) {

    var userInput = _this.inputs[topic.name];

    if (!(userInput instanceof Array)) {
      userInput = [userInput];
    }
    topic.setInput(userInput);
  })
};

module.exports = HomeViewModel;