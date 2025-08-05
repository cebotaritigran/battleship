const { destroyer  } = require('../src/ship');
test('ship gets hit', () => {
    expect(destroyer .hit()).toBe(1);
});

test('check if ship is sunk if only got hit once when ship lenght is 2', () => {
    expect(destroyer .isSunk()).toBe(false);
});

test('check if ship is sunk if ship got hit as much as its length', () => {
    expect(destroyer .hit()).toBe(2);
    expect(destroyer .isSunk()).toBe(true);
});