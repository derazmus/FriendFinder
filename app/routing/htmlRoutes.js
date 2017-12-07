// Dependencies
// =============================================================
var path = require('path');
// Routes
// =============================================================
module.exports = function(app){

// GET request
	app.get('/survey', function (req, res){
		res.sendFile(path.join(_dirname + '/../public/survey.html'))
	});

	// default to home
	app.get(function (req, res){
		res.sendFile(path.join(_dirname + '/../public/home.html'))
	});

}
