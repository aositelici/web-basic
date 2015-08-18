'use strict';

function InputHelper () {

}

InputHelper.prototype.setExamineeInputs = function(topics,inputs) {

  console.log(topics);
  topics.forEach(function (topic) {

    var examineeInput = inputs[topic.name];

    topic.setInput(examineeInput);
  });
};

module.exports = InputHelper;
