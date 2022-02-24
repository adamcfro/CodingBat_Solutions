/**
 * Returns true if any of the first four elements in an array is a 9.
 * 
 * @param {Array} arr       An array parameter
 * @returns {Boolean}       Returns a Boolean
 */
function arrayFront9 (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i >= 4) {
      return false;
    } else if (arr[i] === 9) {
      return true;
    }
  }
  return false;
}