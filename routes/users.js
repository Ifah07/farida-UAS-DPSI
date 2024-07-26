var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/farida', function(req, res, next) {
  res.send('Welcome, farida2100016027!');
})

module.exports = router;
