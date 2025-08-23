const { Gameboard } = require('../src/gameboard');
const { Ship } = require('../src/ship');
const { Player } = require('../src/player');
const { checkObject } = require('../src/object');

function putShipsOnBoard(board, gameBoard, gameController) {
    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
            let gridBox = document.createElement("div");
            gridBox.classList.add("grid-box")
            board.appendChild(gridBox)
            gridBox.addEventListener("click", () => { gameController.turn(gridBox) })
            gridBox.setAttribute("coordinatesY", i)
            gridBox.setAttribute("coordinatesX", k)
            if (gameBoard.coordinates[i][k] != undefined || gameBoard.coordinates[i][k] != null) {
                if (gameBoard.coordinates[i][k] != 0) {
                    gridBox.classList.add("ship-box")
                }
            }

        }
    }
}

module.exports = { putShipsOnBoard };