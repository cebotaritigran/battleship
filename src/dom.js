import { GameBoard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";

function createBoard() {
    let ships = [0, 10, 20, 30, 5, 15, 9, 29, 35, 45, 49, 69, 65, 75, 61, 62, 63, 81, 82, 83]
    const gridContainer = document.getElementsByClassName('gridContainer');
    for (let k = 0; k < 100; k++) {
        for (let i = 0; i < 100; i++) {
            if (k < 1) { // only once prints the grids on container
                const div = document.createElement('div')
                div.classList.add('gridBox');
                div.setAttribute("value", i)
                gridContainer[0].appendChild(div);
            }
            //prints the ships on the grids (to be changed)
            const gridBox = document.getElementsByClassName('gridBox');
            if (ships[k] == gridBox[i].getAttribute("value")) {
                gridBox[i].classList.add('ship')
                console.log("working")
            }
        }
    }

    // const gridBox = document.getElementsByClassName('gridBox');
    // for (let i = 0; i < 100; i++) {
    //     for (let k = 0; k < 100; k++) {
    //         if (ships[i] == gridBox[k].getAttribute("value")) {
    //             gridBox[k].classList.add('ship');
    //         }
    //     }

    // }
    console.log("hey")
    document.body.style.backgroundColor = "white";
}

export { createBoard }