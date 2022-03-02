/**
 * Returns true if an array has at least one element and the first and 
 * last elements are the same.
 * 
 * @param {Array} arr - An array parameter
 * @returns {Boolean} - Returns a Boolean
 */
function sameFirstLast (arr) {
  if (arr.length >= 1 && arr[0] === arr[arr.length - 1]) {
    return true;
  }
  return false;
}