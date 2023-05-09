import { Ship } from "../ship";

test('has length', () => {
    let ship1 = Ship(4);
    expect(ship1.shipLength).toBe(4);
});