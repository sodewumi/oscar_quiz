$(document).ready(function () {
	//counter counts where you are in the game
	var counter;
	//keeps track if the game is finished
	var done;
	//how many you answered correctly
	var numCorrect = 0;
	//the answer the user chooses
	var choice;
	//for the for loop inside the correctChoice function
	var plusOne = 0;


	/*-----------------------------------------------
			create an array of movie objects
	------------------------------------------------*/
	var movies = 
					[{
						question: "Titanic tied with \"Lord of the Rings: Return of the \
							King\" and \"Ben Hur\" for the most oscar wins for a single movie. How many \
							Oscars did Titanic win?",
						sub: "77<sup>th</sup> Academy Awards",
						heading: "Titanic",
						image: "../img/titanic_large.jpg",
						correct: "Eleven Academy Awards",
						questions: ["Ten Academy Awards", "Nine Academy Awards", "Eleven Academy Awards", "Twelve Academy Awards"]
					},
					{
						question: "What is the only Academy Award that Citizen Kane won?",
						sub: "14<sup>th</sup> Academy Awards",
						heading: "Citizen Kane",
						image: "../img/citizen_kane.jpg",
						correct: "Best Orginal Screenplay",
						questions: ["Best Orginal Screenplay", "Best Picture", "Best Director", "Best Film Editing"]
					},
					{
						question: "Which one of these films are not \"Big Five\" Academy Award winners. The Big Five Cartegories are \
									for Best Picture, Best Director, Best Actor, Best Actress, and Best Screenplay (either Best Adapted or \
									orginal Screenplay)",
						sub: "Only three films have won the Big Five",
						heading: "The Big Five",
						image: "../img/general1.jpg",
						correct: "American Beauty",
						questions: ["It Happened One Night", "American Beauty", "One Flew Over the Cuckoo\'s Nest", "The Silence of the Lambs"]
					}, 
					{
						question: "Besides Heath Ledger, who was the only actor to win a posthumous oscar for their work?",
						sub: "Seven actors were nominated posthumously",
						heading: "Posthumous Academy Award",
						image: "../img/heath.jpeg",
						correct: "Peter Finch",
						questions: ["Peter Finch", "James Dean", "Ralph Richardson", "Massimo Troisi"]
					},
					{
						question: "The Kings Speech is the only film to win Best Picture to feature:",
						sub: "83<sup>rd</sup> Academy Awards",
						heading: "The King\'s Speech",
						image: "../img/king.jpg",
						correct: "Dogs",
						questions: ["Dogs", "Cats", "Bananas", "Apples"]
					},
					{
						question: "Paul Newman played \"Fast Eddie\" Felson in the 1961 film <em>The Hustler</em>. \
									25 years later he won an Academy Award for playing the same character in what movie?",
						sub: "59<sup>th</sup> Academy Awards",
						heading: "Paul Newman",
						image: "../img/paul.jpg",
						correct: "The Color of Money",
						questions: ["Moneyball", "Wag the Dog", "Adaptation", "The Color of Money"]
					},
					{
						question: "Halle Berry is infamous for winning a Razzie, an award for the worst in film, for her \
								her performance in Catwoman immediately following her Oscar win. Which one of these Oscar wining Actors \
								and Actresses have not also won a Razzie.",
						sub: "The worst of the best",
						heading: "Razzie winning Oscar winners",
						image: "../img/halle.jpg",
						correct: "Brad Pitt",
						questions: ["Liza Minnelli", "Sandra Bullock", "Brad Pitt", "Roberti Benigni"]
					},
					{
						question: "Adrian Brody became the youngest Academy Award winner for Best Actor when he won for the film \
								<em>The Pianist</em> How old was Adrien Brody when he won?",
						sub: "75<sup>th</sup> Academy Awards",
						heading: "The Pianist",
						image: "../img/brody.jpg",
						correct: "Twenty-Nine",
						questions: ["Thirty", "Twenty-Five", "Twenty-Seven", "Twenty-Nine"]
					},
					{
						question: "The longest Academy Award ceremony came at 4 hours and 23 minutes. Who hosted this ceremony?",
						sub: "This person hosted the Academy Awards four times",
						heading: "Longest Running ceremony",
						image: "../img/bored.jpg",
						correct: "Whoopi Goldberg",
						questions: ["Whoopi Goldberg", "Billy Crystal", "Steve Martin", "Chevy Chase"]
					},
					{
						question: "Edith Head has won eight awards- the most awards won by any woman. Which category did she win?",
						sub: "All eight awards came from the same category.",
						heading: "Longest Running ceremony",
						image: "../img/edith.jpg",
						correct: "Best Costume Design",
						questions: ["Best Original Song", "Best Film Editing", "Best Costume Design", "Best Adapted Screenplay"]
					}]	

	//starts a new game
	var newGame = function () {
		counter = 0;
		done = false;

	}

	//puts each questions and answers to the html
	var movieQuiz = function() {
		var question = $('#formatting').children('p');  //the quiz question
		var	subtitle = $('#formatting').children('h2'); //the subtitle below the question
		var	title = $('#formatting').children('h1');	//the question title
		//each question
		var questionOne = $('.question1').children('a');
		var questionTwo = $('.question2').children('a');
		var questionThree = $('.question3').children('a');
		var questionFour = $('.question4').children('a');
		
		//empties each html before clicked
		var remove = function () {
			if (question.text() !== null) {
				question.empty();
				subtitle.empty();
				title.empty();
				questionOne.empty();
				questionTwo.empty();
				questionThree.empty();
				questionFour.empty();
			}
		}
		remove();

		//question
		question.append(movies[counter].question);
		subtitle.append(movies[counter].sub);
		title.append(movies[counter].heading);

 		//answers
		questionOne.append(movies[counter].questions[0]);
		questionTwo.append(movies[counter].questions[1]);
		questionThree.append(movies[counter].questions[2]);
		questionFour.append(movies[counter].questions[3]);

		$('.pic').css({"background-image": "url(" +movies[counter].image+")"})


		counter++;
	}

/*-------------------------------------
	Judges if the choice selected is correct
-----------------------------*/
	var correctChoice = function () {
		var header = $('#counter').children('h1');
		//returns all the answers
		var answerList = [];
		var answersLists;

		//removes header
		if (header.text() !== null) {
			header.empty();
		}

		//counter is already at one by the time this function starts
		//so you need to subtract counter by one
		if (choice === movies[counter -1].correct) {
			header.append('Question '+counter+ ': Correct');

			numCorrect++
		} else {
			header.append('Question '+counter+ ': Wrong');
		}

		//shows user the correct answer
		for (var i = plusOne; i < (counter); i++) {
			answersLists += $('#answer'+ i).append(counter +": "+movies[i].correct);
		}

		plusOne++;

	}
	

	newGame();

	$('#start').click(function () {
		$('#rules').hide();
		$("#quiz").show();
		movieQuiz();
	});

	$('.a').on('click', function() {
		$('#quiz').hide();
		$("#counter").show();
		choice = $(this).text();
		correctChoice();
	});

	$('#next').on('click', function() {
		$('#counter').hide();
		$('#quiz').show();
		movieQuiz();
	})

});