const readline = require('readline-sync');
const gameState = require('./gameState');

// Importando os jogos
const quiz = require('./Games/quiz');
const completeSentence = require('./Games/completeSentence');
const sentenceBuilder = require('./Games/sentenceBuilder');
const memoryChallenge = require('./Games/memoryChallenge');
const battleRPG = require('./Games/battleRPG');
const detectiveStory = require('./Games/detectiveStory');

function showMenu() {

    // Loop infinito: o menu sempre volta
    while (true) {

        // Verifica se o jogador perdeu todas as vidas
        if (gameState.getLives() <= 0) {
            console.log("\nGAME OVER PERDEU TROUXA !!!");
            console.log("Final Score:", gameState.getScore());
            console.log("Final Errors:", gameState.getError());
            gameState.resetGame();
        }
      

        console.log("\n==== DEVLINGO ARENA DO ÉVERTON ====");
        console.log("Score:", gameState.getScore(), "| Erros:", gameState.getError(), "| Lives:", gameState.getLives());
        console.log("1 - Quiz");
        console.log("2 - Complete the Sentence");
        console.log("3 - Sentence Builder");
        console.log("4 - Memory Challenge");
        console.log("5 - Battle RPG");
        console.log("6 - Detective Story");
        console.log("7 - Contractions/Anticipations");
        console.log("0 - Exit");

        let option = readline.question("Choose an option: ");

        switch(option) {
            case "1": quiz(); break;
            case "2": completeSentence(); break;
            case "3": sentenceBuilder(); break;
            case "4": memoryChallenge(); break;
            case "5": battleRPG(); break;
            case "6": detectiveStory(); break;
            case "7": ContractionsAnticipations(); break;
            case "0": process.exit();
            default:
                console.log("Invalid option.");
        }
    }
}

module.exports = showMenu;