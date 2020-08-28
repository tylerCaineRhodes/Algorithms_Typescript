export interface Test {
  matrix: number[][];
  target: number;
}

export const searchInSortedMatrix = ({ matrix, target }: Test): number[] => {
  let rowPointer = 0;
  let colPointer = matrix[0].length - 1;

  while (rowPointer < matrix.length && colPointer >= 0) {
    if (matrix[rowPointer][colPointer] < target) {
      rowPointer++;
    } else if (matrix[rowPointer][colPointer] > target) {
      colPointer--;
    } else {
      return [rowPointer, colPointer];
    }
  }
  return [-1, -1];
};

export const searchInSortedMatrixNoInterface = ({ matrix, target }: { matrix: number[][], target: number }): number[] => {
  let rowPointer = 0;
  let colPointer = matrix[0].length - 1;

  while (rowPointer < matrix.length && colPointer >= 0) {
    if (matrix[rowPointer][colPointer] < target) {
      rowPointer++;
    } else if (matrix[rowPointer][colPointer] > target) {
      colPointer--;
    } else {
      return [rowPointer, colPointer];
    }
  }
  return [-1, -1];
};
