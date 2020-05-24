const title = document.querySelector('.title');
const gameBoard = document.querySelector('.board');
const result = document.querySelector('.result');
let board = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 'X';

let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

for (let index = 0; index < board.length; index++) {
    let square = document.createElement('div');
    square.classList.add('square');
    gameBoard.appendChild(square);
    square.addEventListener('click', placeOnBoard = function () {
        if (!board[index]) {
            board[index] = playerTurn;
            square.textContent = playerTurn;
            if (checkWin(board)) {
                title.textContent = 'Game Over';
                Array.from(this.parentNode.childNodes).forEach((item) => {
                    item.removeEventListener('click', placeOnBoard, true);
                    // console.log(item, index);
                });
                // event.source.removeEventListener('click', arguments.callee);
            }
            playerTurn = playerTurn === 'X' ? 'O' : 'X';
        }

        // console.log(board, index);
    }, true);

}


function checkWin(board) {
    for (let combo of winningCombos) {
        if (board[combo[0]] && board[combo[1]] && board[combo[2]]) {
            if (board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]] && board[combo[0]] === board[combo[2]]) {
                announceWinner(board[combo[0]]);
                return true;
            }
        }
    }

    if (board.every(Boolean)) {
        announceWinner('Draw');
        return true;
    };

}

function announceWinner(win) {
    if (win === 'Draw') {
        result.textContent = 'Draw';
        result.style.color = 'gray';
        return;
    }
    result.textContent = `Winner: ${win}`;

}
