var express = require('express');
var app = express();
var port = process.env.PORT || 3500;
var mongo = require('mongodb').MongoClient;
var url = "mongodb://MindShaver:bearbear@ds119718.mlab.com:19718/fcc-db";
var urlCounter = 0;

app.get('/', function(req, res){
    res.end("Hello World");
});

app.get('/:mini', function(req, res){
    function mini(){
        urlCounter++;
        return +urlCounter;
    }
    
    var jsonOutput = {
        "origin": req.params.mini,
        "miniURL": "https://timestamp-mindshaver.c9users.io/" + mini()
    }
    
    mongo.connect(url, function(err, db){
        if (err) throw err;
        
        var collection = db.collection('tinyUrl');
        collection.insert(jsonOutput, function(err, data) {
            if(err) throw err;
            console.log("Added URL");
            db.close();
        })
        res.send(JSON.stringify(jsonOutput), null, 3);
    })
});

app.listen(port, function(){
    console.log("Server running at " + port);
});