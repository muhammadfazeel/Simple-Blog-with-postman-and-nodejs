var express = require('express');
var router = express.Router();
var AutherControl = require('../Controller/AutherControl');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/SignUp',AutherControl.SignUp);
router.post('/login',AutherControl.login);
module.exports = router;
