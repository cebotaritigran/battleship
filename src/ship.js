function sum(a, b) {
    return a + b;
}

class Ship {
    constructor(length, numberOfHits, sunk) {
        this.length = length;
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
}

let destroyer = new Ship(2)

module.exports = destroyer;