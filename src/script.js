import "./styles.css";
const { Gameboard } = require('../src/gameboard');
const { Ship } = require('../src/ship');
const { Player } = require('../src/player');
const { checkObject } = require('../src/object');
const { putShipsOnBoard } = require('../src/gameboardRenderer');
import { detachListeners } from "../src/eventListenerController";

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

    //by checking which gameboards ships sunk we can see who won the game
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

    const turn = (gridBox) => {
        // PLAYER 1 TURN
        if (playerTurn == 0) {

            playerOne.turn = false;
            playerTwo.turn = true;

            //getting the current gridbox's coordinates
            let gridBoxCoordinatesY = gridBox.getAttribute("coordinatesY");
            let gridBoxCoordinatesX = gridBox.getAttribute("coordinatesX");


            // if the clicked grid box is a "ship"
            //and receiveAttack returns true the ship gets a hit
            if (gameBoardPlayerTwo.receiveAttack(gridBoxCoordinatesY, gridBoxCoordinatesX) == true) {
                // we add a ship hit class for UI
                gridBox.classList.add("ship-hit")
                // here we need enemys board and elemets to change the surrounding grid boxes of the sunk ship
                // we first get all the child notes and then if its horizontal we just need to bottom + 1 of the ship and
                // top - 1 that way we get all the surrounding boxes including cross hits
                let gridBoxes = gridContainer[1].childNodes;
                // we need ship.length to determine the bottom of the ship and if its sunk which box to mark as "miss"
                let shipLength = gameBoardPlayerTwo.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].length;
                // original ship coordinates to determine which boxes to mark as "miss"
                let shipCoordinateY = gameBoardPlayerTwo.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].shipCoordinate[0]
                let shipCoordinateX = gameBoardPlayerTwo.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].shipCoordinate[1]

                console.log(gameBoardPlayerTwo.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].isSunk())

                if (gameBoardPlayerTwo.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].isSunk() && gameBoardPlayerTwo.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].shipDirection == "verticle") {
                    gridBoxes.forEach((gridBox) => {


                        let gridBoxCoordinatesY = gridBox.getAttribute("coordinatesy");
                        let gridBoxCoordinatesX = gridBox.getAttribute("coordinatesx");


                        //TOP
                        if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) - 1 && Number(gridBoxCoordinatesX) == Number(shipCoordinateX)) {
                            gridBox.classList.add("ship-miss")

                        }
                        // BOTTOM
                        if (Number(gridBoxCoordinatesY) == Number(shipLength) + 1 && Number(gridBoxCoordinatesX) == Number(shipCoordinateX)) {
                            gridBox.classList.add("ship-miss")

                        }


                    })
                }
                // cross hits, if it hits the ship all the cross surrounding boxes are marked as "miss"
                gridBoxes.forEach((gridBox) => {
                    let coordinatesYY = gridBox.getAttribute("coordinatesy");
                    let coordinatesXX = gridBox.getAttribute("coordinatesx");
                    if (Number(coordinatesYY) == Number(gridBoxCoordinatesY) + 1 && Number(coordinatesXX) == Number(gridBoxCoordinatesX) + 1) {
                        gridBox.classList.add("ship-miss")
                    }
                    if (Number(coordinatesYY) == Number(gridBoxCoordinatesY) - 1 && Number(coordinatesXX) == Number(gridBoxCoordinatesX) - 1) {
                        gridBox.classList.add("ship-miss")
                    }
                    if (Number(coordinatesYY) == Number(gridBoxCoordinatesY) - 1 && Number(coordinatesXX) == Number(gridBoxCoordinatesX) + 1) {
                        gridBox.classList.add("ship-miss")
                    }
                    if (Number(coordinatesYY) == Number(gridBoxCoordinatesY) + 1 && Number(coordinatesXX) == Number(gridBoxCoordinatesX) - 1) {
                        gridBox.classList.add("ship-miss")
                    }
                })

                gameBoardPlayerTwo.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX] = 2;
            } else {
                gridBox.classList.add("ship-miss")
            }

            console.log("play 1 played")
            playerTurn++;
            checkEndGame(gameBoardPlayerTwo.checkShipsSunk());
            // PLAYER 2 TURN
        } else if (playerTurn == 1) {
            playerOne.turn = true;
            playerTwo.turn = false;

            //getting the current gridbox's coordinates
            let gridBoxCoordinatesY = gridBox.getAttribute("coordinatesY");
            let gridBoxCoordinatesX = gridBox.getAttribute("coordinatesX");


            // if the clicked grid box is a "ship"
            //and receiveAttack returns true the ship gets a hit
            if (gameBoardPlayerOne.receiveAttack(gridBoxCoordinatesY, gridBoxCoordinatesX) == true) {
                // we add a ship hit class for UI
                gridBox.classList.add("ship-hit")
                // here we need enemys board and elemets to change the surrounding grid boxes of the sunk ship
                // we first get all the child notes and then if its horizontal we just need to bottom + 1 of the ship and
                // top - 1 that way we get all the surrounding boxes including cross hits
                let gridBoxes = gridContainer[0].childNodes;
                // we need ship.length to determine the bottom of the ship and if its sunk which box to mark as "miss"
                let shipLength = gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].length;
                // original ship coordinates to determine which boxes to mark as "miss"
                let shipCoordinateY = gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].shipCoordinate[0]
                let shipCoordinateX = gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].shipCoordinate[1]

              

                if (gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].isSunk() && gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].shipDirection == "verticle") {
                    gridBoxes.forEach((gridBox) => {


                        let gridBoxCoordinatesY = gridBox.getAttribute("coordinatesy");
                        let gridBoxCoordinatesX = gridBox.getAttribute("coordinatesx");


                        //TOP
                        if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) - 1 && Number(gridBoxCoordinatesX) == Number(shipCoordinateX)) {
                            gridBox.classList.add("ship-miss")

                        }
                        // BOTTOM
                        if (Number(gridBoxCoordinatesY) == Number(shipLength) + 1 && Number(gridBoxCoordinatesX) == Number(shipCoordinateX)) {
                            gridBox.classList.add("ship-miss")

                        }


                    })
                }
                // cross hits, if it hits the ship all the cross surrounding boxes are marked as "miss"
                gridBoxes.forEach((gridBox) => {
                    let coordinatesYY = gridBox.getAttribute("coordinatesy");
                    let coordinatesXX = gridBox.getAttribute("coordinatesx");
                    if (Number(coordinatesYY) == Number(gridBoxCoordinatesY) + 1 && Number(coordinatesXX) == Number(gridBoxCoordinatesX) + 1) {
                        gridBox.classList.add("ship-miss")
                    }
                    if (Number(coordinatesYY) == Number(gridBoxCoordinatesY) - 1 && Number(coordinatesXX) == Number(gridBoxCoordinatesX) - 1) {
                        gridBox.classList.add("ship-miss")
                    }
                    if (Number(coordinatesYY) == Number(gridBoxCoordinatesY) - 1 && Number(coordinatesXX) == Number(gridBoxCoordinatesX) + 1) {
                        gridBox.classList.add("ship-miss")
                    }
                    if (Number(coordinatesYY) == Number(gridBoxCoordinatesY) + 1 && Number(coordinatesXX) == Number(gridBoxCoordinatesX) - 1) {
                        gridBox.classList.add("ship-miss")
                    }
                })

                gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX] = 2;
            } else {
                gridBox.classList.add("ship-miss")
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
let destroyerOne = new Ship(2, "destroyer", [1, 2], "verticle")
gameBoardPlayerOne.placeShip(destroyerOne.shipCoordinate[0], destroyerOne.shipCoordinate[1], destroyerOne.length, destroyerOne.shipDirection, destroyerOne)


let gameBoardPlayerTwo = new Gameboard(0)
let playerTwo = new Player(gameBoardPlayerTwo, "tigran", false)
let destroyerTwo = new Ship(2, "destroyer", [1, 2], "verticle")

gameBoardPlayerTwo.placeShip(destroyerTwo.shipCoordinate[0], destroyerTwo.shipCoordinate[1], destroyerTwo.length, destroyerTwo.shipDirection, destroyerTwo)





putShipsOnBoard(gridContainer[0], gameBoardPlayerOne, gameController);
putShipsOnBoard(gridContainer[1], gameBoardPlayerTwo, gameController);


gameController.resetGame();


