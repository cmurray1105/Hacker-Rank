// Input: n, the number of steps in the stair case
// Output: a staircase n units tall represented by #'s
function staircase(n) {
// iterate through n starting at 1 and ending at n
for (let i = 1; i <=n; i++){
  let string = '';
  // while the length of the string is less than n minus 1
  while (string.length < n-i){
// add a space to the string
string+= ' ';
  }
  // while the string's length is less than n add #'s
  while(string.length < n){
  string+= '#'
}
// console.log the string
console.log(string)
}
}