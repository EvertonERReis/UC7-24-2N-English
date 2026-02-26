const readline = require('readline-sync');
const gameState = require('../gameState');

function completeSentence() {

    const sentences = [
        { text: "I _ _ a developer.", answer: "am" },

        { text: "She _ _ coding now.", answer: "is" },

        { text: "Which anime _ _ _ _ _ _ _ _ _ screams the most? It's Goku.", answer: "character "},

        { text: "_ _ _ _ _ _ _ _ _ I was sleepy in English class.", answer: "Yesterday" },

        { text: " We were _ _ _ _ _ _ _ _  Rock League.", answer: "playing" },

        { text: "you are gay?", answer: "yes" },

        
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