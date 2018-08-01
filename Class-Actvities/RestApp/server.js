var http = require("http");
var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = 8080;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [
    {
        name: "Phil",
        email: "phil@phil.com",
        phone: "123-456-7890"
    }
];
var waitingList = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
    });

app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
    });

app.post("/api/master", function(req, res) {
    console.log("posting");
    
    var newReservation = req.body;

    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    if(reservatiions.length > 3) {
        reservations.push(newReservation);
    } else {
        waitingList.push(newReservation);
    };
});

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});

app.listen(process.env.PORT || PORT, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });