var timerEl = document.querySelector('.timer')
var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('#choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var pregressBarFull = document.querySelector('#progressBarFull');

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
var timeLeft = 20



var questions = [
    {
        question: "",
        options: ["A","B","C","D"],
        correct: "B"
    },
    {
        question: "",
        options: ["A","B","C","D"],
        correct: "A"
    },
    {
        question: "",
        options: ["A","B","C","D"],
        correct: "C"
    },
    {
        question: "",
        options: ["A","B","C","D"],
        correct: "D"
    }
]

function startQuiz () {
    timerEl.textContent = timeLeft;
    timerId = setInterval(function() {
        timeLeft = timeLeft - 1
        updateTime()
    }, 1000)
    console.log("startquiz")
    // container for quiz question
    // use element for quiz questions
    // use listener for correct quiz option.
    // use timer that initiates a countdown.
    // use scorekeeper that keeps track of correct answers
    // if statement that checks to see if selected options is equal to the correct options.
    // if selected option === correct option, progress +1 to score.
    // else no points awareded and 5 seconds are taken away.
}
function updateTime() {
    timerEl.textContent = timeLeft  
    if (timeLeft === 0) {
        stop.timerEl
    }
}
// timer function
startQuiz ()
// have some listerner that starts the game.
