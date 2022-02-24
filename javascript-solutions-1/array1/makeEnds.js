/**
 * Returns an array made up of the first and last elements of the original array.
 * 
 * @param {Array} arr         An array parameter 
 * @returns {Array}           Returns a modified array
 */
function makeEnds (arr) {
  return [arr[0], arr[arr.length - 1]];
}