// Input: an array of 0's and 1's
// Output minimum number of jumps to get to the end
// Constraints: Cannot land on thunder clouds (represented by 1s)
// Can jump 1 or 2 clouds at a time

function jumpingOnClouds(c) {
  // create a variable to track number of jumps
  let jumps = 0;
  // iterate over c
  for (let i = 0; i <= c.length; i++){
    console.log(i)
    // if current value + 2 is a cumulus cloud
    if (c[i+2]  === 0){
      jumps++
      i += 2
    } else{
      jumps++
    }
  }
  return jumps
  // i plus equals 2
  // jumps ++
  // return jumps
}
