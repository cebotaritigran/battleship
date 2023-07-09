// doesn't have ai yet this is just player and his turn and 
let Player = (playerName) => {
    const playerName = playerName;
    const turn = false;

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

    return {
        turn,
        checkTurn,
        setTurn
    }
}

export { Player }