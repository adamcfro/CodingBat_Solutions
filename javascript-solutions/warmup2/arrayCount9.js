/**
 * Returns the number of times 9 appears in an array.
 * 
 * @param {Array} arr       An array parameter
 * @returns {Number}        A number count
 */
function arrayCount9 (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 9) {
      count += 1;
    }
  }
  return count;
}