const questions = [
    // Goalies
    {q: "What # does Adin Hill wear?", correct: "33", wrong: "40", cat: ["numbers"]},
    {q: "What # does Akira Schmid wear?", correct: "40", wrong: "33", cat: ["numbers"]},
    {q: "Which hand do both goalies catch with?", correct: "Left", wrong: "Right", cat: ["handedness"]},
    {q: "Who wears #33?", correct: "Adin Hill", wrong: "Akira Schmid", cat: ["numbers"]},
    {q: "Who wears #40?", correct: "Akira Schmid", wrong: "Adin Hill", cat: ["numbers"]},
    {q: "What position does Adin Hill play?", correct: "G", wrong: "D", cat: ["position"]},
    {q: "What position does Akira Schmid play?", correct: "G", wrong: "D", cat: ["position"]},
    {q: "Which hand does Adin Hill catch with?", correct: "Left", wrong: "Right", cat: ["handedness"]},
    {q: "Which hand does Akira Schmid catch with?", correct: "Left", wrong: "Right", cat: ["handedness"]},

    // Defense
    {q: "What # does Zach Whitecloud wear?", correct: "2", wrong: "3", cat: ["numbers"]},
    {q: "What # does Brayden McNabb wear?", correct: "3", wrong: "2", cat: ["numbers"]},
    {q: "What # does Jeremy Lauzon wear?", correct: "5", wrong: "6", cat: ["numbers"]},
    {q: "What # does Kaedan Korczak wear?", correct: "6", wrong: "5", cat: ["numbers"]},
    {q: "What # does Noah Hanifin wear?", correct: "15", wrong: "17", cat: ["numbers"]},
    {q: "What # does Ben Hutton wear?", correct: "17", wrong: "15", cat: ["numbers"]},
    {q: "What # does Shea Theodore wear?", correct: "27", wrong: "23", cat: ["numbers"]},
    {q: "Who wears #2?", correct: "Zach Whitecloud", wrong: "Brayden McNabb", cat: ["numbers"]},
    {q: "Who wears #3?", correct: "Brayden McNabb", wrong: "Zach Whitecloud", cat: ["numbers"]},
    {q: "Who wears #5?", correct: "Jeremy Lauzon", wrong: "Kaedan Korczak", cat: ["numbers"]},
    {q: "Who wears #6?", correct: "Kaedan Korczak", wrong: "Jeremy Lauzon", cat: ["numbers"]},
    {q: "Who wears #15?", correct: "Noah Hanifin", wrong: "Ben Hutton", cat: ["numbers"]},
    {q: "Who wears #17?", correct: "Ben Hutton", wrong: "Noah Hanifin", cat: ["numbers"]},
    {q: "Who wears #27?", correct: "Shea Theodore", wrong: "Noah Hanifin", cat: ["numbers"]},
    {q: "Which two defensemen shoot right?", correct: "Whitecloud & Korczak", wrong: "Theodore & Hanifin", cat: ["handedness"]},
    {q: "How many defensemen shoot left vs right?", correct: "5 Left, 2 Right", wrong: "4 Left, 3 Right", cat: ["handedness"]},
    {q: "What position does Zach Whitecloud play?", correct: "D", wrong: "C", cat: ["position"]},
    {q: "What position does Brayden McNabb play?", correct: "D", wrong: "LW", cat: ["position"]},
    {q: "What position does Jeremy Lauzon play?", correct: "D", wrong: "RW", cat: ["position"]},
    {q: "What position does Kaedan Korczak play?", correct: "D", wrong: "C", cat: ["position"]},
    {q: "What position does Noah Hanifin play?", correct: "D", wrong: "LW", cat: ["position"]},
    {q: "What position does Ben Hutton play?", correct: "D", wrong: "C", cat: ["position"]},
    {q: "What position does Shea Theodore play?", correct: "D", wrong: "RW", cat: ["position"]},
    {q: "Which side does Zach Whitecloud shoot?", correct: "Right", wrong: "Left", cat: ["handedness"]},
    {q: "Which side does Brayden McNabb shoot?", correct: "Left", wrong: "Right", cat: ["handedness"]},
    {q: "Which side does Jeremy Lauzon shoot?", correct: "Left", wrong: "Right", cat: ["handedness"]},
    {q: "Which side does Kaedan Korczak shoot?", correct: "Right", wrong: "Left", cat: ["handedness"]},
    {q: "Which side does Noah Hanifin shoot?", correct: "Left", wrong: "Right", cat: ["handedness"]},
    {q: "Which side does Ben Hutton shoot?", correct: "Left", wrong: "Right", cat: ["handedness"]},
    {q: "Which side does Shea Theodore shoot?", correct: "Left", wrong: "Right", cat: ["handedness"]},

    // Left Wing
    {q: "What # does Brandon Saad wear?", correct: "20", wrong: "23", cat: ["numbers"]},
    {q: "What # does Cole Reinhardt wear?", correct: "23", wrong: "20", cat: ["numbers"]},
    {q: "What # does Ivan Barbashev wear?", correct: "49", wrong: "48", cat: ["numbers"]},
    {q: "Who wears #20?", correct: "Brandon Saad", wrong: "Cole Reinhardt", cat: ["numbers"]},
    {q: "Who wears #23?", correct: "Cole Reinhardt", wrong: "Brandon Saad", cat: ["numbers"]},
    {q: "Who wears #49?", correct: "Ivan Barbashev", wrong: "Tomas Hertl", cat: ["numbers"]},
    {q: "How many left wingers shoot left vs right?", correct: "3 Left, 0 Right", wrong: "2 Left, 1 Right", cat: ["handedness"]},
    {q: "What position does Brandon Saad play?", correct: "LW", wrong: "C", cat: ["position"]},
    {q: "What position does Cole Reinhardt play?", correct: "LW", wrong: "RW", cat: ["position"]},
    {q: "What position does Ivan Barbashev play?", correct: "LW", wrong: "C", cat: ["position"]},
    {q: "Which side does Brandon Saad shoot?", correct: "Left", wrong: "Right", cat: ["handedness"]},
    {q: "Which side does Cole Reinhardt shoot?", correct: "Left", wrong: "Right", cat: ["handedness"]},
    {q: "Which side does Ivan Barbashev shoot?", correct: "Left", wrong: "Right", cat: ["handedness"]},

    // Center
    {q: "What # does Jack Eichel wear?", correct: "9", wrong: "10", cat: ["numbers"]},
    {q: "What # does Colton Sissons wear?", correct: "10", wrong: "9", cat: ["numbers"]},
    {q: "What # does Brett Howden wear?", correct: "21", wrong: "23", cat: ["numbers"]},
    {q: "What # does Tomas Hertl wear?", correct: "48", wrong: "49", cat: ["numbers"]},
    {q: "What # does William Karlsson wear?", correct: "71", wrong: "61", cat: ["numbers"]},
    {q: "Who wears #9?", correct: "Jack Eichel", wrong: "Colton Sissons", cat: ["numbers"]},
    {q: "Who wears #10?", correct: "Colton Sissons", wrong: "Jack Eichel", cat: ["numbers"]},
    {q: "Who wears #21?", correct: "Brett Howden", wrong: "Brandon Saad", cat: ["numbers"]},
    {q: "Who wears #48?", correct: "Tomas Hertl", wrong: "Ivan Barbashev", cat: ["numbers"]},
    {q: "Who wears #71?", correct: "William Karlsson", wrong: "Mark Stone", cat: ["numbers"]},
    {q: "Which two centers shoot right?", correct: "Eichel & Sissons", wrong: "Hertl & Karlsson", cat: ["handedness"]},
    {q: "How many centers shoot left vs right?", correct: "3 Left, 2 Right", wrong: "2 Left, 3 Right", cat: ["handedness"]},
    {q: "What position does Jack Eichel play?", correct: "C", wrong: "RW", cat: ["position"]},
    {q: "What position does Colton Sissons play?", correct: "C", wrong: "LW", cat: ["position"]},
    {q: "What position does Brett Howden play?", correct: "C", wrong: "RW", cat: ["position"]},
    {q: "What position does Tomas Hertl play?", correct: "C", wrong: "LW", cat: ["position"]},
    {q: "What position does William Karlsson play?", correct: "C", wrong: "RW", cat: ["position"]},
    {q: "Which side does Jack Eichel shoot?", correct: "Right", wrong: "Left", cat: ["handedness"]},
    {q: "Which side does Colton Sissons shoot?", correct: "Right", wrong: "Left", cat: ["handedness"]},
    {q: "Which side does Brett Howden shoot?", correct: "Left", wrong: "Right", cat: ["handedness"]},
    {q: "Which side does Tomas Hertl shoot?", correct: "Left", wrong: "Right", cat: ["handedness"]},
    {q: "Which side does William Karlsson shoot?", correct: "Left", wrong: "Right", cat: ["handedness"]},

    // Right Wing
    {q: "What # does Pavel Dorofeyev wear?", correct: "16", wrong: "19", cat: ["numbers"]},
    {q: "What # does Reilly Smith wear?", correct: "19", wrong: "16", cat: ["numbers"]},
    {q: "What # does Alexander Holtz wear?", correct: "26", wrong: "27", cat: ["numbers"]},
    {q: "What # does Keegan Kolesar wear?", correct: "55", wrong: "61", cat: ["numbers"]},
    {q: "What # does Mark Stone wear?", correct: "61", wrong: "71", cat: ["numbers"]},
    {q: "What # does Mitch Marner wear?", correct: "93", wrong: "61", cat: ["numbers"]},
    {q: "Who wears #16?", correct: "Pavel Dorofeyev", wrong: "Reilly Smith", cat: ["numbers"]},
    {q: "Who wears #19?", correct: "Reilly Smith", wrong: "Pavel Dorofeyev", cat: ["numbers"]},
    {q: "Who wears #26?", correct: "Alexander Holtz", wrong: "Shea Theodore", cat: ["numbers"]},
    {q: "Who wears #55?", correct: "Keegan Kolesar", wrong: "Mark Stone", cat: ["numbers"]},
    {q: "Who wears #61?", correct: "Mark Stone", wrong: "William Karlsson", cat: ["numbers"]},
    {q: "Who wears #93?", correct: "Mitch Marner", wrong: "Mark Stone", cat: ["numbers"]},
    {q: "Which right wingers shoot right?", correct: "Holtz, Kolesar, Stone, Marner", wrong: "All shoot right", cat: ["handedness"]},
    {q: "How many right wingers shoot left vs right?", correct: "2 Left, 4 Right", wrong: "3 Left, 3 Right", cat: ["handedness"]},
    {q: "What position does Pavel Dorofeyev play?", correct: "RW", wrong: "LW", cat: ["position"]},
    {q: "What position does Reilly Smith play?", correct: "RW", wrong: "C", cat: ["position"]},
    {q: "What position does Alexander Holtz play?", correct: "RW", wrong: "D", cat: ["position"]},
    {q: "What position does Keegan Kolesar play?", correct: "RW", wrong: "LW", cat: ["position"]},
    {q: "What position does Mark Stone play?", correct: "RW", wrong: "C", cat: ["position"]},
    {q: "What position does Mitch Marner play?", correct: "RW", wrong: "C", cat: ["position"]},
    {q: "Which side does Pavel Dorofeyev shoot?", correct: "Left", wrong: "Right", cat: ["handedness"]},
    {q: "Which side does Reilly Smith shoot?", correct: "Left", wrong: "Right", cat: ["handedness"]},
    {q: "Which side does Alexander Holtz shoot?", correct: "Right", wrong: "Left", cat: ["handedness"]},
    {q: "Which side does Keegan Kolesar shoot?", correct: "Right", wrong: "Left", cat: ["handedness"]},
    {q: "Which side does Mark Stone shoot?", correct: "Right", wrong: "Left", cat: ["handedness"]},
    {q: "Which side does Mitch Marner shoot?", correct: "Right", wrong: "Left", cat: ["handedness"]}
];

let allQuestions = questions;
let activeQuestions = [];
let shuffledQuestions = [];
let questionStats = {};
let userAnswers = {};
let selectedCategories = ['numbers', 'handedness', 'position'];

// Load stats from localStorage
function loadStats() {
    const saved = localStorage.getItem('rosterQuizStats');
    if (saved) {
        try {
            questionStats = JSON.parse(saved);
        } catch (e) {
            questionStats = {};
        }
    }
}

// Save stats to localStorage
function saveStats() {
    localStorage.setItem('rosterQuizStats', JSON.stringify(questionStats));
}

function toggleCategory(cat) {
    const checkbox = document.getElementById('cat-' + cat);
    checkbox.checked = !checkbox.checked;
    updateStartButton();
    event.stopPropagation();
}

function updateStartButton() {
    const numbersChecked = document.getElementById('cat-numbers').checked;
    const handednessChecked = document.getElementById('cat-handedness').checked;
    const positionChecked = document.getElementById('cat-position').checked;

    const startBtn = document.getElementById('startBtn');
    const anySelected = numbersChecked || handednessChecked || positionChecked;

    startBtn.disabled = !anySelected;

    if (anySelected) {
        selectedCategories = [];
        if (numbersChecked) selectedCategories.push('numbers');
        if (handednessChecked) selectedCategories.push('handedness');
        if (positionChecked) selectedCategories.push('position');

        const count = allQuestions.filter(q =>
            q.cat.some(c => selectedCategories.includes(c))
        ).length;

        startBtn.textContent = `Start Quiz (${count} questions)`;
    } else {
        startBtn.textContent = 'Start Quiz';
    }
}

function startQuiz() {
    // Filter questions by selected categories
    activeQuestions = allQuestions.filter(q =>
        q.cat.some(c => selectedCategories.includes(c))
    );

    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';

    generateQuiz();
}

function backToStart() {
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function smartShuffle(array) {
    const wrong = [];
    const unanswered = [];
    const correct = [];

    array.forEach(q => {
        const stat = questionStats[q.q];
        if (!stat) {
            unanswered.push(q);
        } else if (stat.lastResult === 'incorrect') {
            wrong.push(q);
        } else if (stat.lastResult === 'correct') {
            correct.push(q);
        }
    });

    const shuffledWrong = shuffle(wrong);
    const shuffledUnanswered = shuffle(unanswered);
    const shuffledCorrect = shuffle(correct);

    return [...shuffledWrong, ...shuffledUnanswered, ...shuffledCorrect];
}

function selectOption(index, isCorrect) {
    const buttons = document.querySelectorAll(`[data-question="${index}"]`);
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
    userAnswers[index] = isCorrect;
}

function generateQuiz() {
    shuffledQuestions = smartShuffle(activeQuestions);
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = '';
    document.getElementById('score').style.display = 'none';
    userAnswers = {};

    const wrong = activeQuestions.filter(q => questionStats[q.q]?.lastResult === 'incorrect').length;
    const correct = activeQuestions.filter(q => questionStats[q.q]?.lastResult === 'correct').length;
    const unanswered = activeQuestions.length - wrong - correct;

    let progressMsg = 'Select answers then click Submit';
    if (wrong > 0 || correct > 0) {
        progressMsg = `📊 Questions prioritized: ${wrong} wrong (first), ${unanswered} unanswered, ${correct} correct`;
    }
    document.getElementById('progress').textContent = progressMsg;

    shuffledQuestions.forEach((item, index) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'question';

        let statusBadge = '';
        const stat = questionStats[item.q];
        if (stat?.lastResult === 'incorrect') {
            statusBadge = '<span class="status-badge status-wrong">Previously Wrong</span>';
        } else if (stat?.lastResult === 'correct') {
            statusBadge = '<span class="status-badge status-correct">Previously Correct</span>';
        }

        // Randomize option order
        const options = Math.random() < 0.5
            ? [{text: item.correct, isCorrect: true}, {text: item.wrong, isCorrect: false}]
            : [{text: item.wrong, isCorrect: false}, {text: item.correct, isCorrect: true}];

        qDiv.innerHTML = `
            <div class="question-text">${index + 1}. ${item.q}${statusBadge}</div>
            <div class="options">
                <button type="button" class="option-btn" data-question="${index}" onclick="selectOption(${index}, ${options[0].isCorrect})">${options[0].text}</button>
                <button type="button" class="option-btn" data-question="${index}" onclick="selectOption(${index}, ${options[1].isCorrect})">${options[1].text}</button>
            </div>
            <div class="feedback" id="f${index}"></div>
        `;
        questionsDiv.appendChild(qDiv);
    });
}

function shuffleQuiz() {
    generateQuiz();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetStats() {
    if (confirm('Reset all question statistics? This will clear your progress.')) {
        questionStats = {};
        localStorage.removeItem('rosterQuizStats');
        generateQuiz();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function exportStats() {
    const statsText = JSON.stringify(questionStats, null, 2);
    const blob = new Blob([statsText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'roster-quiz-stats.json';
    a.click();
    URL.revokeObjectURL(url);
}

function viewStats() {
    const totalQuestions = allQuestions.length;
    const answeredQuestions = Object.keys(questionStats).length;
    const unanswered = totalQuestions - answeredQuestions;

    let correct = 0;
    let incorrect = 0;
    let totalCorrect = 0;
    let totalIncorrect = 0;

    Object.values(questionStats).forEach(stat => {
        if (stat.lastResult === 'correct') correct++;
        if (stat.lastResult === 'incorrect') incorrect++;
        totalCorrect += stat.correct || 0;
        totalIncorrect += stat.incorrect || 0;
    });

    const totalAttempts = totalCorrect + totalIncorrect;
    const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

    const statsMessage = `
📊 ROSTER QUIZ STATISTICS

Overall Performance:
• Total Questions: ${totalQuestions}
• Questions Attempted: ${answeredQuestions}
• Not Yet Attempted: ${unanswered}

Current Status:
• Last Answered Correctly: ${correct}
• Last Answered Incorrectly: ${incorrect}
• Unanswered: ${unanswered}

All-Time Accuracy:
• Total Attempts: ${totalAttempts}
• Correct Answers: ${totalCorrect}
• Incorrect Answers: ${totalIncorrect}
• Accuracy Rate: ${accuracy}%

Questions you got wrong will appear first when you shuffle the quiz!
    `.trim();

    alert(statsMessage);
}

// Initialize: load stats from localStorage
loadStats();
updateStartButton();

document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let correct = 0;
    let total = shuffledQuestions.length;

    shuffledQuestions.forEach((item, index) => {
        const buttons = document.querySelectorAll(`[data-question="${index}"]`);
        const feedback = document.getElementById(`f${index}`);
        const userAnswer = userAnswers[index];

        if (!questionStats[item.q]) {
            questionStats[item.q] = { correct: 0, incorrect: 0 };
        }

        if (userAnswer === true) {
            correct++;
            questionStats[item.q].correct++;
            questionStats[item.q].lastResult = 'correct';
            feedback.className = 'feedback correct';
            feedback.textContent = '✓ Correct!';
            feedback.style.display = 'block';

            buttons.forEach(btn => {
                if (btn.textContent === item.correct) {
                    btn.classList.add('correct');
                }
            });
        } else if (userAnswer === false) {
            questionStats[item.q].incorrect++;
            questionStats[item.q].lastResult = 'incorrect';
            feedback.className = 'feedback incorrect';
            feedback.textContent = `✗ Correct answer: ${item.correct}`;
            feedback.style.display = 'block';

            buttons.forEach(btn => {
                if (btn.textContent === item.correct) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('incorrect');
                }
            });
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `⚠ Not answered. Correct: ${item.correct}`;
            feedback.style.display = 'block';

            buttons.forEach(btn => {
                if (btn.textContent === item.correct) {
                    btn.classList.add('correct');
                }
            });
        }
    });

    const scoreDiv = document.getElementById('score');
    const percentage = Math.round((correct / total) * 100);
    scoreDiv.textContent = `Score: ${correct}/${total} (${percentage}%)`;
    scoreDiv.style.display = 'block';

    // Save stats to localStorage
    saveStats();

    window.scrollTo({ top: 0, behavior: 'smooth' });
});
