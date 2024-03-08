var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('First');
  next();
});

router.get('/', function(req, res, next) {
  console.log('Second');
  res.send('<h1>Hello User</h1>');
});

module.exports = router;
