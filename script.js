window.onload = function(){
    startGame()
    selectAnswer()
}

const quizObj = {
    firstQuestion : {
        question : 'What is the result of 2 + 2 ?',
        correctAnswer : '4',
        incorrectAnswers : ['2', '5', '7']
    },
    secondQuestion : {
        question : 'How we call function named "foo"?',
        correctAnswer : 'foo()',
        incorrectAnswers : ['function foo()', 'foo', 'call function foo()']
    },
    thirdQuestion : {
        question : 'What "DOM" means?',
        correctAnswer : 'Document Object Model',
        incorrectAnswers : ['Something nice', 'I dont really know', 'Maybe ill go back to school?']
    },
    fourthQuestion : {
        question : 'What is HTML?',
        correctAnswer : 'HyperText Markup Language',
        incorrectAnswers : ['Something nice', 'I dont really know', 'Maybe ill go back to school?']
    }
}


const getMainTag = document.getElementsByTagName('main')
const userScore = 0

// Starting quiz
const startGame = function(){
    let questionArr = Object.entries(quizObj) // Converting quizObj into an array
    let getRandom = Math.floor(Math.random() * questionArr.length) // Generating random question

    // Creating question node and applying value to it
    const createQuestionContainer = function(){
        let createQuestionNode = document.createElement('div')
        createQuestionNode.id = 'question-container'
        createQuestionNode.innerText = questionArr[getRandom][1].question
        getMainTag[0].appendChild(createQuestionNode)    
    }

    // Creating answer nodes and applaying values to it
    const createAnswerContainers = function(){
        questionArr[getRandom][1].incorrectAnswers.push(questionArr[getRandom][1].correctAnswer) // Pushing correct answer into incorrect answers array
        shuffle(questionArr[getRandom][1].incorrectAnswers)
        for (let i = 0; i < 4; i++){
            let createAnswerNode = document.createElement('div')
            createAnswerNode.classList.add('answer')
            createAnswerNode.innerText = questionArr[getRandom][1].incorrectAnswers[i]
            createAnswerNode.onclick = selectAnswer
            getMainTag[0].appendChild(createAnswerNode)
        }
    }
    createQuestionContainer()
    createAnswerContainers()
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array
  }

const selectAnswer = function(event){
    const currentlySelectedAnswerNode = document.querySelector('.selected')
    if (currentlySelectedAnswerNode !== null){
    currentlySelectedAnswerNode.classList.remove('selected')
    }
    const clickedAnswerNode = event.currentTarget
    clickedAnswerNode.classList.add('selected')
}

/*
const selectAnswer = function(event){
    let getAnswerNodes = document.getElementsByClassName('answer')
    for (let i = 0; i < getAnswerNodes.length; i++){
        getAnswerNodes[i].addEventListener('click', function markAnswer(){getAnswerNodes[i].classList.toggle('choosen')})
    }
}*/
