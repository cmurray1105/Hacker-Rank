// Input: An array to rotate and the number of rotations
// Output: the n rotated array
function rotLeft(a, d) {
  // create a new array variable
  let newArray = [];
  // iterate through the original array starting at index 1 and ending at array.length-1 pushing each value to the new array
  function rotate(a) {
    for (let i = 1; i < a.length; i++) {
      newArray.push(a[i]);
    }
    // push the value at the zero index to the new array
    newArray.push(a[0]);
    console.log(newArray);
    a = newArray;
  }
  // iterate d times
  for (let i = 0; i < d; i++) {
    // invoke rotate with each rotation
    rotate(a);
  }
  return a;
}
