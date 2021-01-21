// Input: n (number of socks), ar (colors represented by numbers in an array)
// Output: number of matching socks that can be sold
// Constraints: n will be between 1 and 100
// each value in the ar array will be between 1 and 100
// Edge Cases:

// create an object to count number of each color in the array
// every time 2 fits into that number is one pair. 
// count the pairs
// return the pair count
function sockMerchant(n, ar) {
  // Create an empty object
  let counts = {};
  let pairCount = 0;
  // iterate over the ar input array
  for (let i = 0; i < ar.length; i++){
    // if the counts does not contain a key equal to ar[i]
    if (!counts[ar[i]]){
      // create one and make it's value 1
      counts[ar[i]] = 1
      // otherwise increment the value by 1
    } else {
      counts[ar[i]] ++
    }
  }
  console.log(counts)
  // for each key in the object  figure out how many times it's value is divisible by 2, each time increment the pairCount by one
  for (let key in counts){
    counts[key]
    //return the pair count

}
