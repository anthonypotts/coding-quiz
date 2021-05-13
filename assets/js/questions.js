var questions = [
    {
        title: "Commonly used data types do not include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if/else statement is enclosed with ____",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables",
        options: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title: "A very useful tool during development and debugging for printing content to the debugger is ____",
        options: ["Javascript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

// function get(x) {
//     return document.getElementById(x);
// }

// // this function renders a question for display on the page
// function renderQuestion(){
//   test = get("test");
//   if(pos >= questions.length){
//     test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
//     get("test_status").innerHTML = "Test completed";
//     // resets the variable to allow users to restart the test
//     pos = 0;
//     correct = 0;
//     // stops rest of renderQuestion function running when test is completed
//     return false;
//   }
//   get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
//   question = questions[pos].question;
//   chA = questions[pos].a;
//   chB = questions[pos].b;
//   chC = questions[pos].c;
//   chD = questions[pos].d;
//   // display the question
//   test.innerHTML = "<h3>"+question+"</h3>";
//   // display the answer options
//   // the += appends to the data we started on the line above
//   test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
//   test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
//   test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
//   test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chD+"</label><br><br>";
//   test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
// }

// function checkAnswer(){
//     // use getElementsByName because we have an array which it will loop through
//     choices = document.getElementsByName("choices");
//     for(var i=0; i<choices.length; i++){
//       if(choices[i].checked){
//         choice = choices[i].value;
//       }
//     }
//     // checks if answer matches the correct choice
//     if(choice == questions[pos].answer){
//       //each time there is a correct answer this value increases
//       correct++;
//     }
//     // changes position of which character user is on
//     pos++;
//     // then the renderQuestion function runs again to go to next question
//     renderQuestion();
// }


// // function countdown() {
// //     var timeLeft = 75;

// //     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
// //     var timeInterval = setInterval(function() {
// //         if (timeLeft > 1) {
// //         timerEl.textContent = timeLeft;
// //         timeLeft--;
// //         } else if (timeLeft === 1) {
// //         timerEl.textContent = timeLeft;
// //         timeLeft--;
// //         } else {
// //         timerEl.textContent = '';
// //         clearInterval(timeInterval);
// //         }
// //     }, 1000);
// //     console.log(countdown);
// // }

// // startBtn.onclick = countdown;
// window.addEventListener("load", renderQuestion);