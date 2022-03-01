/**
 * Checks if the pattern [2, 7, 1] appears in an array.
 * 
 * @param {Array} arr - An array parameter
 * @returns {Boolean} - Returns a Boolean
 */
function has271 (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2 && arr[i + 1] === 7 && arr[i + 2]) {
      return true;
    }
  }
  return false;
}