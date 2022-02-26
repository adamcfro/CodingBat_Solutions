/**
 * Returns a modified array where each 0 value in the array is replaced by the largest odd value to the right of the zero in the array.
 * 
 * @param {Array} arr         An array of numbers
 * @returns {Array}           Returns a modified array
 */
function zeroMax (arr) {
  let largestOdd = 0;
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 !== 0) {
      largestOdd = Math.max(largestOdd, arr[i]);
    } 
    if (arr[i] === 0) {
      arr[i] = largestOdd;
    }
  }
  return arr;
}