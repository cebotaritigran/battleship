import { GameBoard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";

// rotate is there for checking if the ship is vertical or horizontal
let rotate = false;
// creating player
let tigrits = Player("tigrits")
// creating ships and putting it in the ships array
let destroyer = Ship(2, [0, 10, 20, 30])
console.log(destroyer.shipPosition)
let ships = [destroyer.shipPosition, [4, 14], [9, 19], [35, 45], [49, 59], [65, 75], [61, 62, 63], [81, 82, 83]]

console.log(ships[0])
//getting elements to manipulate
const gridContainer = document.getElementsByClassName('gridContainer');
const gridBox = document.getElementsByClassName('gridBox');

//creating board
function createBoardPlayerOne() {

    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div')
        div.classList.add('gridBox');
        div.setAttribute("value", i)
        div.setAttribute("id", i)
        gridContainer[0].appendChild(div);
    }
    // putting ships on the board
    refreshBoard()
}

// function that adds ships to given tiles based by their coordinates
function refreshBoard() {
    for (let k = 0; k < ships.length; k++) {
        for (let i = 0; i < ships[k].length; i++) {
            gridBox[ships[k][i]].classList.add('shipPart')
            let shipPart = document.getElementsByClassName('shipPart');
            gridBox[ships[k][i]].addEventListener('click', () => {
                // whecn clicked we send the given ship to rotate ships function
                rotateShips(k, i);
                // we then reset the board because inside rotateShip we change coordinates of the ship and we need to refresh the board
                gridContainer[0].innerHTML = '';
                createBoardPlayerOne()
            })
            // silly stuff
            console.log("hey")
            document.body.style.backgroundColor = "white";
        }
    }
}

// functionn to rotate ships, get which ship and which part is clicked and then rotates the whole ship
function rotateShips(k, i) {
    console.log("hey")
    // checking each ships length
    for (let j = 0; j < ships.length; j++) {
        if(ships[j].includes())
    }
    if (ships[k].length == 4) {
        console.log(Number(ships[k][ships[k].length - 1]) + 1)
        // checking if the ship is on the edge if it is then we do not rotate it
        // because of the last tile on the row is always 9, 19, 29, I added +1 to them and ask for remainder if it is 0 then we do not rotate
        // the ship and it just doesn't do anything but if there is a remainder other than 0 then we rotate the ship
        if ((ships[k][i] + 1) % 10 !== 0) {
            // console.log(ships.includes(ships[k][ships[k].length - 1]))
            // let length = Number(ships[k][ships[k].length - 1])
            // console.log(length + 1)
            // console.log(ships[k + 1].includes(Number(length + 1)))
            if (rotate == false) {
                // making ship rotate horizontal
                // adding new tiles to the ships array as new ship position
                gridBox[ships[k][0] + 1].classList.add('shipPart');

                ships[k][1] = gridBox[ships[k][0] + 1].getAttribute("value")

                gridBox[ships[k][0] + 10].classList.remove('shipPart');
                gridBox[ships[k][0] + 2].classList.add('shipPart');

                ships[k][2] = gridBox[ships[k][0] + 2].getAttribute("value")

                gridBox[ships[k][0] + 20].classList.remove('shipPart');
                gridBox[ships[k][0] + 3].classList.add('shipPart');

                ships[k][3] = gridBox[ships[k][0] + 3].getAttribute("value")

                gridBox[ships[k][0] + 30].classList.remove('shipPart');

                rotate = true;

            } else {
                // making ship rotate verticale
                gridBox[ships[k][0] + 1].classList.remove('shipPart')
                gridBox[ships[k][0] + 10].classList.add('shipPart');

                ships[k][1] = gridBox[ships[k][0] + 10].getAttribute("value")

                gridBox[ships[k][0] + 2].classList.remove('shipPart');
                gridBox[ships[k][0] + 20].classList.add('shipPart');

                ships[k][2] = gridBox[ships[k][0] + 20].getAttribute("value")

                gridBox[ships[k][0] + 3].classList.remove('shipPart');
                gridBox[ships[k][0] + 30].classList.add('shipPart');

                ships[k][3] = gridBox[ships[k][0] + 30].getAttribute("value")


                rotate = false;
            }
        }
    } else if (ships[k].length == 3) {
        if ((ships[k][i] + 1) % 10 !== 0) {

            if (rotate == false) {
                gridBox[ships[k][0] + 1].classList.add('shipPart')
                console.log(gridBox[ships[k][0] + 1].getAttribute("value"))
                console.log(ships[k][1] = gridBox[ships[k][0] + 1].getAttribute("value"))
                console.log(ships[k][1])
                gridBox[ships[k][0] + 10].classList.remove('shipPart');
                gridBox[ships[k][0] + 2].classList.add('shipPart');
                console.log(gridBox[ships[k][0] + 1].getAttribute("value"))
                console.log(ships[k][2] = gridBox[ships[k][0] + 2].getAttribute("value"))
                console.log(ships[k][2])
                gridBox[ships[k][0] + 20].classList.remove('shipPart');
                rotate = true;
            } else {
                gridBox[ships[k][0] + 1].classList.remove('shipPart')
                gridBox[ships[k][0] + 10].classList.add('shipPart');
                console.log(gridBox[ships[k][0] + 10].getAttribute("value"))
                console.log(ships[k][1] = gridBox[ships[k][0] + 10].getAttribute("value"))
                console.log(ships[k][10])
                gridBox[ships[k][0] + 2].classList.remove('shipPart');
                gridBox[ships[k][0] + 20].classList.add('shipPart');
                console.log(gridBox[ships[k][0] + 20].getAttribute("value"))
                console.log(ships[k][2] = gridBox[ships[k][0] + 20].getAttribute("value"))
                console.log(ships[k][20])
                rotate = false;

            }
        }
    } else if (ships[k].length == 2) {
        console.log(ships[k][i] + 1 % 10 !== 0)
        if ((ships[k][i] + 1) % 10 !== 0) {
            console.log(ships[k][i] + 1)
            if (rotate == false) {
                gridBox[ships[k][0] + 1].classList.add('shipPart')
                console.log(gridBox[ships[k][0] + 1].getAttribute("value"))
                console.log(ships[k][1] = gridBox[ships[k][0] + 1].getAttribute("value"))
                console.log(ships[k][1])
                gridBox[ships[k][0] + 10].classList.remove('shipPart');
                rotate = true;
            } else {
                gridBox[ships[k][0] + 1].classList.remove('shipPart')
                gridBox[ships[k][0] + 10].classList.add('shipPart');
                console.log(gridBox[ships[k][0] + 10].getAttribute("value"))
                console.log(ships[k][1] = gridBox[ships[k][0] + 10].getAttribute("value"))
                console.log(ships[k][10])
                rotate = false;
            }
        }
    }

}

export { createBoardPlayerOne }