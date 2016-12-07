var mongo = require('mongodb').MongoClient;
var url = process.env.MONGOLAB_URI;

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