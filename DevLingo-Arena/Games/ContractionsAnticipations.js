const readline = require('readline-sync');
const gameState = require('../gameState');

function completeSentence() {

    const sentences = [
        { text: "Convert to contracted form: _ _ _ Batman ", answer: "i'm" },

        { text: "Convert to contracted form: _ _ _ the fastest man ", answer: "I'm" }
    ];
   
    sentences.forEach(s => {

        console.log("\nComplete:");
        console.log(s.text);

        let answer = readline.question("Word: ").toLowerCase();

        if(answer === s.answer) {
            console.log("Correct!");
            gameState.addScore(10);
           
        } else {
            console.log("Wrong! Correct answer:", s.answer);
            gameState.loseLife();
            gameState.addError();
        }

    });

    readline.question("\nPress ENTER to continue...");
}

module.exports = completeSentence;