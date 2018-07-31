var http = require("http");
var fs = require("fs");

var PORT = 8080;
var path = "";

function handleRequest(req, res) {
    console.log("Request Received");
    switch(req.url) {
        case "/":
        case "index.html":
        case "/index":
            path = "/index.html";
            readHTML(path);
        break;
        case "/movies":
        case "/movies.html":
            path = "/movies.html";
            readHTML(path);
        break;
        case "/frameworks":
        case "/frameworks.html":
            path = "/frameworks.html";
            readHTML(path);
        break;
        case "/food":
        case "/food.html":
            path = "/food.html";
            readHTML(path);
        break;
    };
    function readHTML(path) {
        fs.readFile(__dirname + path, function(err, data) {
    
            // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
            // an html file.
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    };
};

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});

