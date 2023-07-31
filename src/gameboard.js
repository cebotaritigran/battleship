import { Ship } from "./ship";
// gameborad factory
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
    let hitMiss = []

    // place the ship on the ship's given coordinates change the maps coordinate from 0 to 1
    let placeShip = (ship) => {
        for (let i = 0; i < ship.length; i++) {
            // where ship is 1
            coordinates[ship[i]] = 1
        }
        console.log(coordinates)
        return coordinates
    }

    let receiveAttack = (attackCoordinate) => {
        if (coordinates[attackCoordinate] == 0) {
            // miss is 2
            coordinates[attackCoordinate] = 2
            hitMiss.push(2)
        } else if (coordinates[attackCoordinate] == 1) {
            // hit is 3
            coordinates[attackCoordinate] = 3
            hitMiss.push(3)
        }
        console.log(coordinates)
        return coordinates
    }
    // we can check if game over simply by looking in our array to see if there are any
    // 1s if there are 1s it means there is still ships left on the map
    // if not then game is over
    let gameOver = () => {
        if (coordinates.includes(1)) {
            return false;
        }
        if (coordinates.includes(1) == false) {
            return true
        }
    }
    return { coordinates, receiveAttack, placeShip, gameOver };
}

export { GameBoard }