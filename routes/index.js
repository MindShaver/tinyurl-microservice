var express = require('express');
var router = express.Router();

var newURL = require('./newURL');

router.get('/', function(req, res, next) {
    res.send("Hello World");
});

router.get('/:data', newURL);

module.exports = router;