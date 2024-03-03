let curQuestion = 0;
let correctAnswers = 0;
let AUDIO_SUCCESS = new Audio("./sounds/sucess.mp3");
let AUDIO_FAIL = new Audio("./sounds/wrong.mp3")

function init() {
    document.getElementById('questionCnt').innerHTML = questions.length;
    let percent = Math.round(( (curQuestion+1) / questions.length ) * 100);
    document.getElementById('progressQuestionbar').style=`width: ${percent}%`;
    correctAnswers = 0;
    showQuestion();
}

function showQuestion(){
    let question = questions[curQuestion];
    document.getElementById('questionCur').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question.answer_1;
    document.getElementById('answer_2').innerHTML = question.answer_2;
    document.getElementById('answer_3').innerHTML = question.answer_3;
    document.getElementById('answer_4').innerHTML = question.answer_4;
    
}

function answer(answerID) {
    let question = questions[curQuestion];
    let selectedQuestionNumber = answerID.slice(-1);
    let idofRightAnswer = "answer_" + question.right_answer;
    if(question.right_answer == selectedQuestionNumber){
        document.getElementById(answerID).parentNode.classList.add("bg-success");
        correctAnswers++;
        AUDIO_SUCCESS.play();
    }else{
        document.getElementById(answerID).parentNode.classList.add("bg-danger");
        document.getElementById(idofRightAnswer).parentNode.classList.add("bg-success");
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    curQuestion++;
    if(curQuestion < questions.length) {
        updateToNextQuestion()
    }else {
        showEndScreen();
    }

}

function updateToNextQuestion() {
    resetAnswerButtons();
    showQuestion();
    document.getElementById('curQuestionCnt').innerHTML = curQuestion+1;
    document.getElementById('next-button').disabled = true;
    let percent = Math.round(( (curQuestion+1) / questions.length ) * 100);
    document.getElementById('progressQuestionbar').style=`width: ${percent}%`;

}

function resetAnswerButtons() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove("bg-success");
        document.getElementById(`answer_${i}`).parentNode.classList.remove("bg-danger");
    }
}

function showEndScreen(){
    document.getElementById('qestionBody').classList.add('d-none');
    document.getElementById('endScreen').classList.remove('d-none');
    document.getElementById('correctAnswers').innerHTML = correctAnswers;
    document.getElementById('possibleAnswer').innerHTML = questions.length;
    document.getElementById('headImg').src = 'img/Win.jpg';
}

function restartGame() {
    curQuestion = 0;
    init();
    resetAnswerButtons();
    document.getElementById('curQuestionCnt').innerHTML = curQuestion+1;
    document.getElementById('headImg').src = 'img/optics-4691414_640.jpg';
    document.getElementById('qestionBody').classList.remove('d-none');
    document.getElementById('endScreen').classList.add('d-none');

}