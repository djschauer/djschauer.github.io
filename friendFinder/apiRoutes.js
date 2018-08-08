var path = require('path');

var friends = require('/friends.js')

var api = {
    getFriends = function(app) {
        app.get('api/friends', function(req, res) {
            res.json(friends);
        });
    },
    postFriends = function(app) {
        app.post('api/friends', function(req, res) {
            
        });
    }
};