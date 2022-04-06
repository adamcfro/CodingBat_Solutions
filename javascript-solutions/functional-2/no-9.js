/**
 * Given an array of non-negative integers, returns an array
 * of those numbers, except omitting any that end with 9.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Array} - Returns a modified array
 */
function no9 (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 9) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}