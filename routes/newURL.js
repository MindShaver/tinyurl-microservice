var find = require('./find');
var push = require('./push');
var validate = require('./validate');
var tinyMaker = require('./tinyMaker');

module.exports = function newURL(req, res, next) {
    var urlInput = req.params.data;
    var tiny = tinyMaker(urlInput);

    // We don't want the favicon.ico data
    if(urlInput !== "favicon.ico") {
        var dataSet = {
            "origin": urlInput,
            "tinyUrl": tiny
        }
    // RegEx for valid URLs    
    if(validate(urlInput)) {
        // Do something with our valid URL
        console.log("This is a URL! YAY!");
        console.log(tiny);
        push(dataSet);
        res.end(JSON.stringify(dataSet), null, 3);
        
    } else {
        // Check to see if this is a tiny, error.
        console.log("This is not a URL :'(")
        find(urlInput, function(results) {
            console.log(results);
            res.end(results);
        });
        
    };
    }
}