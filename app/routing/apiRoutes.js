// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends etc.
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out the survey... this data is then sent to the server...
  // Then the server saves the data to the friends array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they successfully posted the survey.
    // console.log("---------------------");
    // console.log(req.body);
  

    var compareArray = [];

    for (var i = 0; i < friends.length; i++) {
        var totalDif = 0;
        if (friends[i].name != req.body.name ) {
          for (var j = 0; j < 10; j++) {


            //CHANGED VAR SCORES TO SCORE AND USED PARSEINT

            var dif = Math.abs(parseInt(req.body.scores[j]) - parseInt(friends[i].score[j]));
            totalDif+= dif;
          };





          //KEY/VALUE IS PHOTO NOT PHOTOURL

          compareArray.push({name: friends[i].name,
                              sum: totalDif,
                         photoUrl: friends[i].photo});
        };
    };

    //COMMENTED THIS OUT BECAUSE MYCOMPARATOR DOESN'T EXIST
    //compareArray.sort(mycomparator);

    //ADDED PUSH HERE SO IT ADDS NEW FRIEND TO FRIENDS LIST AFTER COMPARISON IS MADE

    friends.push(req.body);


    console.log("Your friend: " + compareArray[0].name );
    var nameObj = {name: compareArray[0].name,
               photoUrl: compareArray[0].photoUrl }
    res.json(nameObj);


  });

  
};

