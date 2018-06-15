// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var config = {
  apiKey: "AIzaSyDmYNyNMT1_cLh--lAdfAsMt431CtSMlAA",
  authDomain: "bcin-class.firebaseapp.com",
  databaseURL: "https://bcin-class.firebaseio.com",
  projectId: "bcin-class",
  storageBucket: "",
  messagingSenderId: "410123368002"
};
firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database().ref();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highestBidder").exists() && snapshot.child("highestBid").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highPrice = snapshot.val().highestBid;
    highBidder = snapshot.val().highestBidder;


    // Change the HTML to reflect the stored values
    $("#highest-bidder").html(highBidder);
    $("#highest-price").html(highPrice);

    // Print the data to the console.
    console.log(highBidder);
    console.log(highPrice);


  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-bidder").html(initialBidder);
    $("#highest-price").html(initialBid);
    // Print the data to the console.
    console.log(initialBid);
    console.log(initialBidder);

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var bidderName = $("#bidder-name").val();
  var bid = $("#bidder-price").val();

  // Log the Bidder and Price (Even if not the highest)
  if (bid > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.set({
      highestBidder: bidderName,
      highestBid: bid
    })

    // Log the new High Price
    console.log(bid);


    // Store the new high price and bidder name as a local variable
      highPrice = bid;
      highBidder = bidderName;

    // Change the HTML to reflect the new high price and bidder
    $("#highest-bidder").html(highBidder);
    $("#highest-price").html(highPrice);

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
