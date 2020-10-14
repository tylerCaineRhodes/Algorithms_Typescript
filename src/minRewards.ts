//O(n^2) solution
function minRewards(scores: number[]): number {
  const rewards = scores.map((num) => 1);
  for (let i = 1; i < scores.length; i++) {
    let j = i - 1;
    if (scores[i] > scores[j]) {
      rewards[i] = rewards[j] + 1;
    } else {
      while (j >= 0 && scores[j] > scores[j + 1]) {
        rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
        j -= 1;
      }
    }
  }
  return rewards.reduce((a, b) => a + b, 0);
}


function minRewardsII(scores: number[]): number {
  const rewards = scores.map((val) => 1);
  let localMins = getLocalMins(scores);
  for (const index of localMins) {
    expandFromLocalMinIndex(index, scores, rewards);
  }
  return rewards.reduce((a, b) => a + b);
}

function expandFromLocalMinIndex(index: number, scores: number[], rewards: number[]): void {
  let leftIndex = index - 1;
  while (leftIndex >= 0 && scores[leftIndex] > scores[leftIndex + 1]) {
    rewards[leftIndex] = Math.max(
      rewards[leftIndex],
      rewards[leftIndex + 1] + 1
    );
    leftIndex--;
  }
  let rightIndex = index + 1;
  while (
    rightIndex < scores.length &&
    scores[rightIndex] > scores[rightIndex - 1]
  ) {
    rewards[rightIndex] = rewards[rightIndex - 1] + 1;
    rightIndex++;
  }
}

function getLocalMins(array: number[]): number[] {
  if (array.length === 1) {
    return [0];
  }
  let localMins = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0 && array[i] < array[i + 1]) {
      localMins.push(i);
    }
    if (i === array.length - 1 && array[i] < array[i - 1]) {
      localMins.push(i);
    }
    if (i === 0 || i === array.length - 1) {
      continue;
    }
    if (array[i] < array[i + 1] && array[i] < array[i - 1]) {
      localMins.push(i);
    }
  }
  return localMins;
}

//O(n) solution
function minRewardsIII(scores: number[]): number {
  const rewards = scores.map((val) => 1);
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) {
      rewards[i] = rewards[i - 1] + 1;
    }
  }
  for (let i = scores.length - 2; i >= 0; i--) {
    if (scores[i] > scores[i + 1]) {
      rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
    }
  }
  return rewards.reduce((a, b) => a + b);
}
