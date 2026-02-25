const questions = [
    {
        question: "Which language is used for web structure?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: 0
    },
    {
        question: "Which property changes text color in CSS?",
        options: ["font-style", "color", "background", "text-align"],
        answer: 1
    },
    {
        question: "Which keyword declares a variable in JS?",
        options: ["int", "var", "define", "float"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById("question").innerText = questionData.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestion].answer;
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach((btn, index) => {
        if (index === correctIndex) {
            btn.classList.add("correct");
        } else if (index === selectedIndex) {
            btn.classList.add("wrong");
        }
        btn.disabled = true;
    });

    if (selectedIndex === correctIndex) {
        score++;
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question-box").classList.add("hidden");
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("score").innerText =
        score + " / " + questions.length;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("question-box").classList.remove("hidden");
    document.getElementById("next-btn").classList.remove("hidden");
    document.getElementById("result-box").classList.add("hidden");
    loadQuestion();
}

loadQuestion();