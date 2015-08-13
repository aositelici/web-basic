var express = require('express');
var router = express.Router();
var HomeController = require('../controller/home-controller');
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', HomeController);

module.exports = router;