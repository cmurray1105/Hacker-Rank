// Input: q... the original positions of everyone in line
// Output: console the minimum number of bribes to get from the original position or "Too Chaotic" if anyone has bribed more than two people

// I think for this one I can sort of apply bubble sort and modify it
// function minimumBribes(q) {
//   // create a bribeCount object
//   let bribeCount = {};
//   let totalBribes=0;
//   // iterate over the array
//   for (let i = 0; i < q.length; i++){
//     for (let j=0; j < q.length; j++){
//       // if (q[j] < j && j - q[j] > 2){
//       //   console.log("Too chaotic")
//       //   return
//       // }
//       // if (q[j] > j && q[j] - j > 2){
//       //   console.log("Too chaotic")
//       //   return
//       // }
//     // if the current value is greater than the next value
//     if (q[j] > q[j+1]){
//     // check if bribeCount[currentValue] exists
//       if (!bribeCount[q[j]]){
//         // if it does not create a bribeCount[currentValue] and make it equal to one
//         bribeCount[q[j]] = 1;
//       } else {
//         // otherwise increment by one
//         bribeCount[q[j]]++
//       }
//     // save the current value in a variable
//     let savedValue = q[j];
//     // set the current value to the next value
//     q[j] = q[j+1];
//     // set the next value to the saved value
//     q[j+1] = savedValue;
//   }
// }
// }
// for (let key in bribeCount){
//   if (bribeCount[key]>2){
//     console.log("Too chaotic")
//     return;
//   }
//   totalBribes += bribeCount[key];
// }
// console.log(totalBribes)
// }
function minimumBribes(q) {
  let chaotic = false
  var bribes = 0
  for (let i = 0; i < q.length; i++) {
    if (q[i] — (i+1) > 2) {
      chaotic = true;
    }
    for (let j = 0; j < i; j++) {
      if (q[j] > q[i]) {
         bribes++
        }
      }
    }
  if(chaotic === true){
    console.log(“Too chaotic”)
  } else {
    console.log(bribes)
  }
 }