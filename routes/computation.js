var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  x = Math.random();
  y = Math.sin(x);
  
  res.send(`The sin function applied ${x} is ${y}`);
});

module.exports = router;
let x, y;