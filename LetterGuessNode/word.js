var Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.letters = [];
    this.blanks = [];
    this.currentState = [];
    this.fillBlanks = function(wordSplit) {
        var wordArray = wordSplit.split("");
        // console.log(this.letters);
        for (var i = 0; i < wordArray.length; i++) {
            this.blanks.push("_");
        };
    };
    this.createLetters = function(wordSplit) {
        var wordArray = wordSplit.split("");
        wordArray.forEach(element => {
            element = new Letter(element);
            console.log(element);
            this.letters.push(element);
        });
    }
    this.fillCurrentState = function(char) {
        this.currentState = [];
        this.letters.forEach(element => {
            element.guess(char);
            console.log(element);
            if (element.letterGuessed === true) {
                this.currentState.push(element.letter);
            } else {
                this.currentState.push("_");
            }
            console.log(this.currentState)
        });
    }
};

module.exports = Word