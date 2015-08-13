var  HomeViewModel = require('../view-models/home-view-model');
var TopicHelper = require('../helper/topic-helper');
var data = require('../data.json');

function HomeController(req,res) {
  var topicHelper = new TopicHelper();
  var topics = topicHelper.getTopics(data.topics);
  var userInput = req.body;
  console.log(userInput);
  var homeViewModel = new HomeViewModel(topics,userInput);
  homeViewModel.setUserInput();
  console.log(homeViewModel.getShortAnswerTopics());
  res.render('index',homeViewModel);

}
module.exports = HomeController;
