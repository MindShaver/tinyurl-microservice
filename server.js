var express = require('express');
var app = express();
var handlebars = require('express-handlebars');
var port = process.env.PORT || 3500;

app.engine('handlebars', handlebars({defaultLayout: 'mainLayout'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

var routes = require('./routes/index');
app.use('/', routes);

app.use(function(req, res){
    res.status(404);
    res.render('404');
});

app.listen(port, function(){
    console.log("Server running on port " + port);
});