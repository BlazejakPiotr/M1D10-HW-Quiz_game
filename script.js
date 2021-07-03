window.onload = function(){
    createQuestionContainer()
    createAnswerContainers()
}

const userScore = 0

// TODO : 
// Create an array of questions with nested array with answers

const myObj = {
    firstQuestion : {
        question : 'What is the result of 2 + 2 ?',
        correctAnswer : '4',
        incorrectAnswers : ['2', '5', '7']
    },
    secondQuestion : {
        question : 'How we call function named "foo"?',
        correctAnswer : 'foo()',
        incorrectAnswers : ['function foo()', 'foo', 'call function foo()']
    }
}


let getMainTag = document.getElementsByTagName('main')

// Creating question container
const createQuestionContainer = function(){

    let createQuestionNode = document.createElement('div')
    createQuestionNode.id = 'question-container'
    createQuestionNode.innerText = myObj.firstQuestion.question 
    getMainTag[0].appendChild(createQuestionNode)    
}

// Creating four blank answer containers
const createAnswerContainers = function(){
    for (let i = 0; i < 4; i++){
        let createAnswerNode = document.createElement('div')
        createAnswerNode.classList.add('answer')
        createAnswerNode.innerText = myFunction()
        getMainTag[0].appendChild(createAnswerNode)
    }
}

const myFunction = function(){
    alert('whatsaaap')
}