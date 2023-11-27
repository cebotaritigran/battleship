import { GameBoard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";

function createBoard() {
    let ships = [0, 10]
    const gridContainer = document.getElementsByClassName('gridContainer');
    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div')
        div.classList.add('gridBox');
        div.setAttribute("value", i)
        gridContainer[0].appendChild(div);
    }
    console.log("hey")
    document.body.style.backgroundColor = "white";
}

export { createBoard }