import { GameBoard } from "./gameboard";
import { Ship } from "./ship";

// doesn't have ai yet this is just player and his turn and 
let Player = (playerName) => {
    let playerN = playerName;
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
        // if player is ai then we will have him do some tricks againts us
        if (playerN === "ai") {
            // the start of corner cases
            //random attack
            let aiAttack = Math.floor(Math.random() * 65);

            if (previousAttacks.includes(aiAttack) == false) {
                console.log(previousAttacks.includes(aiAttack))
                previousAttacks.push(aiAttack);
                gameboard.receiveAttack(aiAttack);
                return gameboard.coordinates
            } else {
                return "can't attack already attacked tile";
            }
        } else {  //if not then all the same
            if (previousAttacks.includes(coordinate) == false) {
                console.log(previousAttacks.includes(coordinate))
                previousAttacks.push(coordinate);
                gameboard.receiveAttack(coordinate);
                return gameboard.coordinates
            } else {
                return "can't attack already attacked tile";
            }
        }

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