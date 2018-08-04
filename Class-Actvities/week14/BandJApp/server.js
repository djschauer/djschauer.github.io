// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var iceCream = [
    {name: "vanilla", price: 10, awesomeness: 3},
    {name: "chocolate", price: 4, awesomeness: 8},
    {name: "banana", price: 1, awesomeness: 1},
    {name: "greentea", price: 5, awesomeness: 7},
    {name: "jawbreakers", price: 6, awesomeness: 2},
   ];

app.get("/", function(req, res) {
    // res.render(JSON.stringify(iceCream));
    res.render("all-iceCream", {
        icecream: iceCream
    });
}); 

app.listen(PORT, function(){
    console.log("Server listening on Port: " + PORT);
});