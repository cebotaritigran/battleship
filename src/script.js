import "./styles.css";
const { Gameboard } = require('../src/gameboard');
const { Ship } = require('../src/ship');
const { Player } = require('../src/player');
const { checkObject } = require('../src/object');
const { putShipsOnBoard } = require('../src/gameboardRenderer');
import { removeEventListener } from "../src/eventListenerController";

let gridContainer = document.querySelectorAll(".grid-container")

export const gameController = (() => {
    let playerTurn = 0;
    let gameEnded = false;
    const resetGame = () => {
        const resetButton = document.querySelector('.reset-button')
        resetButton.addEventListener('click', () => {
            gameEnded = false;
            let game = document.querySelector(".game")
            putShipsOnBoard(gridContainer[0], gameBoardPlayerOne);
            putShipsOnBoard(gridContainer[1], gameBoardPlayerTwo);
        })
    }

    const checkEndGame = (board) => {
        gameEnded = board;
        if (gameBoardPlayerOne.allShipsSunk == true) {
            return console.log("player 2 won")
        }
        if (gameBoardPlayerTwo.allShipsSunk == true) {
            return console.log("player 1 won")
        }
        return gameBoardPlayerOne.allShipsSunk;
    }

    const turn = (box) => {

        if (playerTurn == 0) {

            playerOne.turn = false;
            playerTwo.turn = true;

            let coordinatesY = box.getAttribute("coordinatesY");
            let coordinatesX = box.getAttribute("coordinatesX");
            if (gameBoardPlayerTwo.receiveAttack(coordinatesY, coordinatesX) == true) {
                //console.log(gameBoardPlayerTwo.receiveAttack(coordinatesY, coordinatesX))
                box.classList.add("ship-hit")
                let boxes = gridContainer[1].childNodes;

                boxes.forEach((box) => {
                    let coordinatesYY = box.getAttribute("coordinatesy");
                    console.log("hey im here", coordinatesYY, coordinatesY, Number(coordinatesYY) == Number(coordinatesY) + 1)
                    if (Number(coordinatesYY) == Number(coordinatesY) + 1) {
                        box.classList.add("ship-hit")
                        
                    }
                })
            } else {
                box.classList.add("ship-miss")
            }

            // box.classList.remove("ship-box")
            // let playerOneGrids = gridContainer[0].childNodes
            // removeEventListener(playerOneGrids, false);
            // let playerTwoGrids = gridContainer[1].childNodes
            // removeEventListener(playerTwoGrids, true);



            console.log("play 1 played")
            playerTurn++;
            checkEndGame(gameBoardPlayerTwo.checkShipsSunk());

        } else if (playerTurn == 1) {
            playerOne.turn = true;
            playerTwo.turn = false;

            let coordinatesY = box.getAttribute("coordinatesY");
            let coordinatesX = box.getAttribute("coordinatesX");
            if (gameBoardPlayerOne.receiveAttack(coordinatesY, coordinatesX) == true) {
                box.classList.add("ship-hit")

            } else {
                box.classList.add("ship-miss")
            }


            console.log("player 2 played")
            playerTurn--;
            checkEndGame(gameBoardPlayerOne.checkShipsSunk());
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
let destroyerTwotw = new Ship(2, "destroyer")
let destroyerTwotwtw = new Ship(2, "destroyer")
let destroyerTwotwtwtw = new Ship(2, "destroyer")
gameBoardPlayerTwo.placeShip(0, 0, destroyerTwo.length, "verticle", destroyerTwo)
gameBoardPlayerTwo.placeShip(5, 0, destroyerTwotw.length, "verticle", destroyerTwo)
gameBoardPlayerTwo.placeShip(8, 0, destroyerTwotwtw.length, "verticle", destroyerTwo)
gameBoardPlayerTwo.placeShip(5, 5, destroyerTwotwtwtw.length, "verticle", destroyerTwo)




putShipsOnBoard(gridContainer[0], gameBoardPlayerOne, gameController);
putShipsOnBoard(gridContainer[1], gameBoardPlayerTwo, gameController);


gameController.resetGame();


