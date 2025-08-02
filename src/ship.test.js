const Ship = require('./ship');

test('ship gets hit', () => {
    expect(Ship.hit()).toBe(1);
});

test('check if ship is sunk if only got hit once when ship lenght is 2', () => {
    expect(Ship.isSunk()).toBe(false);
});

test('check if ship is sunk if ship got hit as much as its length', () => {
    expect(Ship.hit()).toBe(2);
    expect(Ship.isSunk()).toBe(true);
});