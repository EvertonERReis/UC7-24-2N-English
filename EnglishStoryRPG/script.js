const gameData = [

{
    id: 1,

    title: "Chapter 1: The Awakening",

    chapters: [

        {
            textBefore: "Systems initializing. The Captain ",

            correct: "is waking up",

            options: [
                "is waking up",
                "wakes up",
                "banana spaceship",
                "wake yesterday"
            ],

            hint: "Use Present Continuous",

            explanation:
                "Present Continuous is used for actions happening now.",

            grammar: "Present Continuous",

            textAfter: " from cryo-sleep."
        },

        {
            textBefore: "The siren ",

            correct: "is blaring",

            options: [
                "is blaring",
                "blares",
                "explodes dancing",
                "blaring yesterday"
            ],

            hint: "Action happening now",

            explanation:
                "Present Continuous describes actions in progress.",

            grammar: "Present Continuous",

            textAfter: " loudly! There is an emergency."
        }
    ]
},

{
    id: 2,

    title: "Chapter 2: The Analysis",

    chapters: [

        {
            textBefore: "Yesterday, the AI ",

            correct: "analyzed",

            options: [
                "analyzed",
                "analyzes",
                "eats the computer",
                "analyze tomorrow"
            ],

            hint: "Past action",

            explanation:
                "Simple Past is used for completed actions in the past.",

            grammar: "Simple Past",

            textAfter: " all the star charts."
        },

        {
            textBefore: "It ",

            correct: "found",

            options: [
                "found",
                "finds",
                "find the banana",
                "finding yesterday"
            ],

            hint: "Simple Past",

            explanation:
                "Use Simple Past for completed past actions.",

            grammar: "Simple Past",

            textAfter: " a massive black hole."
        }
    ]
}

];

let currentChapter = 0;

let currentSegment = 0;

let xp = 0;

let playerChoices = [];

const XP_CORRECT = 10;

const XP_INCORRECT = 3;

const startScreen =
    document.getElementById("start-screen");

const gameScreen =
    document.getElementById("game-screen");

const endScreen =
    document.getElementById("end-screen");

const chapterTitle =
    document.getElementById("chapter-title");

const storyText =
    document.getElementById("story-text");

const optionsContainer =
    document.getElementById("options-container");

const feedbackArea =
    document.getElementById("feedback-area");

const feedbackMessage =
    document.getElementById("feedback-message");

const grammarExplanation =
    document.getElementById("grammar-explanation");

const xpDisplay =
    document.getElementById("xp-display");

const progressFill =
    document.getElementById("progress-fill");

const finalXp =
    document.getElementById("final-xp");

const finalSummaryText =
    document.getElementById("final-summary-text");

const nextButton =
    document.getElementById("next-button");

function startGame() {

    currentChapter = 0;

    currentSegment = 0;

    xp = 0;

    playerChoices = [];

    feedbackArea.style.display = "none";

    nextButton.style.display = "none";

    updateXP();

    startScreen.classList.add("hidden");

    endScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");

    loadSegment();
}

function loadSegment() {

    feedbackArea.style.display = "none";

    feedbackArea.classList.remove("correct");

    feedbackArea.classList.remove("incorrect");

    nextButton.style.display = "none";

    if (
        currentSegment >=
        gameData[currentChapter].chapters.length
    ) {

        currentChapter++;

        currentSegment = 0;
    }

    if (currentChapter >= gameData.length) {

        endGame();

        return;
    }

    const segment =
        gameData[currentChapter].chapters[currentSegment];

    chapterTitle.textContent =
        gameData[currentChapter].title;

    storyText.innerHTML = `
        ${segment.textBefore}
        <span class="blank">[_____]</span>
        ${segment.textAfter}

        <br><br>

        <span class="hint-text">
            Hint: ${segment.hint}
        </span>
    `;

    optionsContainer.innerHTML = "";

    const shuffled =
        [...segment.options].sort(() =>
            Math.random() - 0.5
        );

    shuffled.forEach(option => {

        const button =
            document.createElement("button");

        button.className = "btn-option";

        button.textContent = option;

        button.onclick = () =>
            checkAnswer(option, segment);

        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selected, segment) {

    const buttons =
        document.querySelectorAll(".btn-option");

    buttons.forEach(btn => {
        btn.disabled = true;
    });

    feedbackArea.style.display = "block";

    feedbackArea.classList.remove("correct");

    feedbackArea.classList.remove("incorrect");

    let resultType = "";

    if (selected === segment.correct) {

        xp += XP_CORRECT;

        resultType = "Correct";

        feedbackArea.classList.add("correct");

        feedbackMessage.textContent =
            "✓ CORRECT!";
    }

    else if (

        selected.includes("banana") ||

        selected.includes("explodes") ||

        selected.includes("computer")

    ) {

        xp += 1;

        resultType = "Funny Answer";

        feedbackArea.classList.add("incorrect");

        feedbackMessage.textContent =
            "😂 Funny but VERY wrong!";
    }

    else {

        xp += XP_INCORRECT;

        resultType = "Almost Correct";

        feedbackArea.classList.add("incorrect");

        feedbackMessage.textContent =
            "⚠ Almost correct!";
    }

    playerChoices.push(`
        • "${selected}"
        → ${resultType}
    `);

    grammarExplanation.innerHTML = `
        <strong>Grammar:</strong>
        ${segment.grammar}

        <br><br>

        ${segment.explanation}

        <br><br>

        <strong>Correct Answer:</strong>
        ${segment.correct}
    `;

    updateXP();

    nextButton.style.display = "block";
}

function nextQuestion() {

    feedbackArea.style.display = "none";

    nextButton.style.display = "none";

    currentSegment++;

    loadSegment();
}

function updateXP() {

    xpDisplay.textContent = xp;

    const totalXP =
        gameData.length * 2 * XP_CORRECT;

    const percentage =
        (xp / totalXP) * 100;

    progressFill.style.width =
        `${percentage}%`;
}

function endGame() {

    gameScreen.classList.add("hidden");

    endScreen.classList.remove("hidden");

    finalXp.textContent =
        `${xp} XP`;

    finalSummaryText.innerHTML = `
        <strong>Mission Report:</strong>

        <br><br>

        ${playerChoices.join("<br><br>")}
    `;

    const finalImage =
        document.getElementById("final-image");

    if (xp >= 30) {

        finalImage.src =
            "https://i.imgur.com/z7c9W4B.png";
    }

    else if (xp >= 15) {

        finalImage.src =
            "https://i.imgur.com/e4D1i6h.png";
    }

    else {

        finalImage.src =
            "https://i.imgur.com/5YkZ6Wv.png";
    }
}

function restartGame() {

    currentChapter = 0;

    currentSegment = 0;

    xp = 0;

    playerChoices = [];

    feedbackArea.style.display = "none";

    nextButton.style.display = "none";

    endScreen.classList.add("hidden");

    gameScreen.classList.add("hidden");

    startScreen.classList.remove("hidden");

    updateXP();
}