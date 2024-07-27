const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('resetButton');
let currentPlayer = 'X';
let gameState = Array(9).fill('');

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWin(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => gameState[index] === player);
    });
}

function checkDraw() {
    return gameState.every(cell => cell !== '');
}

function handleClick(event) {
    const index = event.target.dataset.index;

    if (gameState[index] === '' && !message.textContent) {
        gameState[index] = currentPlayer;
        event.target.textContent = currentPlayer;

        if (checkWin(currentPlayer)) {
            message.textContent = `Player ${currentPlayer} wins!`;
        } else if (checkDraw()) {
            message.textContent = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function resetGame() {
    gameState = Array(9).fill('');
    currentPlayer = 'X';
    message.textContent = '';
    cells.forEach(cell => (cell.textContent = ''));
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
