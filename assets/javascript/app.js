var introPage;
var startButton;
var gamePage;
var questionCount = 0;
var questions = ["Which NFL franchise has won the most super bowls?", "Who holds the NBA record for most triple-doubles in one regular season?", "How many games does each team in the NBA play in the regular season?", "Who holds the career record for most touchdown receptions?", "What is the NFL record for most rushing yards in a single season?"];
var answerChoices = [["San Fransisco 49ers", "New England Patriots", "Pittsburgh Steelers", "Atlanta Falcons"], ["Russell Westbrook", "Magic Johnson", "LeBron James", "Oscar Robertson"], ["75", "82", "80", "70"], ["Randy Moss", "Jerry Rice", "Donald Trump", "Cris Carter"], ["3,481", "986", "2,097", "2,105"]];
var correctAnswers = ["Pittsburgh Steelers", "Russell Westbrook", "82", "Jerry Rice", "2,105"];
var timeLeft = 30;
var timer;
var playerChoice;
var correctCount = 0;
var incorrectCount = 0;
var notAnswered = 0;
var outOfTime = "Time's Up!";
var theAnswer = "The Correct Answer Was: "

$(document).ready(function() {

function startButtonFunction() {
    startButton = "<div class='row'>" + "<div class='col-lg-8 col-lg-offset-2 introPage'>" + "<button type='button' class='btn btn-primary' id='startButton'>Start</button></div></div>";
    $("#content").append(startButton);
}
startButtonFunction();

$("#startButton").on("click", function() {
    populate();
    countdownWrapper();
});
});

function populate() {
    gamePage = "<p class='timeRemaining'>Time Left: <span class='clock'>30</span> Seconds</p>" + questions[questionCount] + "</p>" + "<p class='answerOne'>" + answerChoices[questionCount][0] + "</p>" + "<p class='answerTwo'>" + answerChoices[questionCount][1] + "</p>" + "<p class='answerThree'>" + answerChoices[questionCount][2] + "</p>" + "<p class='answerFour'>" + answerChoices[questionCount][3] + "</p>";
    $("#content").html(gamePage);
}


function populateTimeUp() {
    notAnswered++;
    gamePage = "<p class='timeRemaining'>Time Left: <span class='clock'>" + timeLeft + "</span> Seconds</p>" + "<p>" + outOfTime + "</p>" + "<p>" + theAnswer + correctAnswers[questionCount] + "</p>";
    $("#content").html(gamePage);
    setTimeout(pause, 5000);
}

function populateCorrect() {
    correctCount++;
    gamePage = "<p class='timeRemaining'>Time Left: <span class='clock'>" + timeLeft + "</span> Seconds</p>" + "<p>That Is Correct!!</p>";
    $("#content").html(gamePage);
    setTimeout(pause, 5000);
}

function populateIncorrect() {
    incorrectCount++;
    gamePage = "<p class='timeRemaining'>Time Left: <span class='clock'>" + timeLeft + "</span> Seconds</p>" + "<p>That Is Incorrect!!</p>";
    $("#content").html(gamePage);
    setTimeout(pause, 5000);
}

function pause() {
    if (questionCount < 5) {
        questionCount++;
        populate();
        timeLeft = 30;
        countdownWrapper();
    } else {
        gameOver();
    }
}

function countdownWrapper() {
    timer = setInterval(countdown, 1000);
    function countdown() {
        if (timeLeft === 0) {
            clearInterval(timer);
            populateTimeUp();
        } 
        if (timeLeft > 0) {
            timeLeft--;
        }
        $(".clock").html(timeLeft);
        }
}

function gameOver() {
    gamePage = "<p class='timeRemaining'>Time Left: <span class='clock'>" + timeLeft + "</span> Seconds</p>" + "<p>Game Over, These are your results:</p>" + "<p>Correct Answers: " + correctCount + "</p>" + "<p>Incorrect Answers: " + incorrectCount + "</p>" + "<p>Not Answered: " + notAnswered + "</p>" + "<button class='btn btn-primary resetButton'>Start Over</button>";
    $("#content").html(gamePage);
}

function startOver() {
    questionCount = 0;
    correctCount = 0;
    incorrectCount = 0;
    notAnswered = 0;
    timeLeft = 30;
    populate();
    countdownWrapper();
}


// var firstQuestion = {
//       question: "Which NFL franchise has won the most super bowls?"
//     , answers: ["San Fransisco 49ers", "New England Patriots", "Pittsburgh Steelers", "Atlanta Falcons"]
//     ,  "Pittsburgh Steelers"
// };
// var secondQuestion = {
//       question: "Who holds the NBA record for most triple-doubles in one regular season?"
//     , answers: ["Russell Westbrook", "Magic Johnson", "LeBron James", "Oscar Robertson"]
//     , correctAnswer: 0
// };
// var thirdQuestion = {
//       question: "How many games does each team in the NBA play in the regular season?"
//     , answers: ["75", "82", "80", "70"]
//     , correctAnswer: 1
// };
// var fourthQuestion = {
//       question: "Who holds the career record for most touchdown receptions?"
//     , answers: ["Randy Moss", "Jerry Rice", "Donald Trump", "Cris Carter"]
//     , correctAnswer: 1
// };
// var fifthQuestion = {
//       question: "What is the NFL record for most rushing yards in a single season?"
//     , answers: ["3,481", "986", "2,097", "2,105"]
//     , correctAnswer: 3
// };
// var timeLeft = 30;
// var right = "Correct!";
// var wrong = "Wrong!";
// var correctAnswer = "The Correct Answer Was: ";
// var timesUp = "You Ran Out of Time!";
// var gifs;
// var gameOver = "Game over! Here are your results:";
// var correctAnswers = 0;
// var incorrectAsnwers = 0;
// var unanswered = 0;
// var tryAgain = "Try Again?";

// $("#startButton").on("click", function populate() {
//     $(".introPage").empty();
//     var timerId = setInterval(countdown, 1000);
//     var timer = document.createElement("div");
//     function countdown() {
//         timer.innerHTML = "Time Left: " + timeLeft + " seconds";
//         $("#content").prepend(timer);
//         if (timeLeft === 0) {
//             clearTimeout(timerId);
//             timeUp();
//         } else {
//         timeLeft--;
//         }
//     }
//     var questionDiv = document.createElement("div");
//     questionDiv.innerHTML = firstQuestion.question;
//     $("#content").append(questionDiv);
//     buttons();
//     countdown();
// });
// console.log()

// function buttons() {
//     for (var i = 0; i < firstQuestion.answers.length; i++) {
//         var answerDiv = document.createElement("div");
//         answerDiv.innerHTML = ("<button type='button' class='btn btn-default'>" + firstQuestion.answers[i] + "</button>");
//         var answers = document.getElementById("content");
//         answers.appendChild(answerDiv);
//     }
// };

// function timeUp() {
//     $("#content").html("<div>" + timesUp + "</div><p>" + correctAnswer + firstQuestion.correctAnswer + "</p>");

// }