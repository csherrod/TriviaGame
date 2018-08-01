var panel = $('#quiz-area')
var countStartNumber = 30

// Triva Questions Array
var questions = [
	{
		question: 'When was the greatest football club that ever existed, Chelsea FC, founded?',
		answers: ['1986', '1905', '1914', '1933'],
		correctAnswer: '1905',
		image: 'assets/images/RudigerCelebrates.webp'
	},
	{
		question: 'What is Chelsea\'s main color?',
		answers: ['Red', 'Blue', 'Green', 'Yellow'],
		correctAnswer: 'Blue',
		image: 'assets/images/DavidLuiz.webp'
	},
	{
		question: 'Who was the first manager in Chelsea\'s history?',
		answers: [
			'Antonio Conte',
			'Jon Gruden',
			'John Tait Robertson',
			'Rupert Thor Hastings'],
		correctAnswer: 'John Tait Robertson',
		image: 'assets/images/CoachCelebrates.webp'
	},
	{
		question: 'Which one of these players came from Bolton to Chelsea?',
		answers: ['Frank Lampard','Ashley Cole','Eden Hazard','Nicholas Anelka'],
		correctAnswer: 'Nicholas Anelka',
		image: 'assets/images/GreatJob.webp'
	},
	{
		question: 'Frank Lampard played for Chelsea and England. What Premier League club was he with before joining Chelsea?',
		answers: ['West Ham United','Man United','Manchester City','Leicester City'],
		correctAnswer: 'West Ham United',
		image: 'assets/images/EpicSlide.webp'
	},
	{
		question: 'In What Year did Chelsea win their first FA Charity/Community Shield?',
		answers: ['1949','1952','1955','1964'],
		correctAnswer: '1955',
		image: 'assets/images/HazardFistPump.webp'
	},
	{
		question: 'What is the full capacity of Stamford Bridge?',
		answers: ['63,412','41,837','28,211','55,882'],
		correctAnswer: '41,837',
		image: 'assets/images/KidDance.webp'
	},
	{
		question: 'What is the name of Chelsea\'s official mascot?',
		answers: ['The Blue Bear','Stamford the Lion','The Chelsea Cheater','The Blue Boot'],
		correctAnswer: 'Stamford the Lion',
		image: 'assets/images/DrogaCelebrates.webp'
	},
	{
		question: 'What year did Chelsea win it\'s first league championship?',
		answers: ['1909','1917','1932','1955'],
		correctAnswer: '1955',
		image: 'assets/images/TheOfficeDance.webp'
	},
	{
		question: 'How did Roman Abramovich, the owner of Chelsea FC, earn his money',
		answers: ['Manufacturing','Oil','Telecommunications','Liquor'],
		correctAnswer: 'Oil',
		image: 'assets/images/YoureAwesome.webp'
	}
]

var timer
var game = {
	questions: questions,
	currentQuestion: 0,
	counter: countStartNumber,
	correct: 0,
	incorrect: 0,
  
	countdown: function() {
		this.counter--
		$('#counter-number').text(this.counter)
		if (this.counter === 0) {
			console.log('TIME UP')
			this.timeUp()
		}
	},
  
	loadQuestion: function() {
  
		timer = setInterval(this.countdown.bind(this), 1000)
  
		panel.html('<h2>' + questions[this.currentQuestion].question + '</h2>')
  
		for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
			panel.append('<button type=\'button\' class=\'btn btn-outline-secondary btn-lg answer-button\' id=\'button\' data-name=\'' + questions[this.currentQuestion].answers[i]
        + '\'>' + questions[this.currentQuestion].answers[i] + '</button>')
		}
	},
  
	nextQuestion: function() {
		this.counter = window.countStartNumber
		$('#counter-number').text(this.counter)
		this.currentQuestion++
		this.loadQuestion.bind(this)()
	},
  
	timeUp: function() {
  
		clearInterval(window.timer)
  
		$('#counter-number').text(this.counter)
  
		panel.html('<h2 class=\'caution\'>Out of Time!</h2>')
		panel.append('<h3>The Correct Answer was:</h3><h3 class=\'right\'>' + questions[this.currentQuestion].correctAnswer)
		panel.append('<img src=\'' + questions[this.currentQuestion].image + '\' />')
  
		if (this.currentQuestion === questions.length - 1) {
			setTimeout(this.results, 3 * 1000)
		}
		else {
			setTimeout(this.nextQuestion, 3 * 1000)
		}
	},
  
	results: function() {
  
		clearInterval(window.timer)
  
		panel.html('<h2>Hey, you finished! Here\'s the results</h2>')
  
		$('#counter-number').text(this.counter)
  
		panel.append('<h3 class=\'right\'>Correct Answers: ' + this.correct + '</h3>')
		panel.append('<h3 class=\'wrong\'>Incorrect Answers: ' + this.incorrect + '</h3>')
		panel.append('<h3 class=\'caution\'>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>')
		panel.append('<br><button type=\'button\' class=\'btn btn-lg\' id=\'start-over\'>Start Over?</button>')
	},
  
	clicked: function(e) {
		clearInterval(window.timer)
		if ($(e.target).attr('data-name') === questions[this.currentQuestion].correctAnswer) {
			this.answeredCorrectly()
		}
		else {
			this.answeredIncorrectly()
		}
	},
  
	answeredIncorrectly: function() {
  
		this.incorrect++
  
		clearInterval(window.timer)
  
		panel.html('<h2 class=\'wrong\'>Sorry!</h2>')
		panel.append('<h3>The Correct Answer was:</h3><h3 class=\'right\'>' + questions[this.currentQuestion].correctAnswer + '</h3>')
		panel.append('<img src=\'' + questions[this.currentQuestion].image + '\' />')
  
		if (this.currentQuestion === questions.length - 1) {
			setTimeout(this.results.bind(this), 3 * 1000)
		}
		else {
			setTimeout(this.nextQuestion.bind(this), 3 * 1000)
		}
	},
  
	answeredCorrectly: function() {
  
		clearInterval(window.timer)
  
		this.correct++
  
		panel.html('<h2 class=\'right\'>Correct!</h2>')
		panel.append('<img src=\'' + questions[this.currentQuestion].image + '\' />')
  
		if (this.currentQuestion === questions.length - 1) {
			setTimeout(this.results.bind(this), 3 * 1000)
		}
		else {
			setTimeout(this.nextQuestion.bind(this), 3 * 1000)
		}
	},
  
	reset: function() {
		this.currentQuestion = 0
		this.counter = countStartNumber
		this.correct = 0
		this.incorrect = 0
		this.loadQuestion()
	}
}
  
// CLICK EVENTS
  
$(document).on('click', '#start-over', game.reset.bind(game))
  
$(document).on('click', '.answer-button', function(e) {
	game.clicked.bind(game, e)()
})
  
$(document).on('click', '#start', function() {
	$('#header').empty()
	$('#sub-wrapper').prepend('<h2>Time Remaining: <span id=\'counter-number\'>30</span> Seconds</h2>')
	game.loadQuestion.bind(game)()
})
