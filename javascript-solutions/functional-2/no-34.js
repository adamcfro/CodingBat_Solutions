/**
 * Given an array of strings, returns an array of the strings,
 * omitting any string length 3 or 4.
 * 
 * @param {Array} arr - An array of strings
 * @returns {Array} - Returns a modified array
 */
function no34 (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 3 || arr[i].length === 4) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}