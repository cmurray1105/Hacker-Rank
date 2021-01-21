// Given a 6 x 6 2D Array, arr:
[
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
// An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representation:
// a b c
//   d
// e f g
// There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6 x 6
//   [
//   [-9,-9,-9, 1, 1, 1],
//   [ 0,-9, 0, 4, 3, 2],
//   [-9,-9,-9, 1, 2, 3],
//   [ 0, 0, 8, 6, 6, 0],
//   [ 0, 0, 0,-2, 0, 0],
//   [ 0, 0, 1, 2, 4, 0]
// ]
// Complete the function hourglassSum in the editor below.

// hourglassSum has the following parameter(s):

// int arr[6][6]: an array of integers
// returns the maximum hourglass sum
// each of the six lines of inputs arr[i] contains 6 space separated integers arr[i][j]
// return the largest maximum hourglass sum found in arr

function hourglassSum(arr) {
  // set max sum equal to negative infinity
  let maxSum = Number.NEGATIVE_INFINITY;
  // iterate through the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // set a sum variable to zero
      let sum = 0;
      // if there are enough values for an hour glass
      if (j + 2 <= 6 && i + 2 <= 6) {
        // add the sum of those values
        sum +=
          arr[i][j] +
          arr[i][j + 1] +
          arr[i][j + 2] +
          arr[i + 1][j + 1] +
          arr[i + 2][j] +
          arr[i + 2][j + 1] +
          arr[i + 2][j + 2];
        // if the sum is greater than the max sum
        if (sum > maxSum) {
          // set max sum to the sum
          maxSum = sum;
        }
      }
    }
  }
  // return maxSum
  return maxSum;
}
