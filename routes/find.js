var mongo = require('mongodb').MongoClient;
var url = "mongodb://MindShaver:bearbear@ds119718.mlab.com:19718/fcc-db"

module.exports = function(docs, cb) {

    mongo.connect(url, function(err, db) {
        if(err) throw err;

        var collection = db.collection("tinyUrl");
        
        collection.findOne({tinyUrl: docs}, function(err, result){
            if(err) throw err;
            
            if(!result) {
                console.log("Nope");
                db.close();
                cb("Whoopsie");
                
            } else {
                console.log("It's here!");
                db.close();
                cb(result.origin);
            }
        }) 
    })
}