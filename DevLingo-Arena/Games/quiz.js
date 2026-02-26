const readline = require('readline-sync');
const gameState = require('../gameState');

function quiz() {

    const questions = [
        {
            question: "She _ _ my friend.",
            options: ["1) am", "2) is", "3) are"],
            answer: "2"
        },
        {
            question: "They _ _ _ students.",
            options: ["1) are", "2) is", "3) am"],
            answer: "1"
        },
        {
            question: "Who is Naruto's father?",
            options: ["1) Minatsu", "2) Iruka", "3) Minato"],
            answer: "3"
        },
        {
            question: "Today I am _ _ _ _ _ _ in English class.",
            options: ["1) feeling ", "2) sleepy", "3) bored "],
            answer: "2"
        },
        {
            question: "we are _ _ _ _ _ _ _ rock league.",
            options: ["1) playing ", "2) participating ", "3) watching "],
            answer: "1"
        }
    ];

    questions.forEach(q => {

        console.log("\n" + q.question);
        q.options.forEach(opt => console.log(opt));

        let answer = readline.question("Answer: ");

        if(answer === q.answer) {
            console.log("Correct!");
            gameState.addScore(10);
           
        } else {
            console.log("Wrong!");
            gameState.loseLife();
            gameState.addError();
        }

    });

    readline.question("\nPress ENTER to continue...");
}

module.exports = quiz;