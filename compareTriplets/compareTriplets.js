// Input: two arrays of length 3, a & b
// Output: the two scores, a in the first position and b's in the second
function compareTriplets(a, b) {
  // create two variables for the two scores
  let aScore = 0;
  let bScore = 0;
  // iterate through an array
  for (let i = 0; i < a.length; i++){
    if (a[i]> b[i]){
      aScore++
    } if (b[i]> a[i]){
      bScore++
    }
  }
  return [aScore, bScore]
  // if a > b then increment a's score and vice versa
  // return the scores
}
