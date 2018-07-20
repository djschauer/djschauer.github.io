var Letter = function(character) {
    this.letter = character;
    this.letterGuessed = false;
    this.showLetter = function() {
        if (this.letterGuessed === true) {
            console.log(this.character);
        } else {
            console.log("_");
        }
    }
};

module.exports = Letter