const readline = require('readline-sync');
const gameState = require('../gameState');

function sentenceBuilder() {

    const challenge = {
        words: ["developer", "is", "He", "a"],
        correct: "He is a developer",

        words: ["the", "ben 10", "is", "cartoon",  "best",],
        correct: "Ben 10 is the best cartoon",

        words: ["like", "I", "spider",  "don't",],
        correct: "I don’t like spider",

        words: ["on", "she", "didn't",  "cheat", "me"],
        correct: "she didn't cheat on me",

        words: ["spiders", "don't", "I",  "like"],
        correct: "I don't like spiders",

        words: ["like", "snakes", "I"],
        correct: "I like snakes",

        words: ["soccer", "paly", "do", "you"],
        correct: "do you play soccer?",

        words: ["do", "paly", "basketball", "you"],
        correct: "do you play basketball",
        
        words: ["Did", "you", "do", "the", "programming?", "did"],
        correct: "Did you do the programming?",

    };

    console.log("\nReorder the words to form a sentence:");
    console.log(challenge.words.join(" | "));

    let answer = readline.question("Sentence: ");

    if(answer === challenge.correct) {
        console.log("Correct!");
        gameState.addScore(15);
        
    } else {
        console.log("Wrong! Correct sentence:", challenge.correct);
        gameState.loseLife();
        gameState.addError();
    }

    readline.question("\nPress ENTER to continue...");
}

module.exports = sentenceBuilder;