import "./styles.css";
const { Gameboard } = require('../src/gameboard');
const { Ship } = require('../src/ship');
const { Player } = require('../src/player');
const { checkObject } = require('../src/object');

console.log("test asd")

let gridContainer = document.querySelector(".grid-container")

let game = new Gameboard(0)
let destroyer = new Ship(2, "destroyer")
let player = new Player(game, "tigran", false)
game.placeShip(0, 0, destroyer.length, "horizontal", destroyer)

console.log(game.coordinates)
for (let i = 0; i < 10; i++) {
    for (let k = 0; k < 10; k++) {
        let gridBox = document.createElement("div");
        gridBox.classList.add("grid-box")
        gridContainer.appendChild(gridBox)
        console.log(i, k)
        if (game.coordinates[i][k] != undefined || game.coordinates[i][k] != null) {
            if (game.coordinates[i].some(checkObject)) {

                gridBox.classList.add("ship-box")
            }
        }

    }
}



