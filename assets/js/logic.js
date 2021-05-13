var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables that interact with DOM
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var optionsEl = document.getElementById("options");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");


// quiz logic
function startQuiz() {
    // hide
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    // reveal questions
    questionsEl.removeAttribute("class");

    // start timer
    timerId = setInterval(clockTick, 1000);

    // show time
    timerEl.textContent = time;

    getQuestion();
}

function getQuestion() {
    // get question from questions.js
    var currentQuestion = questions[currentQuestionIndex];

    // update title
    var titleEl = document.getElementById("q-title");
    titleEl.textContent = currentQuestion.title;

    // clear old question choices
    optionsEl.innerHTML = "";

    // loop choices
    currentQuestion.options.forEach(function(option, i) {
        //creates button for option
        var optionNode = document.createElement("button");
        optionNode.setAttribute("class", "option");
        optionNode.setAttribute("value", option);
        optionNode.textContent = i + 1 + "." + option;
        
        // attach click event listener to option
        optionNode.onclick = questionClick;

        // display to html page
        optionsEl.appendChild(optionNode);
        
    });
}

function questionClick() {
    // check for wrong answer
    if (this.value !== questions[currentQuestionIndex].answer) {
        // penalty
        time -= 15;

        if (time < 0) {
            time = 0;
        }

        // display time on page
        timerEl.textContent = time;
        
        feedbackEl.textContent = "Wrong";
    } else {
        feedbackEl.textContent = "Correct!";
    }

    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    // next question!
    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
    //stop timer
    clearInterval(timerId);

    // end screen
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

    // reveal final score
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    // hide questions
    questionsEl.setAttribute("class", "hide");
}

function clockTick() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        quizEnd();
    }
}

function saveHighscore() {
    var initials = initialsEl.value.trim();

    if (initials !== "") {
        var highscores = 
        JSON.parse(window.localStorage.getItem("highscores")) || [];

        var newScore = {
            score: time,
            initials: initials
        };

        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        window.location.href = "highscores.html";
    }
}

function checkForEnter(event) {
    // "13" represents the enter key
    if (event.key === "Enter") {
      saveHighscore();
    }
  }
  
  // user clicks button to submit initials
  submitBtn.onclick = saveHighscore;
  
  // user clicks button to start quiz
  startBtn.onclick = startQuiz;
  
  initialsEl.onkeyup = checkForEnter;
  