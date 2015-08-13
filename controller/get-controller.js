var  HomeViewModel = require('../view-models/home-view-model');
var TopicHelper = require('../helper/topic-helper');
var data = require('../data.json');

function GetController(req,res) {

  var topicHelper = new TopicHelper();
  var topics = topicHelper.getTopics(data.topics);
  var homeViewModel = new HomeViewModel(topics);
  res.render('index',homeViewModel );


}
module.exports = GetController;
