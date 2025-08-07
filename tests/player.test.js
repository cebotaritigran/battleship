const { Gameboard } = require('../src/gameboard');
const { destroyer, Ship } = require('../src/ship');
const { Player } = require('../src/player');

test('retrieve gameboard of player', () => {
    let game = new Gameboard(0)
    let destroyer = new Ship(2, "destroyer")
    let player = new Player(game, "tigran", false)
    game.placeShip(0, 0, destroyer.length, "horizontal", destroyer)

    expect(player.checkGameBoard()).toStrictEqual([
        [destroyer, destroyer],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ])
});