/**
 * Returns an array made up of the two middle elements.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Array}           Returns a modified array of numbers
 */
function makeMiddle (arr) {
  let middleIndex = Math.floor(arr.length / 2) - 1;
  return [arr[middleIndex], arr[middleIndex + 1]]
}