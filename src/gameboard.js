const { destroyer, Ship } = require('../src/ship');
const { checkObject } = require('../src/object');
class Gameboard {
    constructor(missedAttacks, coordinates) {
        this.missedAttacks = missedAttacks;
        this.allShipsSunk = false;
        this.coordinates = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }

    checkShipsSunk() {
        // for (let i = 0; i < 10; i++) {
        //     for (let k = 0; k < 10; k++) {

        //     }
        // }
        for (let i = 0; i < this.coordinates.length; i++) {
            // if there is ship not sink
            if (this.coordinates[i].some(checkObject)) {

                this.allShipsSunk = false;
                return this.allShipsSunk;
            } else if (this.coordinates[i].some(checkObject) == false) {
                this.allShipsSunk = true;

            }

        }

        return this.allShipsSunk;
    }

    placeShip(coordinatesY, coordinatesX, length, lineDirection, ship) {

        this.coordinates[coordinatesY][coordinatesX] = ship
        if (lineDirection == "vertical") {
            for (let i = 0; i < length; i++) {


                if (coordinatesY + length > this.coordinates.length) {
                    throw new Error("Ship goes out of bounds vertically" + coordinatesY + length);
                }
                this.coordinates[coordinatesY + i][coordinatesX] = ship


            }
        } else if (lineDirection == "horizontal") {
            for (let i = 0; i < length; i++) {
                this.coordinates[coordinatesY][coordinatesX + i] = ship
            }
        }

        return this.coordinates;
    }

    receiveAttack(coordinatesY, coordinatesX) {

        // if (this.coordinates[coordinatesY][coordinatesX] == undefined || this.coordinates[coordinatesY][coordinatesX] == null) {
        //     this.coordinates[coordinatesY][coordinatesX] = 1
        // }
        console.log(coordinatesY, coordinatesX)
        if (this.coordinates[coordinatesY][coordinatesX] != 0 && this.coordinates[coordinatesY][coordinatesX] != 1 && this.coordinates[coordinatesY][coordinatesX] != 2) {
            this.coordinates[coordinatesY][coordinatesX].hit();
            //this.coordinates[coordinatesY][coordinatesX] = 2
            return true;
        } else {
            this.coordinates[coordinatesY][coordinatesX] = 1
            return false
        }
        return this.coordinates;
    }


}

let game = new Gameboard(0)

module.exports = { Gameboard };