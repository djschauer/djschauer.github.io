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
var guessesRemaining = 9;
var wordComplete = false;
var lettersGuessed = [];
var alreadyGuessed = false;

var newWord = ""


function gameStart() {
    newWord = new Word(chosenWord);
    newWord.fillBlanks(newWord.word);
    newWord.createLetters(newWord.word);
    // console.log(newWord.letters);
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
            lettersGuessed.forEach(element => {
                if (userLetter === element) {
                    alreadyGuessed = true;
                }
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
                    guessLetter();
                }               
            });            
    };

gameStart()