export const longestPeak = (array: number[]): number => {
  let maxPeak = 0;

  for (let i = 1; i < array.length - 1; i++) {
    const isPeak: boolean = array[i - 1] < array[i] && array[i] > array[i + 1];
    if (isPeak) {
      let currLen = 3;
      let p1 = i - 1;
      let p2 = i + 1;

      while (p1) {
        if (array[p1 - 1] < array[p1]) {
          currLen++;
          p1 -= 1;
        } else {
          break;
        }
      }

      while (p2) {
        if (array[p2 + 1] < array[p2]) {
          currLen++;
          p2 += 1;
        } else {
          break;
        }
      }
      maxPeak = Math.max(maxPeak, currLen);
    }
  }
  return maxPeak;
}
