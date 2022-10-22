let questions = [
    { 
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    { 
        "question": "Wofür wird HTML benutzt?",
        "answer_1": "Es ist eine Geheimsprache",
        "answer_2": "HTML soll zukünftig englisch ersetzen",
        "answer_3": "Es ist eine neue Rechnenmethode",
        "answer_4": "für die Interpretation und Anzeige von Webseiten",
        "right_answer": 4
    },

    { 
        "question": "Was bedeutet &lt;h1&gt;?",
        "answer_1": "Der Text wird <b>FETT</b> geschrieben",
        "answer_2": "Es handelt sich um eine headline",
        "answer_3": "Es wird auf eine andere Seite verlinkt",
        "answer_4": "Hier ist das Headquarter",
        "right_answer": 2
    },

    { 
        "question": "Wie fängt der Haupteil einer HTML-Seite an?",
        "answer_1": "style",
        "answer_2": "link",
        "answer_3": "body",
        "answer_4": "script",
        "right_answer": 3
    },

    { 
        "question": "Wofür steht HTML?",
        "answer_1": "Hypertext Markup Language",
        "answer_2": "hop top move lock",
        "answer_3": "Highest Top Mountain Level",
        "answer_4": "Hip to my legs",
        "right_answer": 1
    },

    { 
        "question": "Was ist ein Array?",
        "answer_1": "Das Nest vom Osterhasen",
        "answer_2": "Eine neue Autofarbe",
        "answer_3": "Ein indisches Hauptgericht",
        "answer_4": "Ein Datentyp zum Werte speichern",
        "right_answer": 4
    }

];

let currentQuestion = 0;
let valueRightQuestions = 0;
let audio_wrong = new Audio('audio/wrong.mp3');
let audio_right = new Audio('audio/right.mp3');


function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    }       else {
                updateProgressBar();
                showQuestionsScreen();
            }
}


function gameIsOver() {
    return currentQuestion >= questions.length;
}


function showEndScreen() {
    document.getElementById('headerImage').src = 'img/trophy.jpg';
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none;';
    document.getElementById('endAllQuestions').innerHTML = questions.length;
    document.getElementById('numberRightQuestions').innerHTML = valueRightQuestions;
}


function updateProgressBar() {
    let percent = Math.round((currentQuestion + 1) * 100 / questions.length);
    document.getElementById('progressBar').innerHTML = `${percent} %`;
    document.getElementById('progressBar').style = `width: ${percent}%`;
}


function showQuestionsScreen() {
    let question = questions[currentQuestion];
    document.getElementById('allQuestions').innerHTML = questions.length;
    document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        valueRightQuestions++;
        audio_right.play();
    }   else {
            document.getElementById(selection).parentNode.classList.add('bg-danger');
            document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
            audio_wrong.play();
        }
    document.getElementById('nextButton').disabled = false;
}


function rightAnswerSelected(answer) {
    return answer == questions[currentQuestion]['right_answer'];
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextButton').disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function restart() {
    currentQuestion = 0;
    valueRightQuestions = 0;
    document.getElementById('headerImage').src = 'img/pencil.jpg';
    document.getElementById('endScreen').style = 'display: none;'           // endScreen ausblenden 
    document.getElementById('questionBody').style = '';                     // questionBody wieder anzeigen
    showQuestion();

}