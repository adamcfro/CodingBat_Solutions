/**
 * Returns the number of clumps in a given array. 
 * A clump is a series of two or more adjacent elements of the same value.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Number} - Returns a count
 */
function countClumps (arr) {
  let count = 0;
  let holdValue;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      if (arr[i] !== holdValue) {
        count += 1;
        holdValue = arr[i];
      } else {
        holdValue = arr[i];
      }
    } else {
      holdValue = arr[i];
    }
  }
  return count;
}