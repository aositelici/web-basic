'use strict'

var HomeViewModel = require('../view-models/home-view-model');
var TopicHelper = require('../helper/topic-helper');
var data = require('../data.json');
var MarkerHelper = require('../helper/marker-helper');
var InfoHelper = require('../helper/info-helper');

function HomeController() {

}

HomeController.prototype.setExamineeInputs = function (topics, inputs) {

  topics.forEach(function (topic) {

    var examineeInput = inputs[topic.name];

    topic.setInput(examineeInput);
  })
};

HomeController.prototype.index = function (req, res) {

  var topicHelper = new TopicHelper();
  var topics = topicHelper.getTopics(data.topics);
  var homeViewModel = new HomeViewModel(topics);
  res.render('index', homeViewModel);

};

HomeController.prototype.submit = function (req, res) {

  var topicHelper = new TopicHelper();
  var topics = topicHelper.getTopics(data.topics);
  var userInputs = req.body;

  var homeViewModel = new HomeViewModel(topics, userInputs);
  homeViewModel.setUserInput();
  //this.setExamineeInputs(topics,userInputs);
  var marker = new MarkerHelper();
  homeViewModel.totalScore = marker.getTotalScore(userInputs, topics);

  var infoHelper = new InfoHelper();
  var info = infoHelper.getUserInfo(userInputs);
  homeViewModel.Name = info.name;
  homeViewModel.Class = info.class;
  homeViewModel.Number = info.number;

  if (homeViewModel.Name.length === 0 || homeViewModel.Number.length === 0 || homeViewModel.Class.length === 0) {
    alert('请检查姓名 学号 班级是否输入完整');
  }
  else {
    res.render('index', homeViewModel);
  }
  //this.validate(homeViewModel);

};

HomeController.prototype.validate = function(homeViewModel) {

  if (homeViewModel.Name.length === 0 || homeViewModel.Number.length === 0 || homeViewModel.Class.length === 0) {
    alert('请检查姓名 学号 班级是否输入完整');
  }
  else {
    res.render('index', homeViewModel);
  }
}
module.exports = HomeController;
