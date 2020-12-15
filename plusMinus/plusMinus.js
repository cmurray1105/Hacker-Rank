// Input: an array of integers
// Output: console log the ratio of positives zeroes and negatives

function plusMinus(arr) {
  // create variables for all the sums
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  // iterate through arr
  for (let i = 0; i < arr.length; i++) {
    // determine if the number is positive, negative, or zero and increment the appropriate counter
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] === 0) {
      zeroCount++;
    } else {
      negativeCount++;
    }
  }
  // return an array with the averages

    console.log(positiveCount / arr.length)
    console.log(negativeCount / arr.length)
    console.log(zeroCount / arr.length)
}
