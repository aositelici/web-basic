'use strict'

var TopicFactory = require('../model/topic-factory');

function TopicHelper() {

}

TopicHelper.prototype.getTopics = function (questions) {

  var topics = [];
  var topicFactory = new TopicFactory();

  for (var type in questions) {

    topics.push(topicFactory.getTopic(questions[type]));
  }

  return topics;
}

module.exports = TopicHelper;