var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables that interact with DOM
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var optionsEl = document.getElementById("options");
var submitEl = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");

// quiz logic
function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class");

    timerId = setInterval(clockTick, 1000);

    timerEl.textContent = time;
}
