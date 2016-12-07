var express = require('express');
var app = express();
var port = process.env.PORT || 3500;
var push = require('./push.js');
var validUrl = require('is-url');

app.get('/', function(req, res){
    res.end("Hello World");
});

app.get('/:data', function(req, res){
    if(req.params.data !== "favicon.ico") {
        var newData = "http://" + req.params.data;
        
        if(validUrl(newData)) {
            var newSet = {
            'origin': newData,
            'tinyUrl': "testUrl"
            }
            res.send(JSON.stringify(newSet, null, 3));
            push(newSet);
        } else {
            var badSet = {
                'origin': "Not a valid URL",
                'tinyUrl': "No tinyUrl provided"
            }
            
            res.send(JSON.stringify(badSet, null, 3));
        }
    }     
});

app.listen(port, function(){
    console.log("Server running at " + port);
});