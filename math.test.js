const { sum, multiply } = require('./math'); 

describe('Math Functions', () => {
    test('sum of 2 and 3 should be 5', () => {
        expect(sum(2, 3)).toBe(5);
    });

    test('sum of -2 and -3 should be -5', () => {
        expect(sum(-2, -3)).toBe(-5);
    });

    test('sum of 0 and 5 should be 5', () => {
        expect(sum(0, 5)).toBe(5);
    });

    test('multiply 2 and 3 should be 6', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test('multiply -2 and 3 should be -6', () => {
        expect(multiply(-2, 3)).toBe(-6);
    });

    test('multiply 0 and 5 should be 0', () => {
        expect(multiply(0, 5)).toBe(0);
    });
});
