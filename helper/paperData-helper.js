'use strict';
var data = require('../config/database.json');
function PaperDataHelper() {

}

PaperDataHelper.prototype.getPaperData = function(callback) {

  var mysql = require('mysql');
  var connection = mysql.createConnection(data);

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected');
  });

  var topics = [];

  var select = 'SELECT topics.*,ops.item,ops.title FROM topics LEFT JOIN options ops ON topics.topicId = ops.itemId';
   connection.query(select,function(err,rows) {
    topics = rows;

    var option = [];
    var formatTopics = [];

    for(var i = 0; i < topics.length; i++) {
       if(option[topics[i].topicId]) {
         option[topics[i].topicId].push({item:topics[i].item, describe:topics[i].title});
       }
       else {
         option[topics[i].topicId] = [];
         option[topics[i].topicId].push({item:topics[i].item, describe:topics[i].title});
       }
      formatTopics[topics[i].topicId-1] ={type:topics[i].type, name:topics[i].name, question:topics[i].questions,
      answer:topics[i].answer.split(' '), score:topics[i].score, options:option[topics[i].topicId]};
    }

    callback(formatTopics);
  });



};

module.exports = PaperDataHelper;


