var startButton = document.querySelector('#start');
var question1 = document.querySelector('#question1');
var questionHeader1 = document.querySelector('#questionheader1');
var next1 = document.querySelector('#next1');
var question2 = document.querySelector('#question2');
var questionHeader2 = document.querySelector('#questionheader2');
var next2 = document.querySelector('#next2');
var question3 = document.querySelector('#question3');
var questionHeader3 = document.querySelector('#questionheader3');
var next3 = document.querySelector('#next3');
var question4 = document.querySelector('#question4');
var questionHeader4 = document.querySelector('#questionheader4');
var next4 = document.querySelector('#next4');
var question5 = document.querySelector('#question5');
var questionHeader5 = document.querySelector('#questionheader5');
var next5 = document.querySelector('#next5');
var question6 = document.querySelector('#question6');
var questionHeader6 = document.querySelector('#questionheader6');
var finishBtn = document.querySelector('#finish');
var finishPage = document.querySelector('.finish');
var restartBtn = document.querySelector('#restart');
var correctAnswer = document.querySelector('.correct');
var questionBtn = document.querySelector('#button');


// event listeners to switch questions when user clicks next
startButton.addEventListener('click', function(event) {
    startButton.style.display = 'none';
    question1.style.display = 'block';
    questionHeader1.style.display = 'block';
});

next1.addEventListener('click', function(event) {
    question1.style.display = 'none';
    questionHeader1.style.display = 'none';
    questionHeader2.style.display = 'block';
    question2.style.display = 'block';
});

next2.addEventListener('click', function(event) {
    question2.style.display = 'none';
    questionHeader2.style.display = 'none';
    questionHeader3.style.display = 'block';
    question3.style.display = 'block';
});

next3.addEventListener('click', function(event) {
    question3.style.display = 'none';
    questionHeader3.style.display = 'none';
    questionHeader4.style.display = 'block';
    question4.style.display = 'block';
});

next4.addEventListener('click', function(event) {
    question4.style.display = 'none';
    questionHeader4.style.display = 'none';
    questionHeader5.style.display = 'block';
    question5.style.display = 'block';
});

next5.addEventListener('click', function(event) {
    question5.style.display = 'none';
    questionHeader5.style.display = 'none';
    questionHeader6.style.display = 'block';
    question6.style.display = 'block';
});

finishBtn.addEventListener('click', function(event) {
    questionHeader6.style.display = 'none';
    question6.style.display = 'none';
    finishPage.style.display = 'block';
});

restartBtn.addEventListener('click', function(event) {
    finishPage.style.display = 'none';
    startButton.style.display = 'block';
});