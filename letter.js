function Letter(ltr) {
    this.letter = ltr;
    this.show = "__";
    this.quess = false;
    
    this.check = function(guessLetter) {
        if(this.letter === guessLetter){
            this.show = this.letter,
            this.quess = true;
        }
    }
}

module.exports = Letter