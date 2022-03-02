/**
 * Returns true if an array contains a 2 next to another 2.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Boolean} - Returns a Boolean
 */
function has22 (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2 && arr[i + 1] === 2) {
      return true;
    }
  }
  return false;
}