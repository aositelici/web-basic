var express = require('express');
var data = require('../data.json');
var router = express.Router();
var HomeController = require('../controller/home-controller');
var GetController = require('../controller/get-controller');

var homeController = new HomeController();

router.get('/', homeController.index);

router.post('/', homeController.submit);

module.exports = router;