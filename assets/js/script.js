var startButton = document.querySelector('.start');
var question = document.querySelector('.question');
var questionHeader = document.querySelector('.questionheader');

startButton.addEventListener('click', function(event) {
    startButton.style.display = 'none';
    question.style.display = 'block';
    questionHeader.style.display = 'block';
});