function sameBsts(arrayOne: number[], arrayTwo: number[]): boolean {
  //base case if arrayOne and arrayTwo aren't the same length or the frst elem isnt equal, return false
  if (arrayOne.length !== arrayTwo.length || arrayOne[0] !== arrayTwo[0])
    return false;
  //if array1 and array2 don't ahve a length at all, return true
  if (arrayOne.length === 0 && arrayTwo.length === 0) return true;
  //recursive case
  //init left and right arrays
  let left_1 = [],
    right_1 = [],
    left_2 = [],
    right_2 = [];
  //loop through and collect smaller and greater arrays for each array
  for (let i = 1; i < arrayOne.length; i++) {
    if (arrayOne[0] > arrayOne[i]) {
      left_1.push(arrayOne[i]);
    } else {
      right_1.push(arrayOne[i]);
    }

    if (arrayTwo[0] > arrayTwo[i]) {
      left_2.push(arrayTwo[i]);
    } else {
      right_2.push(arrayTwo[i]);
    }
  }
  let leftIsValid = sameBsts(left_1, left_2);
  let rightIsValid = sameBsts(right_1, right_2);
  //check if lengths and index 0 of both match
  //return recursive call on left && recursive call on right
  return leftIsValid && rightIsValid;
}
