/**
 * Returns the sum of numbers in an array, ignoring sections 
 * that start with 6 and extending to the next instance of 7.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Number} - Returns a sum
 */
function sum67 (arr) {
  let total = 0;
  let sentinel = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 6 && !sentinel) {
      total += arr[i];
    } else if (arr[i] === 6) {
      sentinel = true;
    } else if (arr[i] === 7) {
      sentinel = false;
    }
  }
  return total;
}