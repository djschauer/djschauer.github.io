var path = require('path');

var html = {
    getHome = function(app) {
        app.get('/', function(req, res) {
            res.sendFile(path.join(__dirname, '/index.html'));
        });
    },
    getSurvey = function(app) {
        app.get('/', function(req, res) {
            res.sendFile(path.join(__dirname, '/survey.html'))
        })
    }
};