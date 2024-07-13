// Quiz questions and answers
const quizData = [
    {
        question: "what is the full form of CSS?",
        options: ["Cascading Style Sheets", "Cascading Special Sheets", "Cascading Sheets style", ],
        answer: 0
    },
    {
        question: "How can we change the bg of colour of an element?",
        options: ["background-color", "color", "Both A and B",],
        answer: 0
    },
    {
        question: "How many heading tags are there?",
        options: ["h1-h5", "h1-h6", "h1-h4", ],
        answer: 1
    },
    {
        question: "What is the effect of <b> tag?",
        options: ["used to change font size", "converts the text in bold", "Used to write b lack coloured text", ],
        answer: 1
    }
];

// Current question index
let currentQuestion = 0;

// Get HTML elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

// Display current question
function displayQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.textContent = currentQuiz.question;
    optionsElement.innerHTML = "";
    currentQuiz.options.forEach((option, index) => {
        const optionElement = document.createElement("li");
        optionElement.innerHTML = `
            <input type="radio" id="option${index + 1}" name="option">
            <label for="option${index + 1}">${option}</label>
        `;
        optionsElement.appendChild(optionElement);
    });
}

// Check answer and display result
function checkAnswer() {
    const userAnswer = document.querySelector("input[name='option']:checked");
    if (userAnswer) {
        const correctAnswer = quizData[currentQuestion].answer;
        if (userAnswer.id === `option${correctAnswer + 1}`) {
            resultElement.textContent = "Correct!";
        } else {
            resultElement.textContent = `Incorrect. The correct answer is ${quizData[currentQuestion].options[correctAnswer]}.`;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            displayQuestion();
        } else {
            resultElement.textContent = "Quiz complete!";
        }
    } else {
        resultElement.textContent = "Please select an answer.";
    }
}

// Display first question
displayQuestion();

// Add event listener to submit button
submitButton.addEventListener("click", checkAnswer)