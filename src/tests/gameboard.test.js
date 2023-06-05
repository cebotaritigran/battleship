import { GameBoard } from "../gameboard";

test('has length', () => {
    let board = GameBoard(4);
    expect(board.coordinates).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
});