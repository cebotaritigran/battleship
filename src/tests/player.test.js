import { GameBoard } from "../gameboard";
import { Ship } from "../ship";
import { Player } from "../player";

test('player 1 has his gameboard', () => {
    let tigrits = Player("tigrits");
    expect(tigrits.gameboard.coordinates).toStrictEqual([
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ]);
});

test('player 1 has his gameboard', () => {
    let tigrits = Player("tigrits");
    let ai = Player("ai");
    expect(ai.gameboard.coordinates).toStrictEqual([
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ]);
});

test('check player1s turn', () => {
    let tigrits = Player("tigrits");
    expect(tigrits.checkTurn()).toStrictEqual(false);
});

test('player1 placeship on the board', () => {
    let tigrits = Player("tigrits");
    let ai = Player("ai");
    let destroyer = Ship(2, [0, 8])
    expect(tigrits.gameboard.placeShip(destroyer.shipPosition)).toStrictEqual([
        1, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ]);
});

test('player1 and player2 placeship on the board on different spots', () => {
    let tigrits = Player("tigrits");
    let destroyer = Ship(2, [0, 8])
    expect(tigrits.gameboard.placeShip(destroyer.shipPosition)).toStrictEqual([
        1, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ]);

    let ai = Player("ai");
    let destroyerPlayerTwo = Ship(2, [17, 18])
    expect(ai.gameboard.placeShip(destroyerPlayerTwo.shipPosition)).toStrictEqual([
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ]);
});

test('player1 attacks player2 hits first attack and misses the second', () => {
    let tigrits = Player("tigrits");
    let destroyer = Ship(2, [0, 8])
    expect(tigrits.gameboard.placeShip(destroyer.shipPosition)).toStrictEqual([
        1, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ]);


    let ai = Player("ai");
    let destroyerPlayerTwo = Ship(2, [17, 18])
    ai.gameboard.placeShip(destroyerPlayerTwo.shipPosition)
    expect(ai.attack(17)).toStrictEqual([
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 3, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ]);

    //checking if attacked coordinated is in previousattacks array
    console.log(ai.previousAttacks)
    expect(ai.gameboard.receiveAttack(16)).toStrictEqual([
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        2, 3, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ]);
});


//check if players can attack same tile twice (they shouldn't)
test('player1 attacks player2 attacks same tile, should give an error message', () => {
    let tigrits = Player("tigrits");
    let destroyer = Ship(2, [0, 8])
    expect(tigrits.gameboard.placeShip(destroyer.shipPosition)).toStrictEqual([
        1, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ]);


    let ai = Player("ai");
    let destroyerPlayerTwo = Ship(2, [17, 18])
    ai.gameboard.placeShip(destroyerPlayerTwo.shipPosition)
    expect(ai.attack(17)).toStrictEqual([
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 3, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ]);

    //checking if attacked coordinated is in previousattacks array
    console.log(ai.previousAttacks)
    expect(ai.attack(17)).toStrictEqual(
        "can't attack already attacked tile"
    );

    //checking if attacked coordinated is in previousattacks array
    console.log(ai.previousAttacks)
    expect(ai.attack(17)).toStrictEqual(
        "can't attack already attacked tile"
    );
});

//if player 2 is ai, after first attack which will be random if hits it should continue to attack tiles nearby
// basicly ai
test('if player 2 is ai, after first attack which will be random if hits it should continue to attack tiles nearby', () => {

});