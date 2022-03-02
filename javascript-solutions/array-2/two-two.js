/**
 * Returns true if every 2 that appears in the array is next to another 2.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Boolean} - Returns a Boolean
 */
function twoTwo (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2 && (arr[i - 1] !== 2 && arr[i + 1] !== 2)) {
      return false;
    }
  }
  return true;
}