function Topic(name, question, options, answer, score) {

  this.name = name;
  this.question = question;
  this.options = options;
  this.answer = answer;
  this.score = score;
  this.input = [];

}

Topic.prototype.setInput = function (input) {

  this.input = (input instanceof Array) ? input : [input];
};

Topic.prototype.mark = function () {

};

module.exports = Topic;