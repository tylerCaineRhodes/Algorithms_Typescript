export function selectionSort({ array }: { array: number[] }): number[] {
  if(!array.length) return [];

  for (let i = 0; i < array.length - 1; i++) {
    let smallestIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[smallestIndex] > array[j]) {
        smallestIndex = j;
      }
    }
    [array[smallestIndex], array[i]] = [array[i], array[smallestIndex]];
  }
  return array;
}
