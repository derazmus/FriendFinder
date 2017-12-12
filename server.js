// Dependencies
// =============================================================
var bodyParser = require('body-parser');
var express = require('express');
var path =require('path');

var app = express();
var PORT = process.env.PORT || 3000;


//THIS IS WHAT IS CHANGED FALSE TO TRUE



// parse application
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())
 
// routes to html pages
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function(){
	console.log("app listening on PORT:" + PORT);
});