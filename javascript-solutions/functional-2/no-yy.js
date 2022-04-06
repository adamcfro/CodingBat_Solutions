/**
 * Given an array of strings, returns an array where each string has 'y'
 * added at its end, omitting any resulting strings that contain 'yy'
 * as a substring anywhere.
 * 
 * @param {Array} arr - An array of strings
 * @returns {Array} - Returns a modified array
 */
function noYY (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 'y';
    if (arr[i].includes('yy')) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}