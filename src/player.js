import { GameBoard } from "./gameboard";
import { Ship } from "./ship";

// doesn't have ai yet this is just player and his turn and 
let Player = (playerName) => {
    const playerN = playerName;
    let turn = false;
    let enemyTurn = true;
    // to store previous attacks and not let them be repeated
    let previousAttacks = [];
    let gameboard = GameBoard([1, 9]);
    // let newShip = Ship(2, [0, 8])
    // gameboard.placeShip(newShip.shipPosition)

    // to check the turn, might be very useless funtion
    let checkTurn = () => {
        return turn;
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
        return gameboard.coordinates
    }

    return {
        turn,
        checkTurn,
        setTurn,
        attack,
        gameboard,
        previousAttacks,
        // newShip,
        playerN
    }
}

export { Player }