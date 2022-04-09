/**
 * Returns the size of the largest mirror section found in the given array.
 * A mirror section in an array is a group of contiguous elements such that
 * somewhere in the array, the same group appears in reverse order.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Number} - Returns a number representing the largest mirror
 */
function maxMirror (arr) {
  let longestMirror = 0;
  let count = 0;
  let index = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length; j--) {
    if (j < 0) {
      i++;
      j = arr.length - 1;
    } else if (arr[i] === arr[j]) {
      if (count === 0) {
        index = i;
      }
      count ++;
      i++;
    } else if (count > 0) {
      if (count > longestMirror) {
        longestMirror = count;
      }
      count = 0;
      i = index + 1;
      j = arr.length;
    }
    if (i >= arr.length - 1) {
      if (count > longestMirror) {
        longestMirror = count;
      }
    }
  }
  return longestMirror;
}