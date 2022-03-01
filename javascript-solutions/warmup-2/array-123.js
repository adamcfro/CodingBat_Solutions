/**
 * Checks if the sequence of numbers [1, 2, 3] occurs in the array parameter.
 * 
 * @param {Array} arr - An array parameter
 * @returns {Boolean} - Returns a Boolean
 */
function array123 (arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (JSON.stringify(arr.slice(i, i + 3)) === JSON.stringify([1, 2, 3])) {
      return true;
    } 
  }
  return false;
}