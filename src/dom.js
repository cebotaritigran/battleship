import { GameBoard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";

function createBoardPlayerOne() {

    let tigrits = Player("tigrits")
    let destroyer = Ship(2, [0, 1])
    console.log(destroyer.shipPosition)
    let ships = [destroyer.shipPosition, [5, 15], [9, 29], [35, 45], [49, 69], [65, 75], [61, 62, 63], [81, 82, 83]]
    console.log(ships[0])

    const gridContainer = document.getElementsByClassName('gridContainer');

    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div')
        div.classList.add('gridBox');
        div.setAttribute("value", i)
        div.setAttribute("id", i)
        gridContainer[0].appendChild(div);
    }

    for (let k = 0; k < ships.length; k++) {
        const gridBox = document.getElementsByClassName('gridBox');

        for (let i = 0; i < ships[0].length; i++) {
            //gridBox[ships[0][i]].classList.add('ship')
            gridBox[ships[0][i]].classList.add('shipPart')
            //prints the ships on the grids (to be changed)

            // console.log(ships[k][i])
            // if (ships[k][i] == gridBox[i].getAttribute("value")) {
            //     console.log(ships[k][i])

            //     console.log("working")
            // }
            // gridBox[ships[k][i]].classList.add('shipPart')
        }
    }
    // let rotate = false;
    // gridContainer[0].addEventListener("click", () => {
    //     const ship = document.getElementsByClassName('gridBox');

    //     console.log(ship.length)

    //     for (let i = 0; i < 100; i++) {
    //         if (ships[0][i] == i)
    //             ship[i].addEventListener("click", () => {
    //                 let shipPosition = ship[i]
    //                 if (rotate == false) {
    //                     shipPosition.classList.remove('shipPart')
    //                     shipPosition.classList.add('shipPart')
    //                     rotate = true;
    //                 } else {
    //                     ship[i].classList.add('shipPart')

    //                     ship[i - 10].classList.remove('shipPart')

    //                     rotate = false;
    //                 }

    //             })
    //     }
    // })




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

export { createBoardPlayerOne }