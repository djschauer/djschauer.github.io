var express = require("express");
var bodyParser = require("body-parser");
var api = require("./apiRoutes");
var html = require("./htmlRoutes");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

api.getFriends(app);
api.postFriends(app)

html.getHome(app);
html.getSurvey(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });