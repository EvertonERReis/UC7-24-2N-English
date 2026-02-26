// Variáveis internas do módulo
let score = 0; // pontos
let lives = 10; // vidas
let erros = 0;

// Adiciona pontos
function addScore(points) {
    score += points; 
}

// Aumenta os erros
function addError() {
    erros++;
}

// Remove uma vida
function loseLife() {
    lives--;
}

// Retorna pontuação atual
function getScore() {
    return score;
}

function getError() {
    return erros;
}

// Retorna vidas atuais
function getLives() {
    return lives;
}

// Reinicia o jogo
function resetGame() {
    score = 0;
    erros = 0;
    lives = 10;

}


// Exportamos as funções
module.exports = {
    addScore,
    addError,
    loseLife,
    getScore,
    getError,
    getLives,
    resetGame,
    
};