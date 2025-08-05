const { destroyer, Ship } = require('../src/ship');
class Gameboard {
    constructor(missedAttacks, coordinates) {
        this.missedAttacks = missedAttacks;
        this.allShipsSunk = false;
        this.coordinates = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ]
    }

    checkShipsSunk() {
        // for (let i = 0; i < 10; i++) {
        //     for (let k = 0; k < 10; k++) {

        //     }
        // }
        if (!this.coordinates.includes(Object, 0)) {
            this.allShipsSunk = true;
            // } else {
            //     this.allShipsSunk = true;
            // }
        }
        console.log(this.coordinates)
        return this.allShipsSunk;
    }

    placeShip(coordinatesY, coordinatesX, length, line, ship) {

        this.coordinates[coordinatesY][coordinatesX] = ship
        if (line == "verticle") {
            for (let i = 0; i < length; i++) {
                this.coordinates[coordinatesY + i][coordinatesX] = ship
            }
        } else if (line == "horizontal") {
            for (let i = 0; i < length; i++) {
                this.coordinates[coordinatesY][coordinatesX + i] = ship
            }
        }

        return this.coordinates;
    }

    receiveAttack(coordinatesY, coordinatesX) {

        if (this.coordinates[coordinatesY][coordinatesX] == undefined) {
            this.coordinates[coordinatesY][coordinatesX] = 1
        } else if (this.coordinates[coordinatesY][coordinatesX]) {
            this.coordinates[coordinatesY][coordinatesX].hit();
            this.coordinates[coordinatesY][coordinatesX] = 2
        }
        return this.coordinates;
    }


}

let game = new Gameboard(0)

module.exports = { game };