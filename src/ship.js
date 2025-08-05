

class Ship {
    constructor(length, shipName, numberOfHits, sunk) {
        this.length = length;
        this.shipName = shipName
        this.numberOfHits = 0;
        this.sunk = false;

    }

    hit() {
        this.numberOfHits += 1;
        console.log(this.numberOfHits)
        return this.numberOfHits;
    }
    isSunk() {
        if (this.length <= this.numberOfHits) {
            this.sunk = true;
            return true;
        }
        else {
            return false;
        }
    }
    showHits() {
        return this.numberOfHits;
    }
}

let destroyer = new Ship(2)

module.exports = { destroyer, Ship };