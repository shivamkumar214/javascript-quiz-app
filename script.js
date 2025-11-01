// const quizeData = [
//     {
//         question: "which language run in a web browser?",
//         a:"Java",
//         b:"C",
//         c:"Python",
//         d:"Js",
//         correct:"d",
//     },
//      {
//         question: "What does CSS stands for?",
//         a:"Central style sheets",
//         b:"Cascading style sheets",
//         c:"Central simple sheets",
//         d:"Central style sample",
//         correct:"b",
//     },
//      {
//         question: "What does HTML stands for?",
//         a:"HyperText Markedup language",
//         b:"HyperbolicText Markedup language",
//         c:"Hyper Markedup language",
//         d:"HyperText Making language",
//         correct:"a",
//     },
// ];


const quizeData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Js",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central style sheets",
        b: "Cascading style sheets",
        c: "Central simple sheets",
        d: "Central style sample",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "HyperText Markedup language",
        b: "HyperbolicText Markedup language",
        c: "Hyper Markedup language",
        d: "HyperText Making language",
        correct: "a",
    },
    {
        question: "Which year was JavaScript created?",
        a: "1995",
        b: "1999",
        c: "2001",
        d: "2005",
        correct: "a",
    },
    {
        question: "Which company developed JavaScript?",
        a: "Microsoft",
        b: "Netscape",
        c: "Google",
        d: "Oracle",
        correct: "b",
    },
    {
        question: "What does DOM stand for?",
        a: "Document Object Model",
        b: "Data Object Model",
        c: "Document Oriented Model",
        d: "Display Object Model",
        correct: "a",
    },
    {
        question: "What is the correct way to link a CSS file?",
        a: "<style src='style.css'>",
        b: "<css src='style.css'>",
        c: "<link rel='stylesheet' href='style.css'>",
        d: "<stylesheet>style.css</stylesheet>",
        correct: "c",
    },
    {
        question: "Which HTML tag is used to create a numbered list?",
        a: "<ol>",
        b: "<ul>",
        c: "<li>",
        d: "<list>",
        correct: "a",
    },
    {
        question: "Which property is used to change the background color in CSS?",
        a: "color",
        b: "background-color",
        c: "bg-color",
        d: "background",
        correct: "b",
    },
    {
        question: "How do you write a comment in JavaScript?",
        a: "# Comment",
        b: "<!-- Comment -->",
        c: "// Comment",
        d: "** Comment **",
        correct: "c",
    },
    {
        question: "What does SQL stand for?",
        a: "Structured Query Language",
        b: "Strong Question Language",
        c: "Structured Question Language",
        d: "Sequential Query Language",
        correct: "a",
    },
    {
        question: "Which of the following is not a programming language?",
        a: "HTML",
        b: "Python",
        c: "C++",
        d: "Java",
        correct: "a",
    },
    {
        question: "Which method is used to print something in the console in JavaScript?",
        a: "console.log()",
        b: "print()",
        c: "log.console()",
        d: "write.console()",
        correct: "a",
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        a: "<a>",
        b: "<link>",
        c: "<href>",
        d: "<hyper>",
        correct: "a",
    },
    {
        question: "Which operator is used to assign a value in JavaScript?",
        a: "=",
        b: "==",
        c: "===",
        d: ":=",
        correct: "a",
    },
    {
        question: "What does the `typeof` operator return in JavaScript?",
        a: "The type of a variable",
        b: "The value of a variable",
        c: "The function name",
        d: "An object",
        correct: "a",
    },
        {
        question: "Which of these is a loop in JavaScript?",
        a: "for",
        b: "while",
        c: "do...while",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        a: "let",
        b: "var",
        c: "const",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        a: "//",
        b: "/* */",
        c: "#",
        d: "<!-- -->",
        correct: "a",
    },
    {
        question: "What will `2 + '2'` return in JavaScript?",
        a: "22",
        b: "4",
        c: "undefined",
        d: "NaN",
        correct: "a",
    },
    {
        question: "What is the output of `Boolean('')`?",
        a: "false",
        b: "true",
        c: "0",
        d: "undefined",
        correct: "a",
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        a: "onchange",
        b: "onmouseover",
        c: "onmouseclick",
        d: "onclick",
        correct: "d",
    },
    {
        question: "Which HTML tag is used to insert an image?",
        a: "<image>",
        b: "<img>",
        c: "<pic>",
        d: "<src>",
        correct: "b",
    },
    {
        question: "Which keyword is used to exit a loop in JavaScript?",
        a: "exit",
        b: "stop",
        c: "break",
        d: "return",
        correct: "c",
    },
    {
        question: "Which method adds a new element at the end of an array in JS?",
        a: "push()",
        b: "pop()",
        c: "shift()",
        d: "concat()",
        correct: "a",
    }
];

const quize= document.getElementById('quize')
const answerEls=document.querySelectorAll('.answer');
const questionEl=document.getElementById('question');

const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');

const submitBtn=document.getElementById('submit');
let arr = [];
 
function randomCurrQuiz(){  
    let randomC;
    while(x!=1){
        randomC = Math.floor(Math.random()*25)
        x=checkrandom(randomC,arr);
    }   
    arr.push(randomC)
    return randomC
}
function checkrandom(randomC, arr) {
    return arr.includes(randomC) ? 0 : 1;
}
let x=0;
let currQuiz= randomCurrQuiz();
let score = 0;
let count = 0;

loadQuize();

function loadQuize(){
    deselectAnswers();
    const currentQuizeData=quizeData[currQuiz];
    count++;

    questionEl.innerText = currentQuizeData.question;
    a_text.innerText = currentQuizeData.a;
    b_text.innerText = currentQuizeData.b;
    c_text.innerText = currentQuizeData.c;
    d_text.innerText = currentQuizeData.d;
}
function deselectAnswers(){
    // let answer;
    answerEls.forEach((answerEl) => answerEl.checked = false)
}
function getSelected(){
    let answer;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer=answerEl.id
            console.log(answer," option is selected for question no. ",currQuiz+1)
        }
    })
    return answer;   
}
function over(){
    quize.innerHTML = `
                <h2>you answered correctly at ${score}/5 questions.</h2>
                <button onclick="location.reload()" style="width: 100%; 
                padding: 15px; font-size: 24px; background-color: magenta;
                border: none; color: black;"> Reload </button>
                `;
}
submitBtn.addEventListener('click',() => {
    const answer = getSelected();
    if(answer){
        if(answer == quizeData[currQuiz].correct){
            score++;            
        }
        // currQuiz++;
        if(count >= 5){
            over();
        }else{
            x=0;
            currQuiz= randomCurrQuiz();
            loadQuize();
        }
    }else {
        alert("Please select an answer before continuing!");
    }

})