let Ship = (length, position) => {
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