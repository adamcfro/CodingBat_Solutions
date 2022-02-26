/**
 * Returns the number of times a 6 appears next to another 6 in an array.
 * 
 * @param {Array} arr       An array parameter
 * @returns {Number}        Returns a count number
 */
function array667 (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 6 && arr[i + 1] === 6) {
      count += 1;
    }
  }
  return count;
}