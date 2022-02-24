/**
 * Returns true if the sum of 2's that appear in an array is exactly 8.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Boolean}         Returns a Boolean
 */
function sum28 (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      total += arr[i];
    }
  }
  return total === 8;
}