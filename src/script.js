import "./styles.css";
const { Gameboard } = require('../src/gameboard');
const { Ship } = require('../src/ship');
const { Player } = require('../src/player');
const { checkObject } = require('../src/object');
const { putShipsOnBoard } = require('../src/gameboardRenderer');
import { removeEventListener } from "../src/eventListenerController";

let gridContainer = document.querySelectorAll(".grid-container")

export const gameController = (() => {

    let gameEnded = false;
    const resetGame = () => {
        const resetButton = document.querySelector('.reset-button')
        resetButton.addEventListener('click', () => {
            gameEnded = false;
            playerTurn = 0;
            let game = document.querySelector(".game")
            putShipsOnBoard(gridContainer[0], gameBoardPlayerOne);
            putShipsOnBoard(gridContainer[1], gameBoardPlayerTwo);
        })
    }

    const turn = () => {
        if (playerOne.turn == true) {

            playerOne.turn = false;
            playerTwo.turn = true;

            let playerOneGrids = gridContainer[0].childNodes
            removeEventListener(playerOneGrids, false);
            let playerTwoGrids = gridContainer[1].childNodes
            removeEventListener(playerTwoGrids, true);



            console.log("play 1 played")

        } else if (playerTwo.turn == true) {
            playerOne.turn = true;
            playerTwo.turn = false;

            let playerOneGrids = gridContainer[0].childNodes
            removeEventListener(playerOneGrids, true);
            let playerTwoGrids = gridContainer[1].childNodes
            removeEventListener(playerTwoGrids, false);

            console.log("player 2 played")
        }

    }

    const checkHit = () => {

    }
    return { resetGame, turn, checkHit };
})()




let gameBoardPlayerOne = new Gameboard(0)
let playerOne = new Player(gameBoardPlayerOne, "tigran", true)
let destroyer = new Ship(2, "destroyer")
gameBoardPlayerOne.placeShip(0, 0, destroyer.length, "horizontal", destroyer)

let gameBoardPlayerTwo = new Gameboard(0)
let playerTwo = new Player(gameBoardPlayerTwo, "tigran", false)
let destroyerTwo = new Ship(2, "destroyer")
gameBoardPlayerTwo.placeShip(0, 0, destroyerTwo.length, "verticle", destroyerTwo)



console.log(gameBoardPlayerOne.coordinates)





putShipsOnBoard(gridContainer[0], gameBoardPlayerOne, gameController);
putShipsOnBoard(gridContainer[1], gameBoardPlayerTwo, gameController);


gameController.resetGame();


