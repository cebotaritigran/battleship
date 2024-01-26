import { GameBoard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";

function createBoardPlayerOne() {
    let tigrits = Player("tigrits")
    let destroyer = Ship(2, [0, 10, 20, 30])
    console.log(destroyer.shipPosition)
    let ships = [destroyer.shipPosition, [4, 14], [9, 29], [35, 45], [49, 69], [65, 75], [61, 62, 63], [81, 82, 83]]
    console.log(ships[0])

    const gridContainer = document.getElementsByClassName('gridContainer');

    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div')
        div.classList.add('gridBox');
        div.setAttribute("value", i)
        div.setAttribute("id", i)
        gridContainer[0].appendChild(div);
    }
    const gridBox = document.getElementsByClassName('gridBox');
    for (let k = 0; k < ships.length; k++) {


        for (let i = 0; i < ships[k].length; i++) {

            gridBox[ships[k][i]].classList.add('shipPart')
            gridBox[ships[k][i]].classList.add('ship')

            let shipPart = document.getElementsByClassName('shipPart');
            let rotate = false;
            gridBox[ships[k][i]].addEventListener('click', () => {
                console.log("hey")
                if (ships[k].length == 4) {
                    if ((ships[k][i] + 1) % 10 !== 0) {
                        console.log((ships[k][i] + 1) / 10)
                        if (rotate == false) {
                            gridBox[ships[k][i] + 1].classList.add('shipPart')
                            gridBox[ships[k][i] + 10].classList.remove('shipPart');
                            gridBox[ships[k][i] + 2].classList.add('shipPart');
                            gridBox[ships[k][i] + 20].classList.remove('shipPart');
                            gridBox[ships[k][i] + 3].classList.add('shipPart');
                            gridBox[ships[k][i] + 30].classList.remove('shipPart');
                            rotate = true;
                        } else {
                            gridBox[ships[k][i] + 1].classList.remove('shipPart')
                            gridBox[ships[k][i] + 10].classList.add('shipPart');
                            gridBox[ships[k][i] + 2].classList.remove('shipPart');
                            gridBox[ships[k][i] + 20].classList.add('shipPart');
                            gridBox[ships[k][i] + 3].classList.remove('shipPart');
                            gridBox[ships[k][i] + 30].classList.add('shipPart');
                            rotate = false;

                        }
                    }
                } else if (ships[k].length == 3) {
                    if ((ships[k][i] + 1) % 10 !== 0) {
                        console.log((ships[k][i] + 1) / 10)
                        if (rotate == false) {
                            gridBox[ships[k][i] + 1].classList.add('shipPart')
                            gridBox[ships[k][i] + 10].classList.remove('shipPart');
                            gridBox[ships[k][i] + 2].classList.add('shipPart');
                            gridBox[ships[k][i] + 20].classList.remove('shipPart');
                            rotate = true;
                        } else {
                            gridBox[ships[k][i] + 1].classList.remove('shipPart')
                            gridBox[ships[k][i] + 10].classList.add('shipPart');
                            gridBox[ships[k][i] + 2].classList.remove('shipPart');
                            gridBox[ships[k][i] + 20].classList.add('shipPart');
                            rotate = false;

                        }
                    }
                } else if (ships[k].length == 2) {
                    if ((ships[k][i] + 1) % 10 !== 0) {
                        console.log((ships[k][i] + 1) / 10)
                        if (rotate == false) {
                            gridBox[ships[k][i] + 1].classList.add('shipPart')
                            gridBox[ships[k][i] + 10].classList.remove('shipPart');
                            rotate = true;
                        } else {
                            gridBox[ships[k][i] + 1].classList.remove('shipPart')
                            gridBox[ships[k][i] + 10].classList.add('shipPart');
                            rotate = false;
                        }
                    }
                }
            })

        }
    }

    console.log("hey")
    document.body.style.backgroundColor = "white";
}

export { createBoardPlayerOne }