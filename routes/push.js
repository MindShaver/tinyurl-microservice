var mongo = require('mongodb').MongoClient;
var url = "mongodb://MindShaver:bearbear@ds119718.mlab.com:19718/fcc-db"

module.exports = function(docs) {
    mongo.connect(url, function(err, db) {
        if(err) throw err;
        
        var collection = db.collection("tinyUrl");
            
        collection.insert(docs, function(err, results) {
            if(err) throw err;
            
            console.log("Added!");
            db.close();
        })
    })
}