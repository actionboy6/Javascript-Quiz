var timerEl = document.querySelector('.timer')
var question = document.querySelector('#question');
var choices = Array-from(document.querySelectorAll('#choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var pregressBarFull = document.querySelector('#progressBarFull');

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
var timeLeft = 20

timerEl.textContent = timeLeft;

var questions = [
    {
        question: "Who played Nyota Uhura in Star Trek(1966)?",
        options: ["Beyonce","Nichelle Nichols","Oprah","Danai Gurira"],
        correct: "Nichelle Nichols"
    },
    {
        question: "Which band did a mashup album with Jay-Z back when MTV was still a thing?",
        options: ["Linkin Park","Limp Bizkit","Rage Against the Machine","Disturbed"],
        correct: "Linkin Park"
    },
    {
        question: "Who is 'Baba Yaga' in John Wick?",
        options: ["'The boogey-man?'","The Muffin Man","'The man you sent to kill the f*cking boogey-man'","The mafia's lawyer."],
        correct: "'The man you sent to kill the f*cking boogey-man'"
    },
    {
        question: "Robert Downey Jr was made world famous when he was starred as Tony Stark, a billionaire who created Iron Man. However, that wasn't his only starring role. What else did he star in?",
        options: ["Tropic Thunder","","",""],
        correct: ""
    }
]

function startQuiz () {
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
}
// timer function
startQuiz ()
// have some listerner that starts the game.
var timerId = setInterval(function() {
    timeLeft = timeLeft - 1
    updateTime()
}, 1000)