'use strict';

var TopicFactory = require('../model/topic-factory');

function TopicHelper() {

}

TopicHelper.prototype.getTopics = function (questions) {

  var topics = [];
  var topicFactory = new TopicFactory();

  questions.forEach(function(question) {
    topics.push(topicFactory.getTopic(question));
  })
  return topics;
};

module.exports = TopicHelper;