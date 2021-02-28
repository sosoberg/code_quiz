//nav query selectors
var startButton = document.querySelector('#start');

var question1 = document.querySelector('#question1');
var question2 = document.querySelector('#question2');
var question3 = document.querySelector('#question3');
var question4 = document.querySelector('#question4');
var question5 = document.querySelector('#question5');
var question6 = document.querySelector('#question6');

var questionHeader1 = document.querySelector('#questionheader1');
var questionHeader2 = document.querySelector('#questionheader2');
var questionHeader3 = document.querySelector('#questionheader3');
var questionHeader4 = document.querySelector('#questionheader4');
var questionHeader5 = document.querySelector('#questionheader5');
var questionHeader6 = document.querySelector('#questionheader6');


var finishPage = document.querySelector('.finish');
var restartBtn = document.querySelector('#restart');
var questionBtn = document.querySelector('#button');
var questionHdr = document.querySelector('.questionheader');

var correctAnswer1 = document.querySelector('.correct1');
var correctAnswer2 = document.querySelector('.correct2');
var correctAnswer3 = document.querySelector('.correct3');
var correctAnswer4 = document.querySelector('.correct4');
var correctAnswer5 = document.querySelector('.correct5');
var correctAnswer6 = document.querySelector('.correct6');

var incorrectAnswer = document.getElementsByClassName('incorrect');
var timerElement = document.querySelector('.timer');
var finalScore = document.querySelector('.score');
var nameInput = document.querySelector('.nameinput');
var highScore = document.querySelector('.highscore');
var timerSeconds = document.querySelector('.seconds');
var timerCount = '60';
var timer;

//timer function
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerSeconds.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
            finishPage.style.display = 'block';
            question1.style.display = 'none';
            question2.style.display = 'none';
            question3.style.display = 'none';
            question4.style.display = 'none';
            question5.style.display = 'none';
            question6.style.display = 'none';
            timerElement.style.display = 'none';
            questionHdr.style.display = 'none';
            finalScore.textContent = '0';
            getHighScore();
        }
    }, 1000); //repeats every second
};


// incorrect answer function

for (let i = 0; i < incorrectAnswer.length; i++) {
    incorrectAnswer[i].addEventListener('click', function() {
        timerCount = timerCount -10;
    })
};

// event listeners to switch questions when user clicks next
startButton.addEventListener('click', function(event) {
    startButton.style.display = 'none';
    question1.style.display = 'block';
    questionHeader1.style.display = 'block';
    timerElement.style.display = 'block';
    //start the quiz timer when start button is pressed
    startTimer();
});

correctAnswer1.addEventListener('click', function(event) {
    question1.style.display = 'none';
    questionHeader1.style.display = 'none';
    //move to next question block
    questionHeader2.style.display = 'block';
    question2.style.display = 'block';
});

correctAnswer2.addEventListener('click', function(event) {
    question2.style.display = 'none';
    questionHeader2.style.display = 'none';
    questionHeader3.style.display = 'block';
    question3.style.display = 'block';
});

correctAnswer3.addEventListener('click', function(event) {
    question3.style.display = 'none';
    questionHeader3.style.display = 'none';
    questionHeader4.style.display = 'block';
    question4.style.display = 'block';
});

correctAnswer4.addEventListener('click', function(event) {
    question4.style.display = 'none';
    questionHeader4.style.display = 'none';
    questionHeader5.style.display = 'block';
    question5.style.display = 'block';
});

correctAnswer5.addEventListener('click', function(event) {
    question5.style.display = 'none';
    questionHeader5.style.display = 'none';
    questionHeader6.style.display = 'block';
    question6.style.display = 'block';
});

correctAnswer6.addEventListener('click', function(event) {
    questionHeader6.style.display = 'none';
    question6.style.display = 'none';
    //prompt for users initials
    var userInitials = window.prompt('Please enter your name for our records');
    if (userInitials.length > 30) {
        var retry = window.prompt('below 30 characters please');
        // return John Doe default if user fails to input initials
        if (retry.length > 30) {
            userInitials = 'John Doe'
        } else {
            userInitials = retry;
        }
    }
    finishPage.style.display = 'block';
    clearInterval(timer);
    //set player score to timerCount, which is their score
    finalScore.textContent = timerCount;
    nameInput.textContent = userInitials;
    timerElement.style.display = 'none';
    getHighScore();
    function storeScore() {
        localStorage.setItem(userInitials, timerCount);
    }
    storeScore();
});

//option to restart the quiz if the user wants a better score
restartBtn.addEventListener('click', function(event) {
    finishPage.style.display = 'none';
    startButton.style.display = 'block';
    timerCount = '60';
});


// sets highscore if highscore is achieved, otherwise it gets from local storage
function getHighScore() {
    var stored = localStorage.getItem("highscore");
    if (stored > timerCount) {
        highScore.textContent = stored; 
    } else {
        localStorage.setItem("highscore", timerCount);
        var stored = localStorage.getItem("highscore");
        highScore.textContent = stored;
    }
};