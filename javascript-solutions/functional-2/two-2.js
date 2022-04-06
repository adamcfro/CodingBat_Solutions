/**
 * Given an array of non-negative numbers, returns an array of those numbers
 * multiplied by 2, omitting any of the resulting numbers that end in 2.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Array} - Returns a modified array
 */
function two2 (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
    if (arr[i] % 10 === 2) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}