let Player = (playerName) => {
    const playerName = playerName;
    const turn = false;

    let checkTurn = () => {
        return this.turn;
    }

    let setTurn = () => {
        turn = true;
    }

    return {
        turn,
        checkTurn,
        setTurn
    }

}

export { Player }