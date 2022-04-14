/**
 * Recursively computes and returns the number of times that the value 11
 * appears in the array.
 * 
 * @param {Array} arr - An array of numbers
 * @param {Number} index - A starting index
 * @returns {Number} - Returns a count number
 */
function array11 (arr, index) {
  if (index > arr.length) {
    return 0;
  }
  if (arr[index] === 11) {
    return 1 + array11(arr, index + 1);
  } else {
    return array11(arr, index + 1);
  }
}