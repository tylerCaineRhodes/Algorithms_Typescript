function subarraySort(array: number[]) {
  //init min and max number that is out of order
  let min = Infinity;
  let max = -Infinity;
  //iterate over the array
  for (let i = 0; i < array.length; i++) {
    if (isOutOfOrder(array, i)) {
      min = Math.min(min, array[i]);
      max = Math.max(max, array[i]);
    }
  }
  if (min === Infinity) {
    return [-1, -1];
  }
  let leftIndex = 0;
  while (min >= array[leftIndex]) {
    leftIndex++;
  }
  let rightIndex = array.length - 1;
  while (max <= array[rightIndex]) {
    rightIndex--;
  }
  return [leftIndex, rightIndex];
}

function isOutOfOrder(array: number[], i: number) {
  if (i === 0) return array[i] > array[i + 1];
  if (i === array.length - 1) return array[i] < array[i - 1];

  return array[i] > array[i + 1] || array[i] < array[i - 1];
}
