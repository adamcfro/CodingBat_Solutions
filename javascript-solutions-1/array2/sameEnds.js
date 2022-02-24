/**
 * Returns true if the group of n numbers at the start and end of the array are the same.
 * 
 * @param {Array} arr         An array of numbers
 * @param {Number} n          Number of elements
 * @returns {Boolean}         Returns a Boolean
 */
function sameEnds (arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (JSON.stringify(arr.slice(0, n)) === JSON.stringify(arr.slice(arr.length - n))) {
      return true;
    }
  }
  return false;
}