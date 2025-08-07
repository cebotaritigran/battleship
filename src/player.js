const { Gameboard } = require("./gameboard");

class Player {
    constructor(gmaeBoard, playerName, turn) {
        this.gmaeBoard = gmaeBoard;
        this.playerName = playerName
        this.turn;
    }
    checkGameBoard(){
        return this.gmaeBoard.coordinates;
    }
}

module.exports = { Player };