var express = require('express');
var app = express();
var port = process.env.port || 3500;

app.get('/', function(req, res) {
    res.end('hello world');
});

app.listen(port, function(){
    console.log("Server listening on port " + port);
});