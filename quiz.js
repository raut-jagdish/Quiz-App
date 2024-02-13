const questions = [
    {
    question: "What is the  capital of India?", 
    answers: [
        {text: "Mumabi", correct: false},
        {text: "Delhi", correct: true},
        {text: "Surat", correct: false},
        {text: "Ganjam", correct: false},
             ]
    },
    {
    question: "What is the  capital of Gujarat?", 
    answers: [
        {text: "Mumabi", correct: false},
        {text: "Gandhinagar", correct: true},
        {text: "Surat", correct: false},
        {text: "Ganjam", correct: false},
        ]
    },
    {
        question: "Which is the  Diamond city of India?", 
        answers: [
            {text: "Mumabi", correct: false},
            {text: "Delhi", correct: false},
            {text: "Surat", correct: true},
            {text: "Ganjam", correct: false},
            ]
    },
    {
        question: "Kitne marks aaya hoga?", 
        answers: [
            {text: "4", correct: false},
            {text: "3", correct: true},
            {text: "2", correct: false},
            {text: "1", correct: false},
            ]
    } 
];

const questionElement= document.getElementById("question");
const answerbutton = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("btn-next");

let currentquestionIndex=0;
let score=0;

function startquiz(){
    currentquestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showquestion();
}

function showquestion(){  

    resetstate();

    let currentquestion = questions[currentquestionIndex];
    let questionNo = currentquestionIndex+1;
    questionElement.innerHTML = questionNo +". "+ currentquestion.question;

    currentquestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
         if(answer.correct){
            button.dataset.correct=answer.correct;
         }
         button.addEventListener("click", selectAnswer);
    });
}

function resetstate(){
    nextbutton.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

function selectAnswer(e){
    const selectbtn = e.target;
    const iscorrect=selectbtn.dataset.correct==="true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }
    else{
        selectbtn.classList.add("Incorrect");
    }    

     Array.from(answerbutton.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
     });
     nextbutton.style.display="block";
    }

    function showscore(){
        resetstate();
        questionElement.innerHTML=`You have ${score} out of ${questions.length}!`;
        nextbutton.innerHTML="Play Again";
        nextbutton.style.display="block"
    }

    function handleNextButton(){
        currentquestionIndex++;
        if(currentquestionIndex<questions.length){
             showquestion();
        }
        else{
            showscore();
        }
    }

    nextbutton.addEventListener("click",()=>{
        if(currentquestionIndex<questions.length){
            handleNextButton();
        }
        else{
            startquiz();
        }
    })

startquiz(); 