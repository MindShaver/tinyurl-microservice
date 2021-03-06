var mongo = require('mongodb').MongoClient;
var url = process.env.MONGOLAB_URI;

module.exports = function(docs, cb) {

    mongo.connect(url, function(err, db) {
        if(err) throw err;

        var collection = db.collection("tinyUrl");
        
        collection.findOne({tinyUrl: docs}, function(err, result){
            if(err) throw err;
            
            if(!result) {
                console.log("Nope");
                cb({
                    "origin": "Not a valid URL",
                    "valid": false,
                    "tinyUrl": "Not a valid tinyUrl"
                    });
                    
                db.close();
                
            } else {
                console.log("It's here!");
                cb({
                    "origin": result.origin,
                    "valid": true,
                    "tinyUrl": result.tinyUrl,
                });
                db.close();
            }
        }) 
        db.close();
    })
}