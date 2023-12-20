import { GameBoard } from "../gameboard";
import { Ship } from "../ship";
import { Player } from "../player";

//TEST-1
test('test-1 player 1 has his gameboard', () => {
    let tigrits = Player("tigrits");
    expect(tigrits.gameboard.coordinates).toStrictEqual([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]);
});

//TEST-2
test('test-2 player 2 has his gameboard', () => {
    let tigrits = Player("tigrits");
    let ai = Player("ai");
    expect(ai.gameboard.coordinates).toStrictEqual([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]);
});

//TEST-3
test('test-3 check player1s turn and check after setTurn function', () => {
    let tigrits = Player("tigrits");
    expect(tigrits.checkTurn()).toStrictEqual(true);

    expect(tigrits.setTurn()).toStrictEqual(false);

    expect(tigrits.setTurn()).toStrictEqual(true);


});


//TEST-4
test('test-4 player1 placeship on the board same ship ai places on the board', () => {
    let tigrits = Player("tigrits");
    let ai = Player("ai");
    let destroyer = Ship(2, [0, 10])
    expect(tigrits.gameboard.placeShip(destroyer.shipPosition)).toStrictEqual([
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]);

    expect(ai.gameboard.placeShip(destroyer.shipPosition)).toStrictEqual([
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]);
});


//TEST-5
test('test-5 player1 and player2 placeship on the board on different spots', () => {
    let tigrits = Player("tigrits");
    let destroyer = Ship(2, [0, 10])
    expect(tigrits.gameboard.placeShip(destroyer.shipPosition)).toStrictEqual([
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]);

    let ai = Player("ai");
    let destroyerPlayerTwo = Ship(2, [21, 22])
    expect(ai.gameboard.placeShip(destroyerPlayerTwo.shipPosition)).toStrictEqual([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]);
});


//TEST-6
test('test-6 player1 attacks player2 then player2 attacks player1', () => {
    let tigrits = Player("tigrits");
    let destroyer = Ship(2, [0, 1])
    expect(tigrits.gameboard.placeShip(destroyer.shipPosition)).toStrictEqual([
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]);

    let ai = Player("fakeai");
    let destroyerPlayerTwo = Ship(2, [21, 22])
    ai.gameboard.placeShip(destroyerPlayerTwo.shipPosition)
    let attackCoordinate = "0";
    expect(ai.attack(attackCoordinate, tigrits)).toStrictEqual([
        3, 1, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]);
});



//TEST-7
//check if players can attack same tile twice (they shouldn't)
// test('test-7 player1 attacks player2 attacks same tile, should give an error message', () => {
//     let tigrits = Player("tigrits");
//     let destroyer = Ship(2, [0, 10])
//     expect(tigrits.gameboard.placeShip(destroyer.shipPosition)).toStrictEqual([
//         1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0
//     ]);


//     let ai = Player("ai");
//     let destroyerPlayerTwo = Ship(2, [21, 22])
//     ai.gameboard.placeShip(destroyerPlayerTwo.shipPosition)
//     expect(tigrits.attack(21, ai)).toStrictEqual([
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 3, 1, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0
//     ]);
//     //17.12
//     tigrits.turn = false;
//     //checking if attacked coordinated is in previousattacks array
//     //console.log(ai.previousAttacks)
//     expect(tigrits.attack(21, ai)).toStrictEqual(
//         "can't attack already attacked tile"
//     );
//     ai.attack(21, tigrits)
//     //checking if attacked coordinated is in previousattacks array
//     //console.log(ai.previousAttacks)
//     expect(tigrits.attack(21, ai)).toStrictEqual(
//         "can't attack already attacked tile"
//     );
// });


//TEST-8
//if player 2 is ai, after first attack which will be random if hits it should continue to attack
//15.12
// test('test-8 if players take turn correctly, should be player1 go first then player2 then player1', () => {
//     let tigrits = Player("tigrits");
//     let destroyer = Ship(2, [0, 8]);
//     tigrits.gameboard.placeShip(destroyer.shipPosition)
//     let ai = Player("ai");
//     let destroyerPlayerTwo = Ship(2, [21, 22])
//     ai.gameboard.placeShip(destroyerPlayerTwo.shipPosition)
//     expect(ai.attack(21, tigrits)).toStrictEqual(
//         "can't attack its not your turn"
//     );
//     expect(tigrits.attack(21, ai)).toStrictEqual(
//         [
//             0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 3, 1, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 0, 0, 0
//         ]
//     );

//     expect(ai.attack(21, tigrits)).toStrictEqual(
//         "can't attack its not your turn"
//     );

// });

//TEST 9
// check if the players turn is swaping correctly
// test('checks if the players turn and the after attack checks the players turn', () => {
//     let tigrits = Player("tigrits");
//     let destroyer = Ship(2, [0, 10]);
//     tigrits.gameboard.placeShip(destroyer.shipPosition)
//     let ai = Player("ai");
//     let destroyerPlayerTwo = Ship(2, [21, 22])
//     ai.gameboard.placeShip(destroyerPlayerTwo.shipPosition)

//     expect(ai.gameboard.receiveAttack(21)).toStrictEqual([
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 3, 1, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0
//     ]);
//     //testing
//     console.log(ai.attack(21))
//     console.log(tigrits.attack(22))

//     expect(tigrits.attack(23)).toStrictEqual([
//         1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0
//     ]);
// });