// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here

app.get("/:operator/:inputOne/:inputTwo", function(req, res) {

  var inputOne = parseInt(req.params.inputOne);
  var inputTwo = parseInt(req.params.inputTwo);
  var operator = req.params.operator;
  var result =  0;
 
  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  // Initialize the result variable to send later
  // Switch statement chooses operation based on the operation parameter.
  switch (operator) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "add":
  case "+":
      result = inputOne + inputTwo;
    break;
  case "subtract":
  case "-":
    result = inputOne - inputTwo;
    break;
  case "*":
  case "multiply":
    result = inputOne * inputTwo;
    break;
  case "/":
  case "divide":
    result = inputOne / inputTwo;
    break;
  default:
    // Handle anything that isn't specified
    result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
