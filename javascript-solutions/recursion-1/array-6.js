/**
 * Recursively computes and returns whether or not the given array
 * contains a 6, starting from position 'index'.
 * 
 * @param {Array} arr - An array of numbers
 * @param {Number} index - The starting index
 * @returns {Boolean} - Returns a Boolean
 */
function array6 (arr, index) {
  if (arr.length === 0 || index > arr.length) {
    return false;
  }
  if (arr[index] === 6) {
    return true;
  } else {
    return array6(arr, index + 1);
  }
}