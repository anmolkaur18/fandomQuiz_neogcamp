var readlineSync = require("readline-sync");

const chalk = require('chalk');

var score = 0;
var userName = readlineSync.question("What's your name?");

console.log(chalk.cyanBright.underline('Hello ' + userName));
console.log(chalk.red.bold(" Welcome " + "to **-> Do you Know Luna Lovegood <-**"));

// highscore data
var highScores = [
  {
    name: "Anmol",
    score: 10,
  },

  {
    name: "Malti",
    score: 10,
  },
]

//play function
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.rgb(123, 45, 67).underline("YAY - Right!"));
    score = score + 1;
  }

  else{
    console.log("Wrong!!!");
  }
}

 console.log("current score: ", score);
  console.log("-------------")

  // array of objects
var questions = [
  {
    question: 
    "In which house was she sorted?\na) Hufflepuff\nb) Ravenclaw\n",
    answer: "b"
  },
  {
    question: "Who free her from prison? \na) Harry Potter\nb) Dobby\n",
    answer: "b",
  },
  {
    question: "What did she become after leaving school\na) Magizoologist\nb) Professor",
    answer: "a",
  }
];

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

if(score === 3){
console.log("Nailed it :p " + "  Your score is : " +score);
console.log("-------------")
console.log("THANKS FOR PLAYING")
}

else{
  console.log(" Your score is : " +score);
console.log("-------------")
console.log("THANKS FOR PLAYING")
}
