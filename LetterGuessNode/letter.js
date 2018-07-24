function Letter(character) {
    this.letter = character;
    this.letterGuessed = false;
    this.showLetter = function() {
        if (this.letterGuessed === true) {
            console.log(this.character);
        } else {
            console.log("_");
        }
    }
    this.guess = function(char) {
        if (char === this.letter) {
            this.letterGuessed = true;
        }
    }
};

module.exports = Letter