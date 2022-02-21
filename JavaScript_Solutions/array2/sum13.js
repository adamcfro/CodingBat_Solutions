/**
 * Returns a sum of numbers in an array, skipping any number that is 13 and all numbers that come after.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Number}          Returns a sum
 */
function sum13 (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 13) {
      break;
    } else {
      total += arr[i];
    }
  }
  return total;
}