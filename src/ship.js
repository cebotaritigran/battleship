let Ship = (length, position) => {
    // we need ship length so that we can check if the ship is sunk by
    // using a simple condition on how much hit has the ship took and if its
    // equal to the ship's length then ship has sunk
    let shipLength = length
    let hit = 0
    // write function to place ship
    let shipPosition = position
    console.log(shipLength)
    let isSunk = () => {
        if (hit == shipLength) {
            return true
        } else {
            return false
        }
    }
    let hitNumber = () => {
        hit++;
        console.log(hit)
        return hit;
    }
    return { shipLength, hitNumber, isSunk, shipPosition }
}

export { Ship }