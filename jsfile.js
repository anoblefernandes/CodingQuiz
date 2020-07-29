console.log("Hello World");

// DOM elements

const start = document.getElementById("start");

const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const scoreContainer = document.getElementById("scoreContainer");
const timer = document.getElementById("timer");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const highScore = document.getElementById("score");
var score = 0;


// Quetions are set to a variable as an array.

let questions = [
    {
        question : "What does HTML stand for?",
        choiceA : "Ham, Turkey, Mayo, Lettuce",
        choiceB : "Home Timer Markdown Literal",
        choiceC: "Hybrid Text Model Locator",
        choiceD: "Hyper Text Markup Language",
        correct: "D"
    },
    {
        question : "All of the following are reference type variables, EXCEPT?",
        choiceA : "Boolean",
        choiceB : "Functions",
        choiceC: "Objects",
        choiceD: "Arrays",
        correct: "A"
    },
    {
        question : "What does DOM stand for?",
        choiceA : "Donuts On Me",
        choiceB : "Document Override Mode",
        choiceC: "Document Object Model",
        choiceD: "Driver Object Mainframe",
        correct: "C"
    },
];

// Start quiz function

start.addEventListener("click", startQuiz);

function startQuiz(){
    renderQuestion();
    // renderProgress(); console.log ("Hey you.");
    // renderCounter();
    var fiveMinutes = 60 * 5;
    var display = document.querySelector('#timer'); 
    console.log (display)
    startTimer(fiveMinutes, display);
}

//  Render question is the mechanism that calls up the question.

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
let count = 0;
let questionTime = -10;

function renderQuestion(){
    let q = questions[runningQuestionIndex]; console.log(q);
    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;    
}

// Render progress is the mechanism that monitors the questions run

// function renderProgress(){
//     for(let qIndex = 0; qIndex <= lastQuestionIndex;
//         qIndex++){
//             progress.innerHTML += "<div class='progress' id="+ qIndex +" ></div>;"
//         }
// }

// Time counter 

var timer2;

function startTimer(duration, display) {
            
    // var timer = duration, minutes, seconds;
    // if (--timer < 0) {
    //   timer = duration;
    // }

timer2 = setInterval (displayTime, 1000)
  }

  function displayTime (){
    minutes = parseInt(timer2 / 60, 10);
    seconds = parseInt(timer2 % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timer.textContent = minutes + ":" + seconds;
  }

// Render counter counts the correct answers and deducts time

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        count++;
    }else{
        count = 0;
        answerIsWrong();
        if( runningQuestionIndex < lastQuestionIndex){
            runningQuestionIndex++;
            renderQuestion();
        }else{ clearInterval(TIMER);
            scoreRender();
        }
    }
}

// Check answer function

function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct == answer){
        score++;
        highScore.textContent=score;
        // answerIsCorrect;
    }else{
        timer2-=100;
        // answerIsWrong;
    }
    runningQuestionIndex++
    renderQuestion();

    // if(runningQuestionIndex < lastQuestionIndex){
    //     count = 0;
    //     runningQuestionIndex++;
    //     renderQuestion();
    // }else{
    //     clearInterval(TIMER);
    //     scoreRender();
    // }
}

// Score render Function

function scoreRender(){
    scoreContainer.style.display = "block";
    let scorePerCent = Math.round(100 * score / questions.length);
    scoreContainer.innerHTML = scorePerCent;
}

// Progress Render Function

function progressRender(){
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        progress.innerHTML += "<div class='progress' id=" + qIndex + "></div>"
    }
}

function answerIsCorrect(){
     document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
}
function answerIsWrong(){
        document.getElementById(runningQuestionIndex).style.backgroundColor = "red"
}
