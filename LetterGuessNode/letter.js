function Letter(char) {
    this.letter = char;
    this.letterGuessed = false;
    this.showLetter = function() {
        if (this.letterGuessed === true) {
            console.log("You guessed correctly: " + this.letter);
        };
    };
    this.guess = function(char) {
        if (char === this.letter) {
            this.letterGuessed = true;
        };
    };
};

module.exports = Letter;