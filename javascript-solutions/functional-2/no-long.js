/**
 * Given an array of strings, returns a list of the strings,
 * omitting any string length 4 or more.
 * 
 * @param {Array} arr - An array of strings
 * @returns {Array} - Returns a modified array
 */
function noLong (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 4) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}