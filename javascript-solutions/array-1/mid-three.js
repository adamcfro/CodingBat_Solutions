/**
 * Returns the middle three elements of an odd length array.
 * 
 * @param {Array} arr - An array parameter
 * @returns {Array} - Returns a modified array
 */
function midThree (arr) {
  let middleIndex = Math.floor(arr.length / 2) - 1;
  return arr.slice(arr[middleIndex - 1], arr[middleIndex + 2]);
}