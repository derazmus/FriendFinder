var path =require('path');

module.exports= function(app){
//route to home page
	app.get( "/", function(req, res){
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});

//route to survey
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});

	// If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
}