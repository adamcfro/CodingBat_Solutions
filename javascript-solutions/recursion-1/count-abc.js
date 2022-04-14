/**
 * Recursively computes and returns the total number of 'abc' and 'aba'
 * substrings that appear in the given string.
 * 
 * @param {String} str - A string parameter
 * @returns {Number} - Returns a count number
 */
function countAbc (str) {
  if (str.length === 0) {
    return 0;
  }
  if (str.substring(0, 3) === 'abc' || str.substring(0, 3) === 'aba') {
    return 1 + countAbc(str.substring(1));
  } else {
    return countAbc(str.substring(1));
  }
}