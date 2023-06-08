import { Ship } from "./ship";
let GameBoard = (ship) => {
    let coordinates = [
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ]

    let placeShip = (ship) => {
        for (let i = 0; i < ship.length; i++) {
            coordinates[ship[i]] = 1
        }
        console.log(coordinates)
        return coordinates
    }

    let receiveAttack = (attackCoordinate) => {
        if (coordinates[attackCoordinate] == 0) {
            coordinates[attackCoordinate] = 2
        } else if (coordinates[attackCoordinate] == 1) {
            coordinates[attackCoordinate] = 3
        }
        console.log(coordinates)
        return coordinates
    }
    let gameOver = () => {
        if (coordinates.includes(1)) {
            return false;
        }
        if (coordinates.includes(1) == false) {
            return true
        }
    }
    return { coordinates, receiveAttack, placeShip,gameOver };
}

export { GameBoard }