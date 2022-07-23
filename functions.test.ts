const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('test random', () => {
        const testArray = [4, 7, 2, 9, 0];
        expect(testArray).not.toBe([4, 7, 2, 9, 0]);
    });

    test('copied array', () => {
        const array = [4, 7, 2, 9, 0]
        expect(array).toEqual(array);
    })
})