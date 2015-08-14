'use strict'

function MarkerHelper() {

}

MarkerHelper.prototype.getTotalScore = function(inputs,topics) {
  if (!inputs) {

    return '';
  }
  else {

    var score = 0;
    topics.forEach(function (topic) {
      score += topic.mark();
    });

    return score;
  }
}

module.exports = MarkerHelper;
