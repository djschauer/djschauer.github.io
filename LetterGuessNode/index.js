var Word = require("./word.js");
var inquirer = require("inquirer");

var wordBank = [
    "valkyrie", 
    "odin", 
    "thor", 
    "jormungandr", 
    "loki", 
    "worldtree", 
    "meadhall", 
    "valhalla", 
    "bragr", 
    "skald", 
    "longship", 
    "vinlandsaga", 
    "jotunheim", 
    "midgard", 
    "tyr", 
    "fenrir"
    ];

var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var guessesRemaining = 0;
var wordComplete = false;
var lettersGuessed = [];
var alreadyGuessed = false;
var remainingLetters = 0;

var newWord = "";


function gameStart() {
    newWord = new Word(chosenWord);
    newWord.fillBlanks(newWord.word);
    newWord.createLetters(newWord.word);
    remainingLetters = newWord.letters.length;
    console.log("Welcome to Hangman, sponsored by Odin.")
    console.log("The All-Father has prepared words for you to guess in the hopes a true hero may challenge his wit.")
    console.log("Follow the prompts below to make your guesses. You will only be allowed to guess wrong nine times. My the grace of Odin be with you!")
    console.log("The All-Father has chosen his word: " + newWord.blanks.toString());
    inquirer.prompt (
        [
            {
                name: "userGuess",
                type: "input",
                message: "What is your guess mortal?"
            }
        ]
    ).then(function(answers) {
            var userLetter = answers.userGuess;
            lettersGuessed.push(userLetter);
            console.log("You have guessed: " + JSON.stringify(lettersGuessed)) + " so far";
            newWord.fillCurrentState(userLetter);
            console.log(newWord.currentState);
            newWord.currentState.forEach(element => {
                if (element === "_") {
                    remainingLetters++
                };
            });
            guessLetter();  
        });
    }

function guessLetter() {
    inquirer.prompt (
        [
            {
                name: "userGuess",
                type: "input",
                message: "What is your next guess mortal?"
            }
        ]
    ).then(function(answers) {
            var userLetter = answers.userGuess;
            alreadyGuessed = false;
            remainingLetters = 0;
            lettersGuessed.forEach(element => {
                if (userLetter === element) {
                    alreadyGuessed = true;
                };
            });
                if (alreadyGuessed)  {
                    console.log("You have already guessed that mortal. You try Odin's patience!");
                    console.log("You have guessed: " + JSON.stringify(lettersGuessed)) + " so far";
                    guessLetter();
                } else {
                    lettersGuessed.push(userLetter);
                    newWord.fillCurrentState(userLetter);
                    console.log("The Current Word: " + newWord.currentState);
                    console.log("You have guessed: " + JSON.stringify(lettersGuessed)) + " so far";
                    newWord.currentState.forEach(element => {
                        if (element === "_") {
                            remainingLetters++
                        }
                    });
                    guessesRemaining = lettersGuessed.length;
                    if (remainingLetters === 0) {
                        wordComplete = true;
                        endGame();
                    } else if (guessesRemaining === 9) {
                        endGame();
                    } else {
                        guessLetter();
                    };
                };               
            });            
    };

function endGame() {
    if (wordComplete === true) {
        console.log("Congratulations hero! You have beaten Odin's game.");
        playAgain();
    } else {
        console.log("You have failed your test mortal.")
        playAgain();
    }
}

function playAgain() {
    inquirer.prompt (
        [
            {
                name: "userConfirm",
                type: "confirm",
                message: "Would you like to play again?",
                default: false
            }
        ]
    ).then(function(answers) {
        if (answers.userConfirm) {
            gameStart();
        } else {
            console.log("Odin's challeng awaits you until next time.")
        }
    });
}

gameStart()