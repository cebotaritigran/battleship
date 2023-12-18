import { GameBoard } from "./gameboard";
import { Ship } from "./ship";

// doesn't have ai yet this is just player and his turn and 
let Player = (playerName) => {
    let playerN = playerName;
    let turn = true;
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
    let setTurn = (turnEntered) => {
        turn = turn;
    }

    let attack = (coordinate, enemy) => {
        // if player is ai then we will have him do some tricks againts us
        let aiAttack;
        // check turn, if turn is true then player attacks if false then ai attacks
        if (turn === true) {
            // if the previous attack missed or if there weren't any attacks at all
            // randomly attack a coordinate
            if (gameboard.hitMiss[gameboard.hitMiss.length - 1] === 2 || gameboard.hitMiss.length === 0) {

                aiAttack = Math.floor(Math.random() * 65);
                //checking if the ai randomly attacked already bombed tile
                if (previousAttacks.includes(aiAttack) == false) { // if it didn't just attack that title
                    previousAttacks.push(aiAttack);
                    enemy.gameboard.receiveAttack(aiAttack);
                    //new
                    //setTurn();

                    return enemy.gameboard.coordinates
                } else { // if it did then return an error
                    return "can't attack already attacked tile";
                }
            } else {
                // if hit then continue on attacking close tiles so that game is more challenging

                //aiAttack = previousAttacks[previousAttacks.length - 1] + 1
                // work in progress
                aiAttack = Math.floor(Math.random() * 65);
                enemy.gameboard.receiveAttack(aiAttack);
                //setTurn();
                return enemy.gameboard.coordinates
            }
        }
        //  else if (turn == true) {
        //     if (previousAttacks.includes(coordinate) == false) {
        //         previousAttacks.push(coordinate);
        //         enemy.gameboard.receiveAttack(coordinate);

        //         //setTurn();
        //         return enemy.gameboard.coordinates
        //     } else {
        //         return "can't attack already attacked tile";
        //     }
        // }
        else {  //if not then all the same
            return "can't attack its not your turn"
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