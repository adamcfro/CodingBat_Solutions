/**
 * Returns the amount of times an even number appears in an array.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Number} - Returns a count
 */
function countEvens (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      total += 1;
    }
  }
  return total;
}