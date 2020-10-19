function maxSumIncreasingSubsequence(array: number[]): (number | number[])[] {
  const sequences: (number | undefined)[] = array.map((arr) => undefined);
  const sums = array.slice();
  let maxSumIdx = 0

  for(let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    for(let j = 0; j < i; j++) {
      const otherNum = array[j];
      if(otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
        sums[i] = sums[j] + currentNum;
        sequences[i] = j;
      }
    }
    if (sums[i] > sums[maxSumIdx]) {
      maxSumIdx = i;
    }
  }
  return [sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)]  
}

function buildSequence(array: number[], sequences: (number| undefined)[], currentIdx: number | undefined): number[] {
  const sequence = [];
  while(currentIdx !== undefined) {
    sequence.push(array[currentIdx])
    currentIdx = sequences[currentIdx]
  }
  return sequence.reverse();
}
