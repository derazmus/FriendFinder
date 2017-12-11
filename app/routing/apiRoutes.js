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
    friends.push(req.body);

    var compareArray = [];

    for (var i = 0; i < friends.length; i++) {
        var totalDif = 0;
        if (friends[i].name != req.body.name ) {
          for (var j = 0; j < 10; j++) {
            var dif = Math.abs(req.body.scores[j] - friends[i].scores[j]);
            totalDif+= dif;
          };
          compareArray.push({name: friends[i].name,
                              sum: totalDif,
                         photoUrl: friends[i].photoUrl});
        };
    };
    compareArray.sort(mycomparator);

    console.log("Your friend: " + compareArray[0].name );
    var nameObj = {name: compareArray[0].name,
               photoUrl: compareArray[0].photoUrl }
    res.json(nameObj);


  });

  // ---------------------------------------------------------------------------
  // Below code is to clear out the table while working with the functionality.

  // app.post("/api/clear", function() {
  //   // Empty out the arrays of data
  //   friends = [];

  //   console.log(friends);
  // });
};

function mycomparator(a,b) {
    return parseInt(a.sum, 10) - parseInt(b.sum, 10);
  }
