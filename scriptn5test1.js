const questions = [
    {//1
        question: "Saya dalam bahasa Jepang?",
        answers: [
            { text: "私たち", correct: false},
            { text: "私", correct: true},
            { text: "あなた", correct: false},
            { text: "彼ら", correct: false},
        ]
    },
    {//2
        question: "Mereka dalam bahasa Jepang?",
        answers: [
            { text: "彼ら", correct: true},
            { text: "私たち", correct: false},
            { text: "私", correct: false},
            { text: "あなた", correct: false},
        ]
    },
    {//3
        question: "Kami dalam bahasa Jepang?",
        answers: [
            { text: "私", correct: false},
            { text: "私たち", correct: true},
            { text: "あなた", correct: false},
            { text: "彼ら", correct: false},
        ]
    },
    {//4
        question: "Kalian dalam bahasa Jepang?",
        answers: [
            { text: "彼ら", correct: false},
            { text: "あなたたち", correct: true},
            { text: "私たち", correct: false},
            { text: "私", correct: false},
        ]
    },
    {//5
        question: "Beliau dalam bahasa Jepang?",
        answers: [
            { text: "さん", correct: false},
            { text: "あの人", correct: true},
            { text: "じん", correct: false},
            { text: "ちゃん", correct: false},
        ]
    },
    {//6
        question: "Guru dalam bahasa Jepang bila untuk merujuk orang lain?",
        answers: [
            { text: "教師", correct: false},
            { text: "先生", correct: true},
            { text: "学生", correct: false},
            { text: "会社員", correct: false},
        ]
    },
    {//7
        question: "Guru dalam bahasa Jepang bila untuk merujuk diri sendiri?",
        answers: [
            { text: "教師", correct: true},
            { text: "先生", correct: false},
            { text: "学生", correct: false},
            { text: "会社員", correct: false},
        ]
    },
    {//8
        question: "Mahasiswa dalam bahasa jepang?",
        answers: [
            { text: "教師", correct: false},
            { text: "先生", correct: false},
            { text: "学生", correct: true},
            { text: "会社員", correct: false},
        ]
    },
    {//9
        question: "Pegawai Perusahaan dalam bahasa jepang?",
        answers: [
            { text: "教師", correct: false},
            { text: "先生", correct: false},
            { text: "学生", correct: false},
            { text: "会社員", correct: true},
        ]
    },
    {//10
        question: "Pegawai bank dalam bahasa jepang?",
        answers: [
            { text: "研究者", correct: false},
            { text: "医者", correct: false},
            { text: "学生", correct: false},
            { text: "銀行員", correct: true},
        ]
    },
    {//11
        question: "dokter dalam bahasa jepang?",
        answers: [
            { text: "研究者", correct: false},
            { text: "医者", correct: true},
            { text: "学生", correct: false},
            { text: "銀行員", correct: false},
        ]
    },
    {//12
        question: "Peneliti dalam bahasa jepang?",
        answers: [
            { text: "研究者", correct: true},
            { text: "医者", correct: false},
            { text: "学生", correct: false},
            { text: "銀行員", correct: false},
        ]
    },
    {//13
        question: "Universitas dalam bahasa jepang?",
        answers: [
            { text: "なんさい", correct: false},
            { text: "大学", correct: true},
            { text: "学生", correct: false},
            { text: "病院", correct: false},
        ]
    },
    {//14
        question: "Rumah sakit dalam bahasa jepang?",
        answers: [
            { text: "なんさい", correct: false},
            { text: "大学", correct: false},
            { text: "学生", correct: false},
            { text: "病院", correct: true},
        ]
    },
    {//15
        question: "Menanyakan umur dalam bahasa jepang sacara sopan?",
        answers: [
            { text: "なんさい", correct: false},
            { text: "なんにん", correct: false},
            { text: "なんにち", correct: false},
            { text: "おいくつ", correct: true},
        ]
    },
    {//16
        question: "Saya Mike Miller",
        answers: [
            { text: "私はメイソン・ミュラーです。", correct: false},
            { text: "私はマイク・ミラーです。", correct: true},
            { text: "私をメイソン・ミュラーです。", correct: false},
            { text: "私をマイク・ミラーです。", correct: false},
        ]
    },
    {//17
        question: "Saya bukan Mike Miller",
        answers: [
            { text: "私はメイソン・ミュラーではありません。", correct: false},
            { text: "私はマイク・ミラーではありません。", correct: true},
            { text: "私をメイソン・ミュラーではありません。", correct: false},
            { text: "私をマイク・ミラーではありません。", correct: false},
        ]
    },
    {//18
        question: "Mereka bukan Mahasiswa",
        answers: [
            { text: "彼らは学生ではありません。", correct: true},
            { text: "彼らは学生です。", correct: false},
            { text: "私たちを学生です。", correct: false},
            { text: "私たちは学生ではありません。", correct: false},
        ]
    },
    {//19
        question: "Apakah Kalian pegawai bank?",
        answers: [
            { text: "あなたたちを会社員ですか。", correct: false},
            { text: "あなたたちは会社員ですか。", correct: false},
            { text: "あなたたちを銀行員ですか。", correct: false},
            { text: "あなたたちは銀行員ですか。", correct: true},
        ]
    },
    {//20
        question: "Saudara Watt seorang guru, Saudara Santos juga seorang guru",
        answers: [
            { text: "ワットさんは先生です、サントスさんを先生です。", correct: false},
            { text: "ワットさんは先生です、サントスさんに先生です。", correct: false},
            { text: "ワットさんは先生です、サントスさんも先生です。", correct: true},
            { text: "ワットさんは先生です、サントスさんで先生です。", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();