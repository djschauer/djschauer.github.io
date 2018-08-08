var path = require('path');

var friends = require('./friends.js')

var api = {
    getFriends: function(app) {
        app.get('/api/friends', function(req, res) {
            res.json(friends);
            console.log("serving up the friends list");
        });
    },
    postFriends: function(app) {
        app.post('/api/friends', function(req, res) {
            console.log("finding new match");
            var userInput = req.body;

            var userScores = userInput.scores;

            var match = '';

            var bestDiff = 100;

            friends.forEach((element, i) => {
                var diff = 0;

                userScores.forEach((element, j) => {
                    diff += Math.abs(friends[i].scores[j] - userScores[j]);
                });
                
                if(diff < bestDiff) {

                    bestDiff = diff;
                    match = friends[i].name;
                }
                
            });

            friends.push(userInput);

            res.json(
                {
                    status: 'ok', 
                    matchName: match
                }
            );
        });
    }
};

module.exports = api;