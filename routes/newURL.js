var push = require('./push');

module.exports = function newURL(req, res, next) {
    var urlInput = req.params.data;

    if(req.params.data !== "favicon.ico") {
        var dataSet = {
            "origin": urlInput,
            "tinyUrl": "test url"
        }
    
        push(dataSet);
    
        res.send(JSON.stringify(dataSet, null, 3));
    }
}