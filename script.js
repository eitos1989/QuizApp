let curQuestion = 0;

function init() {
    document.getElementById('questionCnt').innerHTML = questions.length;
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
    }else{
        document.getElementById(answerID).parentNode.classList.add("bg-danger");
        document.getElementById(idofRightAnswer).parentNode.classList.add("bg-success");
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    curQuestion++;
    if(curQuestion < questions.length) {
        resetAnswerButtons();
        showQuestion();
        document.getElementById('curQuestionCnt').innerHTML = curQuestion+1;
        document.getElementById('next-button').disabled = true;
    }else {
        document.getElementById('next-button').innerHTML = "Quiz auswerten";
    }

}

function resetAnswerButtons() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove("bg-success");
        document.getElementById(`answer_${i}`).parentNode.classList.remove("bg-danger");
    }
}
