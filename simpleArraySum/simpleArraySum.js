// Input: ar, an array of integers
// Output: the sum of all the array's elements
function simpleArraySum(ar) {
  // create a sum variable equal to zero
  let sum = 0;
  // iterate through the array, adding the value of each element to the sum
  for (let i = 0; i < ar.length; i++){
    sum += ar[i];
  }
  // return the sum
  return sum;
}