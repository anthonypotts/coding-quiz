// var timerEl = document.getElementById("timer");
// var startBtn = document.getElementById("start");
var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC, chD;

var questions = [
    {
        question: "Commonly used data types do not include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with ____",
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets",
        answer: "C"
    },
    {
        question: "Arrays in Javascript can be used to store ____",
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
        answer: "A"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parenthesis",
        answer: "C"
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is ____",
        a: "Javascript",
        b: "termninal/bash",
        c: "for loops",
        d: "console.log",
        answer: "D"
    }
];

function get(x) {
    return document.getElementById(x);
}

// this function renders a question for display on the page
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  chD = questions[pos].d;
  // display the question
  test.innerHTML = "<h3>"+question+"</h3>";
  // display the answer options
  // the += appends to the data we started on the line above
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chD+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    // checks if answer matches the correct choice
    if(choice == questions[pos].answer){
      //each time there is a correct answer this value increases
      correct++;
    }
    // changes position of which character user is on
    pos++;
    // then the renderQuestion function runs again to go to next question
    renderQuestion();
}


// function countdown() {
//     var timeLeft = 75;

//     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function() {
//         if (timeLeft > 1) {
//         timerEl.textContent = timeLeft;
//         timeLeft--;
//         } else if (timeLeft === 1) {
//         timerEl.textContent = timeLeft;
//         timeLeft--;
//         } else {
//         timerEl.textContent = '';
//         clearInterval(timeInterval);
//         }
//     }, 1000);
//     console.log(countdown);
// }

// startBtn.onclick = countdown;
window.addEventListener("load", renderQuestion);