import "./styles.css";
const { Gameboard } = require('../src/gameboard');
const { Ship } = require('../src/ship');
const { Player } = require('../src/player');
const { checkObject } = require('../src/object');
const { putShipsOnBoard } = require('../src/gameboardRenderer');

import { detachListeners } from "../src/eventListenerController";

let vsAiActive = false;

let playerContainer = document.querySelectorAll(".player-container")

let gridContainer = document.querySelectorAll(".grid-container")

let randomise = document.querySelectorAll(".randomise")

let playerVsAiOption = document.querySelector(".player-ai")

let playerVsPlayerOption = document.querySelector(".player-player")

let turnShower = document.querySelectorAll(".turn-shower")

let playButton = document.querySelector(".play")




playerVsAiOption.addEventListener("click", () => {
    randomiseSecondBoard()
    let ships = gridContainer[1].children
    vsAiActive = true;
    for (let ship of ships) {
        ship.classList.remove("ship-box")
    }
})

playerVsPlayerOption.addEventListener("click", () => {

})




turnShower[1].classList.toggle("turn-shower")

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
            // this is how we show whose turn it is
            turnShower[1].classList.toggle("turn-shower")
            turnShower[0].classList.toggle("turn-shower")

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
                // if ship sunk mark top and bottom of the ship as "miss"
                if (gameBoardPlayerTwo.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].isSunk() &&
                    gameBoardPlayerTwo.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].shipDirection == "vertical" &&
                    gameBoardPlayerTwo.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].length != 1) {
                    gridBoxes.forEach((gridBox) => {


                        let gridBoxCoordinatesY = gridBox.getAttribute("coordinatesy");
                        let gridBoxCoordinatesX = gridBox.getAttribute("coordinatesx");


                        //TOP
                        if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) - 1 && Number(gridBoxCoordinatesX) == Number(shipCoordinateX)) {
                            gridBox.classList.add("ship-miss")

                        }
                        // BOTTOM
                        if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY + shipLength) && Number(gridBoxCoordinatesX) == Number(shipCoordinateX)) {
                            gridBox.classList.add("ship-miss")

                        }
                        console.log(gameBoardPlayerTwo.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].length)

                    })
                    // if ship sunk mark right and left of the ship as "miss"
                } else if (gameBoardPlayerTwo.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].isSunk() &&
                    gameBoardPlayerTwo.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].shipDirection == "horizontal" &&
                    gameBoardPlayerTwo.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].length != 1) {
                    gridBoxes.forEach((gridBox) => {


                        let gridBoxCoordinatesY = gridBox.getAttribute("coordinatesy");
                        let gridBoxCoordinatesX = gridBox.getAttribute("coordinatesx");


                        // LEFT
                        if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) && Number(gridBoxCoordinatesX) == Number(shipCoordinateX) - 1) {
                            gridBox.classList.add("ship-miss")

                        }
                        // right
                        if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) && Number(gridBoxCoordinatesX) == Number(shipCoordinateX + shipLength)) {
                            gridBox.classList.add("ship-miss")

                        }


                    })
                }
                // this condition is for only "small" ships with length 1
                // because we already mark "miss" the cross cells
                // we mark the rest 4 cells of the ship as "miss"
                if (gameBoardPlayerTwo.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].isSunk() &&
                    gameBoardPlayerTwo.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].length == 1) {
                    gridBoxes.forEach((gridBox) => {


                        let gridBoxCoordinatesY = gridBox.getAttribute("coordinatesy");
                        let gridBoxCoordinatesX = gridBox.getAttribute("coordinatesx");


                        // LEFT
                        if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) && Number(gridBoxCoordinatesX) == Number(shipCoordinateX) - 1) {
                            gridBox.classList.add("ship-miss")

                        }
                        // right
                        if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) && Number(gridBoxCoordinatesX) == Number(shipCoordinateX) + 1) {
                            gridBox.classList.add("ship-miss")

                        }


                        //TOP
                        if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) - 1 && Number(gridBoxCoordinatesX) == Number(shipCoordinateX)) {
                            gridBox.classList.add("ship-miss")

                        }
                        // BOTTOM
                        if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) + 1 && Number(gridBoxCoordinatesX) == Number(shipCoordinateX)) {
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
            if (vsAiActive) {
                turnShower[0].classList.toggle("turn-shower")
                turnShower[1].classList.toggle("turn-shower")
                let gridBoxCoordinatesY = Math.floor(Math.random() * 11)
                let gridBoxCoordinatesX = Math.floor(Math.random() * 11)
                playerOne.turn = true;
                playerTwo.turn = false;
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
                    

                    // if ship sunk mark top and bottom of the ship as "miss"
                    if (gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].isSunk() &&
                        gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].shipDirection == "vertical" &&
                        gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].length != 1) {
                        gridBoxes.forEach((gridBox) => {


                            let gridBoxCoordinatesY = gridBox.getAttribute("coordinatesy");
                            let gridBoxCoordinatesX = gridBox.getAttribute("coordinatesx");


                            //TOP
                            if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) - 1 && Number(gridBoxCoordinatesX) == Number(shipCoordinateX)) {
                                gridBox.classList.add("ship-miss")

                            }

                            // BOTTOM
                            if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY + shipLength) && Number(gridBoxCoordinatesX) == Number(shipCoordinateX)) {
                                gridBox.classList.add("ship-miss")

                            }


                        })
                        // if ship sunk mark right and left of the ship as "miss"
                    } else if (gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].isSunk() &&
                        gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].shipDirection == "horizontal" &&
                        gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].length != 1) {
                        gridBoxes.forEach((gridBox) => {


                            let gridBoxCoordinatesY = gridBox.getAttribute("coordinatesy");
                            let gridBoxCoordinatesX = gridBox.getAttribute("coordinatesx");


                            // LEFT
                            if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) && Number(gridBoxCoordinatesX) == Number(shipCoordinateX) - 1) {
                                gridBox.classList.add("ship-miss")

                            }
                            // right
                            if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) && Number(gridBoxCoordinatesX) == Number(shipCoordinateX + shipLength)) {
                                gridBox.classList.add("ship-miss")

                            }


                        })
                    }
                    if (gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].isSunk() &&
                        gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].length == 1) {
                        gridBoxes.forEach((gridBox) => {


                            let gridBoxCoordinatesY = gridBox.getAttribute("coordinatesy");
                            let gridBoxCoordinatesX = gridBox.getAttribute("coordinatesx");


                            // LEFT
                            if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) && Number(gridBoxCoordinatesX) == Number(shipCoordinateX) - 1) {
                                gridBox.classList.add("ship-miss")

                            }
                            // right
                            if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) && Number(gridBoxCoordinatesX) == Number(shipCoordinateX) + 1) {
                                gridBox.classList.add("ship-miss")

                            }


                            //TOP
                            if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) - 1 && Number(gridBoxCoordinatesX) == Number(shipCoordinateX)) {
                                gridBox.classList.add("ship-miss")

                            }
                            // BOTTOM
                            if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) + 1 && Number(gridBoxCoordinatesX) == Number(shipCoordinateX)) {
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
            } else {
                // this is how we show whose turn it is
                turnShower[0].classList.toggle("turn-shower")
                turnShower[1].classList.toggle("turn-shower")

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


                    // if ship sunk mark top and bottom of the ship as "miss"
                    if (gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].isSunk() &&
                        gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].shipDirection == "vertical" &&
                        gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].length != 1) {
                        gridBoxes.forEach((gridBox) => {


                            let gridBoxCoordinatesY = gridBox.getAttribute("coordinatesy");
                            let gridBoxCoordinatesX = gridBox.getAttribute("coordinatesx");


                            //TOP
                            if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) - 1 && Number(gridBoxCoordinatesX) == Number(shipCoordinateX)) {
                                gridBox.classList.add("ship-miss")

                            }

                            // BOTTOM
                            if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY + shipLength) && Number(gridBoxCoordinatesX) == Number(shipCoordinateX)) {
                                gridBox.classList.add("ship-miss")

                            }


                        })
                        // if ship sunk mark right and left of the ship as "miss"
                    } else if (gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].isSunk() &&
                        gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].shipDirection == "horizontal" &&
                        gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].length != 1) {
                        gridBoxes.forEach((gridBox) => {


                            let gridBoxCoordinatesY = gridBox.getAttribute("coordinatesy");
                            let gridBoxCoordinatesX = gridBox.getAttribute("coordinatesx");


                            // LEFT
                            if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) && Number(gridBoxCoordinatesX) == Number(shipCoordinateX) - 1) {
                                gridBox.classList.add("ship-miss")

                            }
                            // right
                            if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) && Number(gridBoxCoordinatesX) == Number(shipCoordinateX + shipLength)) {
                                gridBox.classList.add("ship-miss")

                            }


                        })
                    }
                    if (gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].isSunk() &&
                        gameBoardPlayerOne.coordinates[gridBoxCoordinatesY][gridBoxCoordinatesX].length == 1) {
                        gridBoxes.forEach((gridBox) => {


                            let gridBoxCoordinatesY = gridBox.getAttribute("coordinatesy");
                            let gridBoxCoordinatesX = gridBox.getAttribute("coordinatesx");


                            // LEFT
                            if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) && Number(gridBoxCoordinatesX) == Number(shipCoordinateX) - 1) {
                                gridBox.classList.add("ship-miss")

                            }
                            // right
                            if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) && Number(gridBoxCoordinatesX) == Number(shipCoordinateX) + 1) {
                                gridBox.classList.add("ship-miss")

                            }


                            //TOP
                            if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) - 1 && Number(gridBoxCoordinatesX) == Number(shipCoordinateX)) {
                                gridBox.classList.add("ship-miss")

                            }
                            // BOTTOM
                            if (Number(gridBoxCoordinatesY) == Number(shipCoordinateY) + 1 && Number(gridBoxCoordinatesX) == Number(shipCoordinateX)) {
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

    }

    const checkHit = () => {

    }
    return { resetGame, turn, checkHit };
})()




let gameBoardPlayerOne = new Gameboard(0)
let playerOne = new Player(gameBoardPlayerOne, "tigran", true)


let gameBoardPlayerTwo = new Gameboard(0)
let playerTwo = new Player(gameBoardPlayerTwo, "ai", false)



function placeRandomShip(gameBoard) {
    let randomMoves = [
        [
            [5, 2, "vertical", "huge"],
            [1, 2, "vertical", "long"],
            [1, 7, "horizontal", "long"],
            [1, 5, "vertical", "medium"],
            [8, 6, "horizontal", "medium"],
            [4, 6, "horizontal", "medium"],
            [6, 0, "vertical", "small"],
            [6, 4, "vertical", "small"],
            [6, 6, "vertical", "small"],
            [5, 9, "vertical", "small"],
        ], [
            [9, 5, "horizontal", "huge"],
            [3, 5, "vertical", "long"],
            [2, 9, "vertical", "long"],
            [1, 3, "vertical", "medium"],
            [0, 8, "horizontal", "medium"],
            [8, 1, "vertical", "medium"],
            [6, 0, "vertical", "small"],
            [1, 1, "vertical", "small"],
            [7, 5, "vertical", "small"],
            [6, 7, "vertical", "small"],
        ], [
            [1, 1, "horizontal", "huge"],
            [4, 5, "horizontal", "long"],
            [6, 3, "vertical", "long"],
            [6, 1, "vertical", "medium"],
            [6, 7, "vertical", "medium"],
            [7, 9, "vertical", "medium"],
            [3, 1, "vertical", "small"],
            [2, 6, "vertical", "small"],
            [2, 8, "vertical", "small"],
            [0, 8, "vertical", "small"],
        ],
    ]
    let randomPositionSelecter = Math.floor(Math.random() * randomMoves.length);

    for (let [randomY, randomX, shipDirection, shipName] of randomMoves[randomPositionSelecter]) {
        if (shipName == "huge") {
            let ship = new Ship(4, shipName, [randomY, randomX], shipDirection)
            gameBoard.placeShip(ship.shipCoordinate[0], ship.shipCoordinate[1], ship.length, ship.shipDirection, ship)
        }
        if (shipName == "small") {
            let ship = new Ship(1, shipName, [randomY, randomX], shipDirection)
            gameBoard.placeShip(ship.shipCoordinate[0], ship.shipCoordinate[1], ship.length, ship.shipDirection, ship)
        }
        if (shipName == "medium") {
            let ship = new Ship(2, shipName, [randomY, randomX], shipDirection)
            gameBoard.placeShip(ship.shipCoordinate[0], ship.shipCoordinate[1], ship.length, ship.shipDirection, ship)
        }
        if (shipName == "long") {
            let ship = new Ship(3, shipName, [randomY, randomX], shipDirection)
            gameBoard.placeShip(ship.shipCoordinate[0], ship.shipCoordinate[1], ship.length, ship.shipDirection, ship)
        }
    }
}

function randomiseFirstBoard() {

    gridContainer[0].innerHTML = "";
    gameBoardPlayerOne.cleanBoard();
    placeRandomShip(gameBoardPlayerOne)
    putShipsOnBoard(gridContainer[0], gameBoardPlayerOne, gameController);
}

function randomiseSecondBoard() {

    gridContainer[1].innerHTML = "";
    gameBoardPlayerTwo.cleanBoard();
    placeRandomShip(gameBoardPlayerTwo)
    putShipsOnBoard(gridContainer[1], gameBoardPlayerTwo, gameController);
}

// PLACES SHIPS RANDOMLY ON BOTH BOARDS
randomise[0].addEventListener("click", randomiseFirstBoard)

randomise[1].addEventListener("click", randomiseSecondBoard)

placeRandomShip(gameBoardPlayerOne)
placeRandomShip(gameBoardPlayerTwo)

putShipsOnBoard(gridContainer[0], gameBoardPlayerOne, gameController);
putShipsOnBoard(gridContainer[1], gameBoardPlayerTwo, gameController);







// after we lock positions remove randomise option
playButton.addEventListener("click", () => {
    playerContainer[0].removeChild(randomise[0])
    playerContainer[1].removeChild(randomise[1])
})



// function placeRandomShip() {
//     let ships = [
//         // Ship count, ship length, ship name
//         [1, 4, "huge"],
//         [2, 3, "long"],
//         [3, 2, "medium"],
//         [4, 1, "small"]
//     ]

//     ships.forEach(([shipCount, shipLength, shipName]) => {

//         for (let i = 0; i < shipCount; i++) {
//             let randomNumberY = Math.floor(Math.random() * 10);
//             let randomNumberX = Math.floor(Math.random() * 10);

//             let randomDirection = Math.floor(Math.random() * 3);
//             let direction;
//             if (randomDirection == 1) {
//                 direction = "vertical"
//             } else {
//                 direction = "horizontal"
//             }
//             let ship = new Ship(shipLength, shipName, [randomNumberY, randomNumberX], direction)

//             let maxTries = 2222; // safety cap
//             let tries = 0;

//             while (tries < maxTries) {
//                 tries++;
//                 randomNumberY = Math.floor(Math.random() * 10);
//                 randomNumberX = Math.floor(Math.random() * 10);
//                 // checking if the ship is out of bound, if it is
//                 // we just do continue and not arrive until "break" 
//                 // so the while loop starts again and we change
//                 // coordinates of the ships again
//                 if (direction === "vertical" && randomNumberY + shipLength - 1 >= 10) {
//                     continue;
//                 }
//                 if (direction === "horizontal" && randomNumberX + shipLength - 1 >= 10) {
//                     continue;
//                 }
//                 if (randomNumberY < 0) {
//                     continue;
//                 }
//                 if (randomNumberX < 0) {
//                     continue;
//                 }

//                 if (checkNeighborCells(randomNumberY, randomNumberX, gameBoardPlayerTwo, ship.length, ship.shipDirection) == false) {
//                     break;
//                 }

//             }
//             if (tries === maxTries) {
//                 console.warn(`Could not place ${shipName} after ${maxTries} tries`);

//             }
//             ship.shipCoordinate[0] = randomNumberY
//             ship.shipCoordinate[1] = randomNumberX
//             gameBoardPlayerTwo.placeShip(ship.shipCoordinate[0], ship.shipCoordinate[1], shipLength, ship.shipDirection, ship)

//         }
//     });


// }


// // checking neighbors cells to be able to put ship, if there is a ship with no cells in between player wont be able to put the ship there
// function checkNeighborCells(coordinatesY, coordinatesX, gameBoard, shipLength, shipDirection) {

//     let surroundingCells = [[-1, -1], [-1, 0], [-1, 1],
//     [0, -1], [0, 1],
//     [1, -1], [1, 0], [1, 1]]

//     let hasNeighbor = false;

//     //this check along the chips by getting ship direction and adding it to coordinates provided
//     /*if the ship is vertical ->
//     [] => newCoordinateY = coordinatesY + 0;
//     [] => newCoordinateY = coordinatesY + 1;
//     [] => newCoordinateY = coordinatesY + 2*/
//     for (let i = 0; i < shipLength; i++) {

//         let newCoordinateY = coordinatesY
//         let newCoordinateX = coordinatesX

//         if (shipDirection == "vertical") {
//             newCoordinateY = coordinatesY + i;
//         } else {
//             newCoordinateX = coordinatesX + i;
//         }
//         // this checks ship's 8 neighbors
//         /*
//           [][][]
//           []  []
//           [][][] */
//         for (let [directionY, directionX] of surroundingCells) {
//             // checking if the coordinates are out of bound if there is an offset
//             if (newCoordinateY + directionY < 0 ||
//                 newCoordinateX + directionX < 0 ||
//                 newCoordinateY + directionY >= 10 ||
//                 newCoordinateX + directionX >= 10
//             ) {
//                 continue;
//             }
//             if (gameBoard.coordinates[newCoordinateY + directionY][newCoordinateX + directionX] != 0) {
//                 return true
//             }
//         }
//     }
//     return false;
// }







// placeRandomShip();
