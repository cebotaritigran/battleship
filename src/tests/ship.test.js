import { Ship } from "../ship";

test('has length', () => {
    let ship1 = Ship(4);
    expect(ship1.shipLength).toBe(4);
});

test('ship hit', () => {
    let ship1 = Ship(4);
    expect(ship1.hitNumber()).toBe(1);
});

test('ship sunk', () => {
    let ship1 = Ship(4);
    ship1.hitNumber();
    ship1.hitNumber();
    ship1.hitNumber();
    ship1.hitNumber();
    expect(ship1.isSunk()).toBe(true);
});

test('ship is not sunk', () => {
    let ship1 = Ship(4);
    ship1.hitNumber();
    ship1.hitNumber();
    ship1.hitNumber();
    expect(ship1.isSunk()).toBe(false);
});

test('ship is not sunk', () => {
    let ship1 = Ship(4);
    ship1.hitNumber();
    ship1.hitNumber();
    ship1.hitNumber();
    ship1.hitNumber();
    ship1.hitNumber();
    expect(ship1.isSunk()).toBe(true);
});