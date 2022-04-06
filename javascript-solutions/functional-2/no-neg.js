/**
 * Given a list of numbers, returns a list of numbers, 
 * omitting any that are less than 0.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Array} - Returns a modified array
 */
function noNeg (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr.splice(i, 1);
    }
  }
  return arr;
}