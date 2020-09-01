import { selectionSort } from '../src/selectionSort';

const test1 = {
  array: [8, 5, 2, 9, 5, 6, 3]
};
const test2 = {
  array: [1]
};
const test3 = {
  array: [1, 2]
};
const test4 = {
  array: [2, 1]
};
const test5 = {
  array: [1, 3, 2]
};
const test6 = {
  array: [3, 1, 2]
};
const test7 = {
  array: [1, 2, 3]
};
const test8 = {
  array: [ -4, 5, 10, 8,-10, -6, -4,-2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8 ]
};
const test9 = {
  array: [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]
};
const test10 = {
  array: [8, -6, 7, 10, 8, -1, 6, 2, 4, -5, 1, 10, 8, -10, -9, -10, 8, 9, -2, 7, -2, 4]
};
const test11 = {
  array: []
}

describe('selection sort', () => {
  it('sorts an array of values', () => {
    expect(selectionSort(test1)).toStrictEqual([2, 3, 5, 5, 6, 8, 9]);
    expect(selectionSort(test3)).toStrictEqual([1, 2]);
    expect(selectionSort(test4)).toStrictEqual([1, 2]);
    expect(selectionSort(test5)).toStrictEqual([1, 2, 3]);
    expect(selectionSort(test6)).toStrictEqual([1, 2, 3]);
    expect(selectionSort(test7)).toStrictEqual([1, 2, 3]);
    expect(selectionSort(test8)).toStrictEqual([-10,-7,-7,-6,-6,-5,-5,-4,-4,-4,-2,-1,1,3,5,5,6,8,8,10]);
    expect(selectionSort(test9)).toStrictEqual([-10,-10,-9,-7,-7,-6,-5,-2,2,2,3,3,4,5,8,8,9,10]);
    expect(selectionSort(test10)).toStrictEqual([-10,-10,-9,-6,-5,-2,-2,-1,1,2,4,4,6,7,7,8,8,8,8,9,10,10]);
  });

  it('handles arrays with a length of 0 or 1 ', () => {
    expect(selectionSort(test11)).toStrictEqual([]);
    expect(selectionSort(test2)).toStrictEqual([1]);
  });
})
