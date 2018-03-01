$(document).ready(function() {
  //Setting Global Variables
  var images = [
    "./assets/images/Chelsea_FC.png",
    "./assets/images/chelsea_flame.jpg",
    "./assets/images/Champions.jpeg",
    "./assets/images/Diego_Costa.jpg"
  ];

  var showImage;
  var number = 5;
  var intervalId;
  var count = 0;
  var wins = 0;
  var losses = 0;
  var playerGuess;

  var trivia = [
    {
      question: "When was Chelsea FC founded?",
      answers: ["1986", "1905", "1914", "1933"],
      correctAnswer: "1905"
    },
    {
      question: "What is Chelsea's main color?",
      answers: ["Red", "Blue", "Green", "Yellow"],
      correctAnswer: "Blue"
    },
    {
      question: "Who was the first manager in Chelsea's history?",
      answers: [
        "Antonio Conte",
        "Jon Gruden",
        "John Tait Robertson",
        "Rupert Thor Hastings"],
      correctAnswer: "John Tait Robertson"
    }
  ];

  $("#start").on("click", function() {
    $("#start")
      .html("<button>")
      .addClass("btn btn-outline-secondary btn-lg", "click")
      .text("Next");
    $("h1").empty();
    $("#listAnswers1").empty();
    $("#listAnswers2").empty();
    $("#listAnswers3").empty();
    $("#listAnswers4").empty();
    run();
    start(); //having the game reset inside this click function is breaking it
    number = 10;
    count++;
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
    for (var i = 0; i < trivia[count].answers.length; i++) {
      var radio = $("<input>");
      radio.attr("type", "radio");
      radio.attr("name", "inlineRadioOptions");
      radio.attr("value", trivia[count].answers[i]);
      radio.addClass("form-check-input");
      radio.attr("id", "inlineRadio" + (i + 1));
      var label = $("<label>");
      label.addClass("form-check-label");
      label.attr("for", "inlineRadio" + (i + 1));

      radio.append(label);
      $("#listAnswers" + (i + 1)).append(radio);
      $("#listAnswers" + (i + 1)).append(trivia[count].answers[i]);
    }
    $("input").on("click", function() {
       playerGuess = this.value;
       console.log(this.value);
       console.log(trivia[count].correctAnswer);
       if (playerGuess === trivia[count].correctAnswer) {
        wins++;
      } else if (playerGuess !== trivia[count].correctAnswer) {
        losses++;
      }
    });
    $("#wins").text(wins);
    $("#losses").text(losses);
  }
});
