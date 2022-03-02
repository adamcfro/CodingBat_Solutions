/**
 * Returns true if the first or last element in an array of numbers is 6.
 * 
 * @param {Array} arr - An array parameter
 * @returns {Boolean} - Returns true if 6 at front or back of array
 */
function firstLast6 (arr) {
  if (arr[0] === 6 || arr[arr.length - 1] === 6) {
    return true;
  }
  return false;
}