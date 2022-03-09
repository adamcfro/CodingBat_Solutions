/**
 * Say that a "clump" in an array is a series of 2 or more adjacent elements 
 * of the same value. Return the number of clumps in the given array.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Number} - Returns a count number
 */
function countClumps (arr) {
  let count = 0;
  let clumpNumber;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] && arr[i] !== clumpNumber) {
      count += 1;
      clumpNumber = arr[i];
    } else {
      clumpNumber = arr[i];
    }
  }
  return count;
}