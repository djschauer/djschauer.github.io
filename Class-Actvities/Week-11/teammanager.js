// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function for creating player objects
function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;
  // flips a coin: if the the value is equal to 0 then this.offense goes up by one. if the value is equal to 1
  this.goodGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense++;
      console.log(this.name + "'s offense has gone up!\n----------");
    }
    else {
      this.defense++;
      console.log(this.name + "'s defense has gone up!\n----------");
    }
  };
  this.badGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense--;
      console.log(this.name + "'s offense has gone down!\n----------");
    }
    else {
      this.defense--;
      console.log(this.name + "'s defense has gone down!\n----------");
    }
  };
  this.printStats = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n----------");
  };
}

// arrays used to contain all of our player objects
var starters = [];
var subs = [];
var team = [];

// recursive function which will allow the user to create 5 players and then will print each player's stats afterwards
var createPlayer = function() {
  // if the length of the team array is 5 or higher, no more questions will be asked
  if (starters.length + subs.length < 5) {
    console.log("\nNEW PLAYER!\n");
    inquirer.prompt([
      {
        name: "name",
        message: "Player's Name: "
      }, {
        type: "list",
        name: "position",
        message: "Player's position: ",
        choices: ["Forward", "Striker", "Midfielder", "Back", "Keeper"]
      }, {
        name: "offense",
        message: "Player's Offensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }, {
        name: "defense",
        message: "Player's Defensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }
    ]).then(function(answers) {
      // runs the constructor and places the new player object into the variable player.
      // turns the offense and defense variables into integers as well with parseInt
      var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
      // adds a player to the starters array if there are less than five player objects in it.
      // otherwise adds the newest player object to the subs array
      if (starters.length < 3) {
        starters.push(player);
        team.push(player);
        console.log(player.name + " added to the starters");
      }
      else {
        subs.push(player);
        team.push(player);
        console.log(player.name + " added to the subs");
      }
      // runs the createPlayer function once more
      createPlayer();
    });
  }
  else {
    // loops through the team array and calls printStats() for each object it contains
    // for (var i = 0; i < team.length; i++) {
    //   team[i].printStats();
       
    playGame();
    }

  };

// calls the function createPlayer() to start the code
createPlayer();

function playGame() {
 var round = 1;
 var userScore = 0;
 var opponentScore = 0;
 var win = false;
 var gameScore = "User " + userScore + " - " + "Opponent " + opponentScore;

 for (var i = 0; i < 5; i++) {
    var opponentOff = Math.floor(Math.random() * 31); 
    var opponentDef = Math.floor(Math.random() * 31);
    var userOff = starters[0].offense + starters[1].offense + starters[2].offense;
    var userDef = starters[0].defense + starters[1].defense + starters[2].defense;
    console.log("ROUND--------" + round);
    console.log("Opponent Offense Rating: " + opponentOff);
    console.log("Opponent Defense Rating: " + opponentDef);
    console.log("Your Team's Offense Rating: " + userOff);
    console.log("Your Team's Defense Rating: " + userDef);

    if (userOff > opponentDef) {
      console.log("You scored!")
      userScore++
      gameScore = "User " + userScore + " - " + "Opponent " + opponentScore;
    } else {
      console.log("You couldn't penetrate their defense!");
      gameScore = "User " + userScore + " - " + "Opponent " + opponentScore;
    }

    if (userDef < opponentOff) {
      console.log("You were scored upon!");
      opponentScore++
      gameScore = "User " + userScore + " - " + "Opponent " + opponentScore;
    } else {
      console.log("Your defense held!")
      gameScore = "User " + userScore + " - " + "Opponent " + opponentScore;
    }
    console.log(gameScore)
    if (userScore === opponentScore) {
      console.log("The Game is tied!")
    } else if (userScore > opponentScore) {
      console.log("You are winning!")
    } else if (userScore < opponentScore) {
      console.log("You are losing!")
    }

    subPrompt()
    round++
  }
};

function subPrompt() {
    inquirer.prompt([
      {
      type: "confirm",
      message: "Would you like to make a substitution?",
      name: "subs",
      default: "false"
      }
    ]).then(function(answers) {
          if (answers === true) {
            subs()
          }
    });
}

function subs() {
    inquirer.prompt([
      {
        type: "list",
        name: "subOut",
        message: "Choose a player to sub out.",
        choices: [starters[0].name, starters[1].name, starters[3].name]
      },
      {
        type: "list",
        name: "subIn",
        message: "Choose a player to sub in.",
        choices: [subs[0].name, subs[1].name]
      }
    ]).then(function(answers){
        starters.forEach(element => {
            if (answers.subOut === element) {
              delete starters[i];
              subs.push(answers.subOut);
            }
        });
        subs.forEach(element => {
            if (answers.subIn === element) {
              delete subs[i];
              starters.push(answers.subIn);
            }
        });
    });
}