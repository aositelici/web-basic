var express = require('express');
var data = require('../data.json');
var router = express.Router();
var HomeController = require('../controller/home-controller');
var GetController = require('../controller/get-controller');

router.get('/', GetController);

router.post('/', HomeController);

module.exports = router;