/**
 * Returns true if an array contains 2 twice or 3 twice.
 * 
 * @param {Arr} arr           An array parameter
 * @returns {Boolean}         Returns a Boolean
 */
function double23 (arr) {
  let twoCount = 0;
  let threeCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      twoCount += 1;
    } else if (arr[i] === 3) {
      threeCount += 1;
    }
  }
  return twoCount === 2 || threeCount === 2;
}