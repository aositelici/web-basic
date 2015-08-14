var  HomeViewModel = require('../view-models/home-view-model');
var TopicHelper = require('../helper/topic-helper');
var data = require('../data.json');

function HomeController() {

}

HomeController.prototype.index = function(req,res) {

  var topicHelper = new TopicHelper();
  var topics = topicHelper.getTopics(data.topics);
  var homeViewModel = new HomeViewModel(topics);
  res.render('index', homeViewModel);

};

HomeController.prototype.submit = function(req,res) {

  var topicHelper = new TopicHelper();
  var topics = topicHelper.getTopics(data.topics);
  var userInput = req.body;

  var homeViewModel = new HomeViewModel(topics,userInput);
  homeViewModel.setUserInput();

  res.render('index',homeViewModel);

};
module.exports = HomeController;
