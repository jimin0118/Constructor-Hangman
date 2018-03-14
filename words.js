var letter = require("./Letter")

function Word(wrd) {
    this.word = wrd,
    this.letters = [],
    this.guessRight = false;

    
    this.createLetters = function() {
        for (var i = 0; i < this.word.length; i++) {
            var newLetter = new letter(this.word[i]);
            this.letters.push(newLetter);
        }
    }
    
    this.guessLetters = function() {
        if(this.letters.every(function(ltr){
            return ltr.quess === true;
        })) {
            this.guessRight = true;
            return true;
        }
    }
    
    
    this.checkLetters = function (guessedLetter) {
        var counter = 0;


        this.letters.forEach(function(ltr) {
            if(ltr.letter === guessedLetter) {
                ltr.quess === true
                counter++
            }
        })

        
        return counter

        
        this.letterShow = function() {
            var appear = ' '
            this.letters.forEach(function(ltr) {
                var showLtr = ltr.letterShow()
                appear += showLtr
            })
            return appear
        }

} 
};   
module.exports = Word



