var mongo = require('mongodb').MongoClient;
var url = "mongodb://MindShaver:bearbear@ds119718.mlab.com:19718/fcc-db"

module.exports = function(docs) {
    mongo.connect(url, function(err, db) {
        if(err) throw err;
        
        console.log(docs);
        
        var collection = db.collection("tinyUrl");
        
        collection.fineOne({tinyUrl: docs.tinyUrl}, function(err, result){
            if(err) throw err;
            
            if(!result) {
                console.log("This entry is not in the database");
            }
        }) 
            
        collection.insert(docs, function(err, results) {
            if(err) throw err;
            
            console.log("Added!");
            db.close();
        })
    })
}