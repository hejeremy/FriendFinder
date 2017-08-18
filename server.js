var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var methodOverride = require("method-override");

var app = express();
var port = 3000;

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

app.set('port', process.env.PORT || process.argv[2] || port);

app.use(express.static("public"));

app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, function() {
	console.log('App listening on PORT ' + port);
});