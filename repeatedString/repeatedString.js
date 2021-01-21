// I: a string called s and an integer called n representing the number of letters to consider
// O: the frequency of the letter 'a' in a string
// Constraints: I'm going to assume that all letters in the string are lower case

function repeatedString(s, n) {
  // create a substring of the first n letters
  // if the string is less than n letters long repeat the string until it is
  // create a count variable to count the number of a's
  let count = 0;
  let len = s.length;
  let times = n / len;
  let completeRepeats = Math.floor(times);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      count++;
    }
  }
  count *= completeRepeats;
  let remaining = n - len * completeRepeats;
  for (let i = 0; i < remaining; i++) {
    if (s[i] === "a") {
      count++;
    }
  }
  return count;
}

// for large numbers I could divide n by the length to find out how many times the original string fits
// count the occurrences of a in the original string and multiply by number of times original string fits and round down to nearest whole number
