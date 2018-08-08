var path = require('path');

var html = {
    getHome: function(app) {
        app.get('/', function(req, res) {
            res.sendFile(path.join(__dirname, '/index.html'));
            console.log("serving up index")
        });
    },
    getSurvey: function(app) {
        app.get('/survey', function(req, res) {
            res.sendFile(path.join(__dirname, '/survey.html'))
            console.log("serving up survey")
        })
    }
};

module.exports = html;