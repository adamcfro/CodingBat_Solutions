/**
 * Returns true if every element in an array is either a 1 or a 4.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Boolean} - Returns a Boolean
 */
function only14 (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 1 && arr[i] !== 4) {
      return false;
    }
  }
  return true;
}