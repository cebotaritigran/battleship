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
            coordinates[ship[i]] = "s"
        }
        console.log(coordinates)
        return coordinates
    }

    let receiveAttack = (x) => {

    }
    return { coordinates, receiveAttack, placeShip };
}

export { GameBoard }