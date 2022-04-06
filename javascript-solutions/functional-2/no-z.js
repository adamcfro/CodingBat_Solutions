/**
 * Given a list of strings, returns a list of the strings,
 * omitting any string that contains a 'z'.
 * 
 * @param {Array} arr 
 * @returns {Array}
 */
function noZ (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('z')) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}