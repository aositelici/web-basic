'use strict'

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var route = require('./routes/router');
//var routes = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.data = require('./data.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));
//app.use('/', routes);
route.setRoutes(app);
app.listen(3000, function () {
  console.log('listening 3000');
})
module.exports = app;