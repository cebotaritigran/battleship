let Ship = (l) => {
    let shipLength = l
    let hit = 0
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
    return { shipLength, hitNumber, isSunk }
}

export { Ship }