/**
 * Given a list of numbers, returns a list of those numbers,
 * omitting any that are between 13 and 19 inclusive.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Array} - Returns a modified array
 */
function noTeen (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 13 && arr[i] <= 19) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}