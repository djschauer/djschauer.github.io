var http = require("http");

var badServer = http.createServer(function (req, res) {
    console.log("Request Received");

    res.end("Away thou rag, thou quantity, thou remnant.");
});

var goodServer = http.createServer(function (req, res) {
    console.log("Request Received");

    res.end("I might call you a thing divine, for nothing natural I ever saw so noble.");
});

goodServer.listen(7000, function() {
    console.log("Listening on port 7000")
});

badServer.listen(7500, function() {
    console.log("Listening on Port 7500");
});