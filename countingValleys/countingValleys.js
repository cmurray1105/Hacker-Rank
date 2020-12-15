// Input: an integer: steps (number of steps in the hike), string: path (steps characters that describe the path (D for down, U for up)
// Output: the number of valleys traversed
// constraints: the number of steps will be more than 1 and less than or equal to 10^6
// Edge Cases:

// After going down, when you go back up, the number of valleys increases by one
// if previous direction is "D" and current direction is "U" increment valleys by one

function countingValleys(steps, path) {
  // create an altitude variable representing sea level and equal to zero
  let altitude = 0;
  // create a previousAlt variable equal to zero
  let previousAlt = 0;
  // iterate over the path string
  for (let i = 0; i < path.length; i++) {
    // previousAlt equals altitude
    let previousAlt = altitude;
    // if the current value is U increment sea level, if the value is D decrement the value
    if (path[i] === "U") {
      altitude++;
    } else {
      altitude--;
    }
    // if previousAlt < 0 && altitude === 0 then increment valleys
    if (previousAlt < 0 && altitude === 0) {
      valleys++;
    }
  }
  // return valleys
  return valleys;
}
