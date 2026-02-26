const readline = require('readline-sync');
const gameState = require('../gameState');

function memoryChallenge() {

    const words = ["code", "debug", "function", "variable"]; 

                  ["Naruto", "Goku", "Tangiro", "Asta", "Ichigo", "Sung", "Itadori"];

                  ["BMW", "Ferrari", "Porche", "Mercedes", "Audi", "Toyota", "Pagani", "Nissan", "Chevrolet" ];

                  ["Arroz", "Feijão", "Pizza", "Hamburguer", "Lasanha"];

                  /// 
                  ["I didn’t push the code."];

                  ["They didn’t finish."];

                  /// plural
                  ["Pets", "cats", "dogs", "cars"];

    console.log("\nMemorize these words:");
    console.log(words.join(", "));

    readline.question("\nPress ENTER when ready...");

    console.clear();

    let answer = readline.question("Type the words separated by comma: ");

    if(answer === words.join(", ")) {
        console.log("Perfect memory!");
        gameState.addScore(20);
        
    } else {
        console.log("Not quite!");
        gameState.loseLife();
        gameState.addError();
    }

    readline.question("\nPress ENTER to continue...");
}

module.exports = memoryChallenge;