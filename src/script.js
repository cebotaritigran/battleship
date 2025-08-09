import "./styles.css";
const { Gameboard } = require('../src/gameboard');
const { destroyer, Ship } = require('../src/ship');
const { Player } = require('../src/player');

console.log("test asd")

let gridContainer = document.querySelector(".grid-container")
let playerOne = new Player("tigran");

for (let i = 0; i < 10; i++) {
    for (let k = 0; k < 10; k++) {
        let gridBox = document.createElement("div");
        gridBox.classList.add("grid-box")
        gridContainer.appendChild(gridBox)
    }
}



