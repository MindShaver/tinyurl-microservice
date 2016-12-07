var mongo = require('mongodb').MongoClient;
var url = "mongodb://MindShaver:bearbear@ds119718.mlab.com:19718/fcc-db"

module.exports = function(docs) {
    mongo.connect(url, function(err, db) {
        if(err) throw err;

        var collection = db.collection("tinyUrl");
        
        collection.findOne({tinyUrl: docs}, function(err, result){
            if(err) throw err;
            
            if(!result) {
                console.log("Nope");
                return("Found nothing here!");
                
            } else {
                console.log("It's here!");
                
                return result.origin;
               
                
            }
        }) 
        db.close();
    })
}