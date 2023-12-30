import { GameBoard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";

function createBoard() {
    let ships = [0, 10]
    const gridContainer = document.getElementsByClassName('gridContainer');
    for (let k = 0; k < 100; k++) {
        for (let i = 0; i < 100; i++) {
            if (k < 1) {
                const div = document.createElement('div')
                div.classList.add('gridBox');
                div.setAttribute("value", i)
                gridContainer[0].appendChild(div);
            }
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