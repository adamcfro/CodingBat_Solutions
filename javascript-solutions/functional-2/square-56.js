/**
 * Given an array of numbers, returns an array of those numbers squared
 * and the product added to 10, omitting any of the resulting numbers
 * that end in 5 or 6.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Array} - Returns a modified array
 */
function square56 (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = (arr[i] * arr[i]) + 10;
    if (arr[i] % 10 === 5 || arr[i] % 10 === 6) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}