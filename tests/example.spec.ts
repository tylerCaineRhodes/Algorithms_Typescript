const { exampleFunc } = require ('../src/example.ts');

describe('exampleFunc', () => {
  it('returns true if colinear', () => {
   expect(exampleFunc('hello')).toBe('hello');
  });
});
