$( document ).ready(function() {
console.log("ready!")
// Computer Random number generator
var compNum = Math.floor(Math.random() * 101 + 19);
console.log(compNum);
// Play score and W/L trackers
var playerScore = 0;
var wins = 0;
var losses = 0;
// Display trackers
$("#playerScore").text(playerScore);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);
// Display computer number to the screen function
$("#compNum").text(compNum);

// Crystal random number generators
var redCrystal = Math.floor(Math.random() * 11 + 1);
var blueCrystal = Math.floor(Math.random() * 11 + 1);
var blackCrystal = Math.floor(Math.random() * 11 + 1);
var greenCrystal = Math.floor(Math.random() * 11 + 1);

// var gameOver = false;
// Assign Crystal buttons
$("#redCrystal").click(function() {
    playerScore = playerScore + redCrystal;
    $("#playerScore").text(playerScore);
    gameState()
});
$("#blueCrystal").click(function() {
    playerScore = playerScore + blueCrystal;
    $("#playerScore").text(playerScore);
    gameState()
});
$("#blackCrystal").click(function() {
    playerScore = playerScore + blackCrystal;
    $("#playerScore").text(playerScore);
    gameState()
});
$("#greenCrystal").click(function() {
    playerScore = playerScore + greenCrystal;
    $("#playerScore").text(playerScore);
    gameState()
});

// Game Reset function
function reset() {
    // Pick new random num, write to doc
    compNum = Math.floor(Math.random() * 101 + 19);
    $("#compNum").text(compNum);
    // Pick new crystal nums
    redCrystal = Math.floor(Math.random() * 11 + 1);
    blueCrystal = Math.floor(Math.random() * 11 + 1);
    blackCrystal = Math.floor(Math.random() * 11 + 1);
    greenCrystal = Math.floor(Math.random() * 11 + 1);
    // Reset Score to 0, write to doc
    playerScore = 0;
    $("#playerScore").text(playerScore);
    // gameOver = false;
}
// Function to check if the game is over
function gameState() {
    // Win if statement: Alert Win, up the wins and write to doc, reset game
    if (playerScore === compNum) {
    alert("You Win! Rematch?");
    wins++;
    reset();
    $("#wins").text("Wins: " + wins);
    }
    // Lose if statement: Alert loss, up losses, write to doc, reset game
    if (playerScore > compNum) {
    alert("You Lost! Try again!");
    losses++;
    reset();
    $("#losses").text("Losses: " + losses);
    }
}

});