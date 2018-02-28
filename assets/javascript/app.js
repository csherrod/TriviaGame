
//Setting Global Variables
var images = ["./assets/images/Chelsea_FC.png", "./assets/images/chelsea_flame.jpg", "./assets/images/Champions.jpeg", "./assets/images/Diego_Costa.jpg"];

var showImage;
var number = 5;
var intervalId;
var count = 0;
var wins = 0;
var losses = 0;

var trivia = [
    {
        question: "When was Chelsea FC founded?",
        answers: ["1986", "1905", "1914", "1933"], 
        correctAnswer: "1905",
},
{
    question: "What is Chelsea's main color?",
    answers: ["Red", "Blue", "Green", "Yellow"], 
    correctAnswer: "Blue",
},
];



var questions = ["When was Chelsea FC founded?",
 "What is Chelsea's main color?"];



$("#start").on("click", function() {
    console.log("you clicked me");
    $("#start").html("<button>").addClass("btn btn-outline-secondary btn-lg", "click").text("Next");
    $("h1").empty();
    $("#listAnswers1").empty();
    $("#listAnswers2").empty();
    $("#listAnswers3").empty();
    $("#listAnswers4").empty();
    run();
    start();

});

//Timer function for Trivia Game
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {

    number--;
    $("#computer").text(number);
    if (number === 0) {
        stop();

        console.log("Times Up!");
    }
  }

  function stop() {
      clearInterval(intervalId);
  }

  function start() {
   
    $("h1").html("<div>" + trivia[count].question);
    for (var i = 0; i < trivia[count].answers.length; i++)
    
{
    var radio = $("<input>");
    radio.attr("type", "radio");
    radio.attr("name", "inlineRadioOptions'");
    radio.attr("value", trivia[count].answers[i]);
    radio.addClass("form-check-input");
    radio.attr("id", "inlineRadio" + (i + 1));
    var label = $("<label>");
    label.addClass("form-check-label");
    label.attr("for", "inlineRadio" + (i + 1));
   
    radio.append(label);
    $("#listAnswers" + (i+1)).append(radio);
    $("#listAnswers" + (i+1)).append(trivia[count].answers[i]);
}
//  if (trivia[count].answers[i] == correctAnswer)
//  wins++;
//  else (losses++);
    
  }