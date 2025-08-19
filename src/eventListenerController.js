const { Gameboard } = require('../src/gameboard');
const { Ship } = require('../src/ship');
const { Player } = require('../src/player');
const { checkObject } = require('../src/object');
const { putShipsOnBoard } = require('../src/gameboardRenderer');
import { gameController } from "../src/script";

export function removeEventListener(board, remove) {
    if (remove == true) {
        for (let i = 0; i < 100; i++) {
            console.log(board[i])
            board[i].removeEventListener("click", gameController.turn)
        }
    } else {
        for (let i = 0; i < 100; i++) {
            console.log(board[i])
            board[i].addEventListener("click", gameController.turn)
        }
    }



}

