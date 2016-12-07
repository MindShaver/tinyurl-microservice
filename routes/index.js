var express = require('express');
var router = express.Router();

var newURL = require('./newURL');

router.get('/', function(req, res, next) {
    res.sendFile('index.html', {root: __dirname});
});

router.get('/:data', newURL);

module.exports = router;