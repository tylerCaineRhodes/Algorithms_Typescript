const { floodFill } = require('../src/floodfill.ts');

describe('floodFill', () => {
  it('should recursively change anything that has original value that is surrounding coordinates', () => {
    expect(
      floodFill(
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ],
        1,
        1,
        2
      )
    ).toStrictEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ]);
  });
});
