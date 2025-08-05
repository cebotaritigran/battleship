const { game } = require('../src/gameboard');
const { destroyer, Ship } = require('../src/ship');

test('game board placing ship', () => {
    let destroyer = new Ship(5, "destroyer")
    expect(game.placeShip(0, 0, destroyer.length, "horizontal", destroyer)).toStrictEqual([
        [destroyer, destroyer, destroyer, destroyer, destroyer],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]);
});

test('ship gets attacked', () => {
    let destroyer = new Ship(5, "destroyer")
    game.placeShip(0, 0, destroyer.length, "horizontal", destroyer)
    expect(game.receiveAttack(0, 0)).toStrictEqual([
        [2, destroyer, destroyer, destroyer, destroyer],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]);
    expect(destroyer.showHits()).toStrictEqual(1);
});

test('ship gets attacked but misses', () => {
    let destroyer = new Ship(5, "destroyer")
    game.placeShip(0, 0, destroyer.length, "horizontal", destroyer)
    expect(game.receiveAttack(6, 6)).toStrictEqual([
        [destroyer, destroyer, destroyer, destroyer, destroyer],
        [],
        [],
        [],
        [],
        [],
        [, , , , , , 1,],
        [],
        [],
        []
    ]);
});

test('ship gets attacked and every ship sinks', () => {
    let destroyer = new Ship(1, "destroyer")
    game.placeShip(0, 0, destroyer.length, "horizontal", destroyer)
    game.receiveAttack(0, 0)
    expect(game.checkShipsSunk()).toStrictEqual(true);
});
