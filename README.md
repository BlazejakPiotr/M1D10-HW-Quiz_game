# M1D10-Homework-Quiz-game
 

<!--
        QUIZ GAME!

        RULES:
        / The player must guess correctly a certain amount of questions
        / Each correct answer gives him one point
        / Answers could be multiple or true/false
        / At the end of the game, the user must know his/her total score

        QUESTIONS:
        / You can get them from this URL ( http://bit.ly/strive_QUIZZ ) or you can write your own
        / Could be multiple of boolean (true / false)
        / [EXTRA] Show if the answer provided was the wrong one or correct it after clicking
        / [EXTRA] Present the questions one a time instead of having all displayed together

        HINTS:
        / Keep a global variable score for the user score
        / Keep a variable questionNumber for the question the user is answering
        / When questionNumber is bigger then the available questions, present the score
        / Start working with the questions saved in a variable (or you can use AJAX for fetching external questions if you already know it!)
        / Start with the easier version and THEN implement the EXTRAs
        / Please debug everything / try it on the console to be sure of what to expect from your code

        EXTRA:
        / Show if the answer provided was the wrong one or correct it after clicking
        / Present the questions one a time instead of having all displayed together
        / Let the user select difficulty and number of questions (you can get q/a from https://opentdb.com/api.php?amount=10&category=18&difficulty=easy modifying amount and difficulty)

    -->
    
    TODO LIST:
    ____________
    • BASIC HTML:
        - heading for game title
        • container for game: 
            - container for question description
            - containers for answers
            - container with button to accept selected question
            - container for point counter
        - footer with author information
    ____________
    • BASIC CSS:
        - dark theme
        • styling like in who wants to be a millionaire:
            - dark-blue to slightly lighter dark-blue gradient for bars like in who wants to be a millionaire
            - class for choosen answer with orange gradient
            - class for proper answer with green gradient
    ____________
    • BASIC JS:
        - user must be able to select one answer
        - after selecting answer user must revcive information is this answer correct or not
        - if answer is correct, his score must increase 
        - then user should get next question
        - repeat previous steps until user answer all questions
        - after answering all questions, user must recive his final score
    ____________
    JS SOLUTIONS:
        - an object for storing nested objects with question description and an array with correct and incorrect answers
        - correct answer should be always index[0]
         - mechanism to shuffle answer location







