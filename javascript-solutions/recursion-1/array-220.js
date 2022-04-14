/**
 * Recursively computes and returns true if the array contains somewhere
 * a value followed in the array by that value times 10.
 * Returns false otherwise.
 * 
 * @param {Array} arr - An array of numbers
 * @param {Number} index - A starting index
 * @returns {Boolean} - Returns a Boolean
 */
function array220 (arr, index) {
  if (index > arr.length) {
    return false;
  }
  if (arr[index] === arr[index + 1] / 10) {
    return true;
  } else {
    return array220(arr, index + 1);
  }
}