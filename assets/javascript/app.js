    
    // variable containing an array of questions to play the game with
    var gameQuestions = [{

        //question 1
        question: "In which battle did Jon Snow and Sansa Stark retake Winterfell from Lord Ramsay Bolton?",
        possibleAnswers: ["The Battle of the Blackwater", "The Battle at Hardhome ", "The Battle of the Bastards", "The Battle Beyond the Wall"],
        answer: 2
    },
    
    {   //question 2
        question: "Who admitted responsibility for Joffrey's death after being forced to take poison?",
        possibleAnswers: ["Olenna Tyrell", "Gregor Clegane", "Tyrion Lannister", "Oberyn Martell"],
        answer: 0
    },
    
    {   //question 3
        question: "What is the name of the squire in service to Brienne of Tarth?",
        possibleAnswers: ["Gendry", "Podrick Payne", "Hodor", "Bronn"],
        answer: 1
    },
    
    {   //question 4
        question: "Who is the commander of the warrior-eunuchs of Astapor, known as the Unsullied?",
        possibleAnswers: ["Jaime Lannister", "Tormund Giantsbane", "Jojen Reed", "Grey Worm"],
        answer: 3
    },
    
    {   //question 5
        question: "What is the name of the form of obsidian that is capable of killing White Walkers?",
        possibleAnswers: ["Obsidian Scale", "Dragonfang", "Nightshards", "Dragonglass"],
        answer: 3
    },
    
    {   //question 6
        question: "By what method were Randyll and Dickon, the father and brother of Samwell Tarly, killed after their defeat in battle?",
        possibleAnswers: ["Beheading", "Dragonfire", "Hanging", "Stoning"],
        answer: 1
    },
    
    {   //question 7
        question: "How did Euron Greyjoy kill his the brother Balon Greyjoy?",
        possibleAnswers: ["Thrown off a bridge", "Knife to the heart", "Drowning", "Poisoned his wine"],
        answer: 0
    },
    
    {   //question 8
        question: "What's the name of the small sword wielded by Arya Stark?",
        possibleAnswers: ["Wolfbane", "Widows Wail", "Needle", "Angel Smite"],
        answer: 2
    },
    
    {   //question 9
        question: "In which room of the castle was Tywin Lannister when he was mudered by his son Tyrion?",
        possibleAnswers: ["His Bedroom", "The Throne Room", "Small Council Chambers", "Toilet"],
        answer: 3
    },{
        //question 10
        question: "Name the capital city of Westeros' Seven Kingdoms and the seat of the Iron Throne?",
        possibleAnswers: ["Casterly Rock", "Volantis", "King's Landing", "Valyria"],
        answer: 2
    },
    
    {   //question 11
        question: "What is the name of the metal that can kill White Walkers?",
        possibleAnswers: ["Dragon's Scale", "Valyrian Steel", "Dornish Iron", "Winterfell Forged"],
        answer: 1
    },
    
    {   //question 12
        question: "What name is given to the ancestral castle of House Stark?",
        possibleAnswers: ["Dorne", "Braavos", "The Eyrie", "Winterfell"],
        answer: 3
    }];
    
    // variables to use in the <divs> within the game
    var gifArray = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10", "question11", "question12"];
    var questionCount; 
    var correctAnswer; 
    var wrongAnswer; 
    var noAnswer; 
    var seconds; 
    var time; 
    var answered; 
    var playerSelection;
    
    // object for answer responses
    var resultMessages = {
        correct: "Correct....I drink and I know things!",
        wrong: "You know nothing Jon Snow.",  
        timesUp: "Out of time!",
        finished: "<h1> Your watch has ended! </h1>"
        
    }

    
    
    // function to make start button go away after click and start game
    $("#startBtn").on("click", function() {
        $(this).hide();
        newGame();
    });
    
    // function to make restart button go away after click and start new game
    $("#restartBtn").on("click", function() {
        $(this).hide();
        newGame();
    });
    
    // function to start new game. sets values to zero and makes sure divs are empty incase it's a new game
    function newGame() {
        $("#finalResult").empty();
        $("#numberCorrect").empty();
        $("#numberWrong").empty();
        $("#numberUnanswered").empty();
        questionCount = 0;
        correctAnswer = 0;
        wrongAnswer = 0;
        noAnswer = 0;
        nextQuestion();
    }
    
    //  function to proceed to the next question.  makes result divs empty from start
    function nextQuestion() {
        $("#resultMessage").empty();
        $("#correctAnswer").empty();
        $("#gif").empty();
        answered = true;
        
        // generates next question based on the game question array objects 
        $(".question").html("<h2>" + gameQuestions[questionCount].question + "</h2>");
        
        // for loop to generate buttons with answer options based on question number within question array and object contents
        for(var i = 0; i < 4; i++) {
            var options = $("<button class = 'btn-secondary btn-xlg picks'>");
            options.text(gameQuestions[questionCount].possibleAnswers[i]);
            options.attr({"data-index": i });
            options.addClass("answerChosen");
            $(".possibleAnswers").append(options);
        }
        // calls the countdown function
        countdown();
        
        // on click function for when the buttons are clicked it takes the index value of the button clicked, stops the timer, and runs the answerBox function to check if the playerSelection variable is the correct answer or not
        $(".answerChosen").on("click",function() {
            playerSelection = $(this).data("index");
            clearInterval(time);
            answerBox();
        });
    }
    
    // function sets timer to 15 seconds to start in the timer div 
    function countdown() {
        seconds = 15;
        $("#remainingTime").html("<h3>Time Remaining: " + seconds + "</h3>");
        answered = true;

        //sets timer to start counting at a 1 second interval
        time = setInterval(displayCountdown, 1000);
    }
    
    // function that starts timer to count down from 15 and will help determine if time ran out before an answer was picked
    function displayCountdown() {
        seconds--;
        $("#remainingTime").html("<h3>Time Remaining: " + seconds + "</h3>");
        if(seconds < 1){
            clearInterval(time);
            answered = false;
            answerBox();
        }
    }
    
    // function makes sure the divs are empty after answer is chosen and hides buttons and will ultimately check if answers are correct or not
    function answerBox() {
        $("#questionCount").empty();
        $(".answerChosen").empty();
        $(".question").empty();
        $("button").hide();
    
        // variable that sets the text of the correct answer based on the value the "answer" key in the object to determine the position in the child-array
        var rightAnswerText = gameQuestions[questionCount].possibleAnswers[gameQuestions[questionCount].answer];
        
        // varibale that finds the value of the "answer" key of the object that is the posed question from the parent-array
        var rightAnswerIndex = gameQuestions[questionCount].answer;

        //sets the gif for each question based on question number linking it to a name of the file, which are named numerically
        $("#gif").html('<img src = "assets/images/'+ gifArray[questionCount] +'.gif" width = "400px">');
        
        
        //if else statements to check if answers are correct or not

        // if the selection = the correct answer index & an answer was chosen, the answer is correct and adds to the correct answer count then displays correct answer message
        if ((playerSelection == rightAnswerIndex) && (answered == true)) {
            correctAnswer++;
            $("#resultMessage").html(resultMessages.correct);
        } 

        // if the selection DOES NOT EQUAL the correct answer index & an answer was chosen, the answer is wrong and adds to the wrong answer count then displays wrong answer message and lists the correct one
        else if ((playerSelection != rightAnswerIndex) && (answered == true)) {
            wrongAnswer++;
            $("#resultMessage").html(resultMessages.wrong);
            $("#correctAnswer").html("The correct answer was: " + rightAnswerText);
        } 

        // if neither criteria of an answer chosen and correct index value exist, the answer is unanswered and adds to the unanswered count then displays correct answer in a message
        else {
            noAnswer++;
            $("#resultMessage").html(resultMessages.timesUp);
            $("#correctAnswer").html("The correct answer was: " + rightAnswerText);
            answered = true;
        }
        
        // if the number of questions asked equals the length of the questions array -1 then wait 5 seconds and execute the scoreboard function
        if (questionCount == (gameQuestions.length-1)) {
            setTimeout(scoreboard, 5000)
        } 

        // else, keep going with 5 seconds between questions
        else {
            questionCount++;
            setTimeout(nextQuestion, 5000);
        }	
    }
    
    // sets all divs for the answers to empty then displays the final results and a reset button
    function scoreboard(){
        $("#remainingTime").empty();
        $("#resultMessage").empty();
        $("#correctAnswer").empty();
        $("#gif").empty();
    
        $("#finalResult").html(resultMessages.finished);
        $("#numberCorrect").html("Correct Answers: " + correctAnswer);
        $("#numberWrong").html("Incorrect Answers: " + wrongAnswer);
        $("#numberUnanswered").html("Unanswered: " + noAnswer);
        $("#restartBtn").addClass("reset");
        $("#restartBtn").show();
        $("#restartBtn").html("<button class ='btn btn-primary'>Play Again?</button>");
    }

    // code trying to get the main background of the document to change on clicks. keeps failing to load images from assets.
    /*
    var backgroundChoices = ["background1", "background2", "background3"]
    var background = backgroundChoices[(Math.floor(Math.random() * 3))];

    $(document).ready(function(){
    $("body").on("click", function(){
        $(this).css("background-image", "url(images/" + background + ".jpg)");
        });
    });
    */