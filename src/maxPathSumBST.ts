interface BST {
  value: number,
  left: BST | null,
  right: BST | null
}

function maxPathSum(tree: BST | null): number {
  const [branchSum, maxSum] = findMaxPath(tree);
  return maxSum;
}

function findMaxPath(tree: BST | null): number[] {
  //if there is no tree, return [0, -Infinity]
  if (!tree) return [0, -Infinity];
  //initialize current max branchsums and max triangleSums for left and right
  const [maxLeftBranch, maxLeftTriangle] = findMaxPath(tree.left);
  const [maxRightBranch, maxRightTriangle] = findMaxPath(tree.right);
  //get max branch sum for curr
  const val = tree.value;
  const maxChildBranch = Math.max(maxLeftBranch, maxRightBranch);
  const maxCurrBranch = Math.max(maxChildBranch + val, val);
  //gt curr Triangle sum
  const currTriangle = Math.max(
    maxLeftBranch + maxRightBranch + val,
    maxCurrBranch
  );
  const maxPathSum = Math.max(currTriangle, maxLeftTriangle, maxRightTriangle);
  //get maxTriangle sum for curr
  return [maxCurrBranch, maxPathSum];
  //return maxBranchSums and currMaxTriangle
}
