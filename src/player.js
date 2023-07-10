import { GameBoard } from "./gameboard";
import { Ship } from "./ship";

// doesn't have ai yet this is just player and his turn and 
let Player = (playerName) => {
    const playerN = playerName;
    const turn = false;
    // to store previous attacks and not let them be repeated
    const previousAttacks = [];
    let gameboard = GameBoard(4);
    // let newShip = Ship(2, [0, 8])
    // gameboard.placeShip(newShip.shipPosition)

    // to check the turn, might be very useless funtion
    let checkTurn = () => {
        return this.turn;
    }

    // set turn to false when player has played his turn 
    let setTurn = () => {
        if (turn === true) {
            turn = false;
        } else {
            turn = true;
        }
    }

    let attack = (coordinate) => {
        previousAttacks.push(coordinate);
        gameboard.receiveAttack(coordinate);
    }

    return {
        turn,
        checkTurn,
        setTurn,
        attack,
        gameboard,
        // newShip,
        playerN
    }
}

export { Player }