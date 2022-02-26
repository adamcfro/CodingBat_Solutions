/**
 * Returns the sum of the first 2 elements in an array, or the sum of whatever elements are there.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Number}          Returns a sum
 */
function sum2 (arr) {
  let total = 0;
  if (arr.length === 0) {
    total += 0;
  } else if (arr.length === 1) {
    total += arr[0];
  } else {
    total += (arr[0] + arr[1]);
  }
  return total;
}
