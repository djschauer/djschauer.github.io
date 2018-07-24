var letter = require("./letter.js");

var testWord = new Word ("Thor");
var testGuess = "a";
var testGuess2 = "h";

function Word(wordGuess) {
    this.wordGuess = wordGuess;
    this.letters = [];
    this.blanks = [];
    this.fillBlanks = function(wordSplit) {
        this.letters = wordSplit.split("");
        console.log(this.letters);
        for (var i = 0; i < this.letters.length; i++) {
            this.blanks.push("_");
        };


    };
    this.letterGuess = function(char) {
        this.letters.forEach(element => {
            newLetter = new letter.Letter(element);
            newLetter.guess(char);
        });
    }
};
console.log(testWord.wordGuess);

testWord.fillBlanks(testWord.wordGuess);

testWord.letterGuess(testGuess);
testWord.letterGuess(testGuess2);

module.exports = Word