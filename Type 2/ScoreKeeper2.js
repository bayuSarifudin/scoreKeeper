const player1 = {
    name: document.querySelector("#p1Name"),
    nameInput: document.querySelector("#p1NameInput"),
    scoreBoard: document.querySelector("#p1ScoreBoard"),
    currentScore: 0,
    button: document.querySelector("#p1Button")
}
const player2 = {
    name: document.querySelector("#p2Name"),
    nameInput: document.querySelector("#p2NameInput"),
    scoreBoard: document.querySelector("#p2ScoreBoard"),
    currentScore: 0,
    button: document.querySelector("#p2Button")
}

const players = [player1, player2];

const reset = document.querySelector("#rButton");

let isGameOver = false;
const targetScore = document.querySelector("#targetScore");
targetScore.value = 5;

let winningScore = parseInt(targetScore.value);

//CHANGE THE NAME OF PLAYER 1
player1.nameInput.addEventListener("input", () => {
    player1.name.textContent = player1.nameInput.value;
});
//CHANGE THE NAME OF PLAYER 2
player2.nameInput.addEventListener("input", () => {
    player2.name.textContent = player2.nameInput.value;
});

//PLAYER 1 CONTROL 
player1.button.addEventListener('click', () => {
    calculateScores(player1, player2);
});

//PLAYER 2 CONTROL
player2.button.addEventListener("click", () => {
    calculateScores(player2, player1);
});

targetScore.addEventListener('change', () => {
    winningScore = parseInt(targetScore.value);
    resetGame();
});

//R
reset.addEventListener('click', resetGame);

//CALCULATE SCORE AND WINNER/LOSER LOGIC
function calculateScores(home, visitor) {
    if (!isGameOver) {
        home.currentScore++;
        if (home.currentScore === winningScore) {
            isGameOver = true;
            home.scoreBoard.classList.add("winner");
            visitor.scoreBoard.classList.add("loser");
            home.button.disabled = true;
            visitor.button.disabled = true;
        }
    }
    home.scoreBoard.textContent = home.currentScore;
}
//RESET GAME LOGIC
function resetGame() {
    isGameOver = false;
    for (let player of players) {
        player.currentScore = 0;
        player.scoreBoard.textContent = player.currentScore;
        player.button.disabled = false;
        player.scoreBoard.classList.remove("winner", "loser");
    }
}