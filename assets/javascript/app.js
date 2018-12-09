    
    // variable containing an array of questions to play the game with
    var gameQuestions = [{

        // 1st question object (array index 0) with 4 keys ( the question, the choices( an array of 4 choices), the answer (index value of the correct answer), and the gif source)
        question: "In which battle did Jon Snow and Sansa Stark retake Winterfell from Lord Ramsay Bolton?",
        possibleAnswers: ["The Battle of the Blackwater", "The Battle at Hardhome ", "The Battle of the Bastards", "The Battle Beyond the Wall"],
        answer: 2,
        gif: '<img src = "assets/images/image1.gif" width = "500px" height = "350px">'
    },
    
    {   // 2nd question object (array index 1) with 4 keys ( the question, the choices( an array of 4 choices), the answer (index value of the correct answer), and the gif source)
        question: "Who admitted responsibility for Joffrey's death after being forced to take poison?",
        possibleAnswers: ["Olenna Tyrell", "Gregor Clegane", "Tyrion Lannister", "Oberyn Martell"],
        answer: 0,
        gif: '<img src = "assets/images/image2.gif" width = "500px" height = "350px">'

    },
    
    {   // 3rd question object (array index 2) with 4 keys ( the question, the choices( an array of 4 choices), the answer (index value of the correct answer), and the gif source)
        question: "What is the name of the squire in service to Brienne of Tarth?",
        possibleAnswers: ["Gendry", "Podrick Payne", "Hodor", "Bronn"],
        answer: 1,
        gif: '<img src = "assets/images/image3.gif" width = "500px" height = "350px">'

    },
    
    {   // 4th question object (array index 3) with 4 keys ( the question, the choices( an array of 4 choices), the answer (index value of the correct answer), and the gif source)
        question: "Who is the commander of the warrior-eunuchs of Astapor, known as the Unsullied?",
        possibleAnswers: ["Jaime Lannister", "Tormund Giantsbane", "Jojen Reed", "Grey Worm"],
        answer: 3,
        gif: '<img src = "assets/images/image4.gif" width = "500px" height = "350px">'

    },
    
    {   // 5th question object (array index 4) with 4 keys ( the question, the choices( an array of 4 choices), the answer (index value of the correct answer), and the gif source)
        question: "What is the name of the form of obsidian that is capable of killing White Walkers?",
        possibleAnswers: ["Obsidian Scale", "Dragonfang", "Nightshards", "Dragonglass"],
        answer: 3,
        gif: '<img src = "assets/images/image5.gif" width = "500px" height = "350px">'

    },
    
    {   // 6th question object (array index 5) with 4 keys ( the question, the choices( an array of 4 choices), the answer (index value of the correct answer), and the gif source)
        question: "By what method were Randyll and Dickon, the father and brother of Samwell Tarly, killed after their defeat in battle?",
        possibleAnswers: ["Beheading", "Dragonfire", "Hanging", "Stoning"],
        answer: 1,
        gif: '<img src = "assets/images/image6.gif" width = "500px" height = "350px">'

    },
    
    {   // 7th question object (array index 6) with 4 keys ( the question, the choices( an array of 4 choices), the answer (index value of the correct answer), and the gif source)
        question: "How did Euron Greyjoy kill his the brother Balon Greyjoy?",
        possibleAnswers: ["Thrown off a bridge", "Knife to the heart", "Drowning", "Poisoned his wine"],
        answer: 0,
        gif: '<img src = "assets/images/image7.gif" width = "500px" height = "350px">'

    },
    
    {   // 8th question object (array index 7) with 4 keys ( the question, the choices( an array of 4 choices), the answer (index value of the correct answer), and the gif source)
        question: "What's the name of the small sword wielded by Arya Stark?",
        possibleAnswers: ["Wolfbane", "Widows Wail", "Needle", "Angel Smite"],
        answer: 2,
        gif: '<img src = "assets/images/image8.gif" width = "500px" height = "350px">'

    },
    
    {   // 9th question object (array index 8) with 4 keys ( the question, the choices( an array of 4 choices), the answer (index value of the correct answer), and the gif source)
        question: "In which room of the castle was Tywin Lannister when he was mudered by his son Tyrion?",
        possibleAnswers: ["His Bedroom", "The Throne Room", "Small Council Chambers", "Toilet"],
        answer: 3,
        gif: '<img src = "assets/images/image9.gif" width = "500px" height = "350px">'

    },{
        // 10th question object (array index 9) with 4 keys ( the question, the choices( an array of 4 choices), the answer (index value of the correct answer), and the gif source)
        question: "Name the capital city of Westeros' Seven Kingdoms and the seat of the Iron Throne?",
        possibleAnswers: ["Casterly Rock", "Volantis", "King's Landing", "Valyria"],
        answer: 2,
        gif: '<img src = "assets/images/image10.gif" width = "500px" height = "350px">'

    },
    
    {   // 11th question object (array index 10) with 4 keys ( the question, the choices( an array of 4 choices), the answer (index value of the correct answer), and the gif source)
        question: "What is the name of the metal that can kill White Walkers?",
        possibleAnswers: ["Dragon's Scale", "Valyrian Steel", "Dornish Iron", "Winterfell Forged"],
        answer: 1,
        gif: '<img src = "assets/images/image11.gif" width = "500px" height = "350px">'

    },
    
    {   // 12th question object (array index 11) with 4 keys ( the question, the choices( an array of 4 choices), the answer (index value of the correct answer), and the gif source)
        question: "What name is given to the ancestral castle of House Stark?",
        possibleAnswers: ["Dorne", "Braavos", "The Eyrie", "Winterfell"],
        answer: 3,
        gif: '<img src = "assets/images/image12.gif" width = "500px" height = "350px">'

    }];
    
    // variables to use in the <divs> within the game
    var seconds; 
    var time;
    var questionCounter; 
    var rightAnswer; 
    var wrongAnswer; 
    var noAnswer;  
    var answered = false; 
    var playerSelection;
    
    // object for answer responses
    var resultAlerts = {
        correct: "Correct....I drink and I know things!",
        wrong: "You know nothing Jon Snow.",  
        timesUp: "Out of time!",
        finished: "<h1> Your watch has ended! </h1>"
        
    }

    // hiding the restart button at the beginning and making sure the gif div is empty
    $(".restart").hide();
    $("#gif").empty();

    // function to make start button go away after click and start game. function to start new game. sets values to zero and makes sure divs are empty incase it's a new game
    $("#startButton").on("click", function() {
        $(this).hide();
        $("#finalResult").empty();
        $("#numberCorrect").empty();
        $("#numberWrong").empty();
        $("#numberUnanswered").empty();
        rightAnswer = 0;
        wrongAnswer = 0;
        noAnswer = 0;
        questionCounter = 0;
        nextQuestion();
        console.log(this);
    });

    // function sets timer to 20 seconds to start in the remainingTime div 
    function timer() {
        seconds = 20;
        $("#remainingTime").html("<h3>Time Remaining: " + seconds + "</h3>");

        //sets timer to start counting at a 1 second interval
        time = setInterval(timerRunoff, 1000);
        console.log(timer);
    }
    
    // function that starts timer to count down from 20 and will help determine if time ran out before an answer was picked
    function timerRunoff() {
        seconds--;
        $("#remainingTime").html("<h3>Time Remaining: " + seconds + "</h3>");
        if(seconds < 1){
            clearInterval(time);
            answered = false;
            answerBox();
            
            
        }
        console.log(timerRunoff);
    }
    
    // function to fade the window out and bring it back between questions. serves the purpose of making things flashy vs functional
    function fade() {
        $("body").fadeOut("fast");
        $("body").fadeIn("slow");
    }
        console.log(fade);

    //  function to proceed to the next question.  makes result divs empty from start
    function nextQuestion() {
        $("#resultAlerts").empty();
        $("#correctAnswer").empty();
        $("#gif").empty();
        answered = true;
        
        // displays next question based on the game question array objects  and where things are in the count
        $("#displayQuestion").html("<h2>" + gameQuestions[questionCounter].question + "</h2>");
        
        // for loop to generate buttons with answer options based on question number within question array and object contents
        for(var i = 0; i < 4; i++) {
            var options = $("<button class = 'btn-secondary btn-xlg picks'>");
            options.text(gameQuestions[questionCounter].possibleAnswers[i]);
            options.attr({"value": i });
            $("#possibleAnswers").append(options);
            
        }

        // function for to be fade window out after clicking on a button after a time delay of 4.8 seconds
        $(document).ready(function(){
        
            $(".picks").click(function(){
                
                setTimeout(fade, 4800);
                
            })
        })  
        
        console.log(nextQuestion)

        // calls the timer function
        timer();
        
        // on click function for when the buttons are clicked it takes the index value of the button clicked, stops the timer, and runs the answerBox function to check if the playerSelection variable is the correct answer or not
        $(".picks").on("click",function() {
            playerSelection = $(this).val();
            clearInterval(time);
            answerBox();
            console.log(playerSelection);
        });
    }
        

    // function makes sure the divs are empty after answer is chosen and hides buttons and will ultimately check if answers are correct or not
    function answerBox() {
        $("#questionCount").empty();
        $(".picks").empty();
        $(".question").empty();
        $("button").hide();
    
        // varibale that finds the value of the "answer" key of the object that is the posed question from the parent-array
        var correctIndexValue = gameQuestions[questionCounter].answer;

        // variable that sets the text of the correct answer based on the value the "answer" key in the object to determine the position in the child-array
        var correctChoice = gameQuestions[questionCounter].possibleAnswers[gameQuestions[questionCounter].answer];

        //sets the gif for each question based on question number linking it to a name of the file, which are named individually in each object of the gameQuestions array
        $("#gif").html(gameQuestions[questionCounter].gif)
        
        
        //if else statements to check if answers are correct or not

        // if the selection = the correct answer index & an answer was chosen, the answer is correct and adds to the correct answer count then displays correct answer message
        if ((playerSelection == correctIndexValue) && (answered == true)) {
            rightAnswer++;
            $("#resultAlerts").html(resultAlerts.correct);
            
        } 

        // if the selection DOES NOT EQUAL the correct answer index & an answer was picked, the answer is wrong and adds to the wrong answer count then displays wrong answer message and lists the correct one
        else if ((playerSelection != correctIndexValue) && (answered == true)) {
            wrongAnswer++;
            $("#resultAlerts").html(resultAlerts.wrong);
            $("#correctAnswer").html("The correct answer was: " + correctChoice);
            
        } 

        // if neither criteria of a correct index value and answered was not true, the answer is unanswered and adds to the unanswered count then displays correct answer in a message. answered is set to true to go to next question and fade timeout executed for looks.
        else {
            noAnswer++;
            $("#resultAlerts").html(resultAlerts.timesUp);
            $("#correctAnswer").html("The correct answer was: " + correctChoice);
            answered = true;
            setTimeout(fade, 4800);
        }
        
        // if the number of questions asked equals the length of the questions array -1 then wait 5 seconds and execute the endGameResults function
        if (questionCounter == (gameQuestions.length-1)) {
            setTimeout(endGameResults, 5000)
        } 

        // else, keep going with 5 seconds between questions
        else {
            questionCounter++;
            setTimeout(nextQuestion, 5000);
        }	

        console.log(answerBox);
    }
    
    // sets all divs for the answers to empty then displays the final results and a reset button
    function endGameResults(){
        $("#remainingTime").empty();
        $("#resultAlerts").empty();
        $("#correctAnswer").empty();
        $("#gif").empty();
        $("#displayQuestion").empty();
        $("#finalResult").html(resultAlerts.finished);
        $("#numberCorrect").html("Correct Answers: " + rightAnswer);
        $("#numberWrong").html("Incorrect Answers: " + wrongAnswer);
        $("#numberUnanswered").html("Unanswered: " + noAnswer);
        $(".restart").show();
        console.log(endGameResults);
    }

    // same function as the start button just used for the restart button at the end of the game
    $(".restart").on("click", function() {
        $(this).hide();
        $("#finalResult").empty();
        $("#numberCorrect").empty();
        $("#numberWrong").empty();
        $("#numberUnanswered").empty();
        rightAnswer = 0;
        wrongAnswer = 0;
        noAnswer = 0;
        questionCounter = 0;
        nextQuestion();
        console.log(this);
    });
 
       

    // code trying to get the main background of the document to change on clicks. keeps failing to load images from assets.
    
    /*var backgroundChoices = ["background1.jpg", "background2.jpg", "background3.jpg"]
    var background = backgroundChoices[(Math.floor(Math.random() * 3))];

    $(document).ready(function(){
    $("button").click(function(){
        $("body").fadeOut("slow");

        var queryURL = "https://carey-wu.github.io/TriviaGame/assets/images/" + background;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            $("body").css("background-image", response);
            $("body").fadeIn("slow");
        })

        
        });
    });*/
    