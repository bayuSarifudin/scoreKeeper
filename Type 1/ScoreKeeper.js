const p1 = {
    nameInput: document.querySelector('#player1Input'),
    name: document.querySelector('#p1Name'),
    score: 0,
    display: document.querySelector('#p1Display'),
    button: document.querySelector('#p1Btn')
}
const p2 = {
    nameInput: document.querySelector('#player2Input'),
    name: document.querySelector('#p2Name'),
    score: 0,
    display: document.querySelector('#p2Display'),
    button: document.querySelector('#p2Btn')
}

const body = document.querySelector('body');
const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

let pointKeysOn = false;
let resetKeysOn = false;

let winningScore = 3;
let isGameOver = false;

//update winningScore if selector changed
winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset()
})

p1.nameInput.addEventListener('input', () => {
    if (p1.nameInput.value !== '') {
        p1.name.textContent = p1.nameInput.value;
    } else {
        p1.name.textContent = 'Player 1';
    }
})
p2.nameInput.addEventListener('input', () => {
    if (p2.nameInput.value !== '') {
        p2.name.textContent = p2.nameInput.value;
    } else {
        p2.name.textContent = 'Player 2';
    }
})

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore && player.score > opponent.score + 1) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        } else if (player.score === winningScore - 1 && player.score === opponent.score) {
            winningScore++;
        }
    }
    player.display.textContent = player.score;
}

p1.button.addEventListener('click', function() {
    updateScores(p1, p2);
})
p2.button.addEventListener('click', function() {
    updateScores(p2, p1);
})


function reset() {
    isGameOver = false;
    for (let p of[p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
resetBtn.addEventListener('click', reset);