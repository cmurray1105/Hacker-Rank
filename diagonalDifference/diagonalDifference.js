
// Input: arr:: an array of arrays that form a matrix
// Output: the absolute diagonal difference
// Constraints: nxn matrix, n will always be between -100 and 100
function diagonalDifference(arr) {
  // create a majorDiagonalSum variable and a minorDiagonalSum variable
  let majorDiagonalSum = 0;
  let minorDiagonalSum = 0;
  // create a loop to iterate through the diagonal
  for (let i = 0; i < arr.length; i++){
    let minorIndex = arr.length-1-i;
  // add the two sums
  console.log(arr[i][i])
  majorDiagonalSum += arr[i][i];
  minorDiagonalSum += arr[i][minorIndex];
  // return Math.abs(major-minor)
  }
  console.log(majorDiagonalSum, minorDiagonalSum)
  return Math.abs(majorDiagonalSum - minorDiagonalSum)
}