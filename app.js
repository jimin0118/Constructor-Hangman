var inquirer = require('inquirer');
var Word = require('./words.js')


var guesses = 15;
var randomColor = ['red', 'white', 'blue', 'puple', 'green', 'yellow'];
var word = ' ';
var correctGuess = false;


function startGame() {
    console.log('\n=========================================================')
    console.log('Welcome to Hangman! Guess what color is!')
    console.log('=========================================================')
    guesses = 15
    var randomNum = Math.floor(Math.random() * randomColor.length)
    word = new Word(randomColor[randomNum])
    word.createLetters()
}

function playGame() {
    correctGuess = false;
    var display = ''
    word.letters.forEach(function (callWord) {
        display += callWord.showing + ' '
    })
    inquirer.prompt([
        {
            name: 'letter',
            message: 'Guess a letter of color: '
        }
    ]).then(function (answer) {
        guesses--
        word.checkLetter(answer.letter)
        if (word.guessRight) {
            var correctAnswer = ''
            word.letters.forEach(function (callWord) {
                correctAnswer += callWord.showing + ' '
            })
            console.log('\n===================')
            console.log(correctAnswer)
            console.log("You're right!")
            console.log('===================')
            playAgain()
        } else if (guesses === 0) {
            console.log('\n===================')
            console.log('Game Over.')
            console.log('===================')
            playAgain()
        } else {
            console.log('\nGuesses left: ' + guesses)
            playGame()
        }
    })
}

function playAgain() {
    inquirer.prompt([
        {
            name: 'playAgain',
            message: 'Would you like to play again?',
            default: true
        }
    ]).then(function (answer) {
        if (answer.playAgain) {
            startGame()
            playGame()
        }
    })
}

startGame()
playGame()