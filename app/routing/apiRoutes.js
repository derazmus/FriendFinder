var friendsData = require('../data/friends');

module.exports = function(app){
	app.get('/api/friends', function(req,res){
		res.json(friendsData);
	})

	app.post('/api/friends', function(req,res){

		var bestMatch = {
			name: "",	
			scores: ""
		};

		var userData = req.body;
		var userScores = userData.scores;


		bestMatch.name = userData.name;
		bestMatch.scores = userScores;

		res.json(bestMatch);
	})
}